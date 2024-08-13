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
require("./all/module.js")
const { color } = require('./all/function')
const version = require("@whiskeysockets/baileys/package.json").version
//========== Setting Owner ==========//
global.owner = "2348102487241"
global.namaowner = "𝒆𝒅𝒏𝒖𝒕 𝒉𝒊𝒎𝒔𝒆𝒍𝒇"
global.namaowner2 = "єdnut001"

//======== Setting Bot & Link ========//
global.namabot = "𝐍𝐚𝐫𝐮𝐭𝐨 𝐯2 𝐛𝐮𝐠" 
global.botname = "𝐍𝐚𝐫𝐮𝐭𝐨 𝐯2 𝐛𝐮𝐠"
global.namabot2 = "𝐍𝐚𝐫𝐮𝐭𝐨 𝐕𝐢𝐫𝐮𝐬"
global.version = "2.0"
global.foother = "Naruto v2 by Ednut"
global.idsaluran = "120363297279563825@newsletter"
global.linkgc = 'https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W'
global.linksaluran = "https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W"
global.linkyt = 'https://youtube.com/@Ednuthimself'
global.linktele = "https://t.me/Ednut_x"
global.packname = "Created By Naruto 2.0 Gen 1"
global.author = "Ednut001"
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false
global.antibug = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========== Setting Foto ===========//

//========== Setting Panell & Gausah isi kalo gadaa ==========//
//========== Setting Panell & Gausah isi kalo gadaa ==========//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""

global.fake = {
	anonim: 'https://i.imgur.com/AQGzo4F.jpeg',
	thumbnailUrl: 'https://i.imgur.com/KQFMBHl.jpeg',
	thumbnail: fs.readFileSync('./media/anggazyy.jpg'),
	docs: fs.readFileSync('./media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
    ch: 'https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W',
	gh: 'https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W',
	
}
//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "2347036214381"
global.gopay = false
global.ovo = false
global.qris = fs.readFileSync("./media/qris.jpg")
                             
//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "Nop2RDsy0Uyh1WHE17CC59aEhen-ZA61MWNrAqVl"
global.tld1 = "digitalserver.biz.id"

//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error! An error occurred.",
"done": "Done ✅.", 
"wait": "Please wait a moment im processing🥶.", 
"group": "*•Group Only* This Feature Is Only For Within Groups!", 
"private": "*• Private Chat* use in private chat only 👤", 
"anggazyyprem": "*~Naruto v2 System:*\n\n- Only for premium users, dear👀..",
"admin": "*•Admin Only*🗣️", 
"adminbot": "*•Bot Admin* promotion needed🌹", 
"owner": "*my owner only 🥇 `ᴱᵈⁿᵘᵗ` ☠️*", 
"developer": "*you are not `ednut` ✨*"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})