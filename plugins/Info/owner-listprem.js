// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,args:args})=>{let user=Object.entries(global.db.data.users).filter((user=>user[1].premiumTime)).map((([key,value])=>({...value,jid:key}))),fkon={key:{fromMe:!1,participant:`${m.sender.split`@`[0]}@s.whatsapp.net`,...m.chat?{remoteJid:"16504228206@s.whatsapp.net"}:{}},message:{contactMessage:{displayName:"Premium",vcard:`BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:Premium\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}},premTime=global.db.data.users[m.sender].premiumTime,prem=global.db.data.users[m.sender].premium,sortedP=(clockString(premTime-1*new Date+" "),user.map(toNumber("premiumTime")).sort(sort("premiumTime"))),len=args[0]&&args[0].length>0?Math.min(100,Math.max(parseInt(args[0]),10)):Math.min(10,sortedP.length);await conn.reply(m.chat,`┌✦ *My Premium Time:*\n┊• *Name:* ${conn.getName(m.sender)}\n${prem?`${clockString(premTime-1*new Date)}`:"┊• *PremiumTime:* Expired"}\n┗━═┅═━––––––๑\n\n•·–––––––––––––––––––––·•\n${sortedP.slice(0,len).map((({jid:jid,name:name,premiumTime:premiumTime,registered:registered},i)=>`\n\n┌✦ ${registered?name:conn.getName(jid)}\n┊• wa.me/${jid.split`@`[0]}\n${premiumTime>0?`${clockString(premiumTime-1*new Date)}`:"┊ *Expired*"}`)).join`\n┗━═┅═━––––––๑`}\n┗━═┅═━––––––๑`.trim(),fkon),setTimeout((()=>{db.data.chats[m.chat].deletemedia&&conn.deleteMessage(m.chat,key)}),db.data.chats[m.chat].deletemediaTime)};handler.help=["premlist"],handler.tags=["info"],handler.command=/^(listprem|premlist)$/i;export default handler;function clockString(ms){return["┊ ",isNaN(ms)?"--":Math.floor(ms/31104e6)%10," *Tahun*\n","┊ ",isNaN(ms)?"--":Math.floor(ms/2592e6)%12," *Bulan*\n","┊ ",isNaN(ms)?"--":Math.floor(ms/864e5)%30," *Hari*\n","┊ ",isNaN(ms)?"--":Math.floor(ms/36e5)%24," *Jam*\n","┊ ",isNaN(ms)?"--":Math.floor(ms/6e4)%60," *Menit*\n","┊ ",isNaN(ms)?"--":Math.floor(ms/1e3)%60," *Detik*"].map((v=>v.toString().padStart(2,0))).join("")}function sort(property,ascending=!0){return property?(...args)=>args[1&ascending][property]-args[1&!ascending][property]:(...args)=>args[1&ascending]-args[1&!ascending]}function toNumber(property,_default=0){return property?(a,i,b)=>({...b[i],[property]:void 0===a[property]?_default:a[property]}):a=>void 0===a?_default:a}