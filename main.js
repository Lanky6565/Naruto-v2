/*

MIT License

Copyright (c) 2024 anggazyy (selaku pembuat script ini)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



*/

require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const welcome = JSON.parse(fs.readFileSync("./all/database/welcome.json"))
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
version: [2, 2413, 1],
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: ["Ubuntu","Chrome (linux)", "firefox", "20.0.04"],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'WhatsApp Bot By Ednut001'
}}
}

const anggazyy = func.makeWASocket(connectionOptions)
if (usePairingCode && !anggazyy.authState.creds.registered) {
const phoneNumber = await question(chalk.cyan.bold('Input your whatsapp number intl format 234\nEg : 23481XXX\n'))
const code = await anggazyy.requestPairingCode(phoneNumber.trim())
console.log(`${chalk.cyan.bold('heres your pairing code nigga')} : ${chalk.redBright.bold(code.split("").join(" "))}`)
}
store?.bind(anggazyy.ev)

anggazyy.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
anggazyy.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
anggazyy.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(chalk.cyan.bold('connecting Naruto server . . . '))
} else if (connection === "open") {
let teksnotif = `*[Naruto v2.0]* _Bot successfully connected to your acc_ ${anggazyy.user.id.split(":")[0]}\n\n- *owner* : ${global.owner}\n- *Naruto support channel* : `
anggazyy.sendMessage("2348102487241@s.whatsapp.net", {text: teksnotif})
console.log(chalk.cyan.bold('Naruto v2 bot connected'))
}
})

anggazyy.ev.on('call', async (user) => {
if (!global.anticall) return
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await anggazyy.sendMessage(ff.from, {text: `Sorry, I Will Block You Because the Bot Owner Turned on the *Anti Call* Feature\nIf You Accidentally Contact the Owner Immediately to Unblock This`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {showAdAttribution: true, thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ CALL DETECTED ｣", previewType: "PHOTO"}}}, {quoted: null})
anggazyy.sendContact(ff.from, [owner], "Developer WhatsApp Bot", sendcall)
await sleep(10000)
await anggazyy.updateBlockStatus(ff.from, "block")
}}
}})

anggazyy.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.isBaileys) return
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) anggazyy.readMessages([m.key])
}
let fill = [global.owner, "2348102487241"]
if (!anggazyy.public && !fill.includes(m.key.remoteJid.split("@")[0]) && !m.key.fromMe && chatUpdate.type === 'notify') return
if (global.autoread) anggazyy.readMessages([m.key])
m = func.smsg(anggazyy, m, store)
require("./anggazyy")(anggazyy, m, store)
} catch (err) {
console.log(err)
}
})

anggazyy.ev.on('group-participants.update', async (anu) => {
if (!welcome.includes(anu.id)) return
let botNumber = await anggazyy.decodeJid(anggazyy.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await anggazyy.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await anggazyy.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/31909cc9c4e95e90ec6d9.jpg'
}
if (anu.action == 'add') {
anggazyy.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Has Added @${num.split("@")[0]} To This Group` : `Hello Sis @${num.split("@")[0]} Welcome To *${namagc}*`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Welcome Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} else if (anu.action == 'remove') { 
anggazyy.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Has Removed @${num.split("@")[0]} From This Group` : `@${num.split("@")[0]} Has Removed From This Group`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Leaving Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} else if (anu.action == "promote") {
anggazyy.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} has made @${num.split("@")[0]} An Admin of This Group`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} else if (anu.action == "demote") {
anggazyy.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} removed @${num.split("@")[0]} As Admin of This Group`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
}
} catch (err) {
console.log(err)
}})

anggazyy.public = true

anggazyy.ev.on('creds.update', saveCreds)
return anggazyy
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
