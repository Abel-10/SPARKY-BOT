const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = false
global.autoReadAll = false
global.antitags = true

//aumto functioner
//global.autoTyping = false //auto tying in gc (true to on, false to off)
//global.autoRecord = false //auto recording (true to on, false to off)

global.Owner = ['918547659493']
global.OwnerNumber = ['918547659493']
global.ownertag = ['918547659493']
global.BotName = "Ⴝ𝚃𝚁𝙰𝙽𝙶𝙴 𝙱𝙾𝚃"
global.packname = "𝕾𝕿𝕽𝕬𝕹𝕲𝕰 𝕭𝕺𝕿"
global.author = "By: ᴀʟᴩʜᴀ"
global.OwnerName = "𝙳𝙾𝙲𝚃𝙾𝚁 𝙼𝙰𝚂𝚂"
global.BotSourceCode = "https://github.com/Sparkymon777/SPARKY-BOT"
global.SupportGroupLink = "https://chat.whatsapp.com/JTUrdnOziKD44ScoBoggmh"
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from SPARKY.js  otherwise buttons will not work //
global.prefa = ['.'] 


global.location = "Kerala, India"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://i.imgur.com/iaWuQRB.jpeg' }
global.websitex = "https://github.com/Sparkymon777"
global.lolhuman = "𝚂 𝚃 𝚁 𝙰 𝙽 𝙶 𝙴"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Job done...',
    useradmin: 'Sorry, only *Group Admins* can use this command *Dear*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command, Yeah!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Okey ?!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: ' 𝙾𝙽𝙽𝚄 𝙰𝙳𝙴𝙽𝙶 𝙺𝚄𝚃𝚃𝙰 𝚃𝙷𝙴𝚁𝙰𝙼',
    nolink: 'Please provide me *link*, Uff!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!, Haha',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert  Uff! This is not a NSFW enabled group!, Uff!,'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
