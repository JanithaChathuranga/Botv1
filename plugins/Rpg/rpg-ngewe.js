// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{let _timers=3e5-(new Date-global.db.data.users[m.sender].lastngojek),order=global.db.data.users[m.sender].ojekk,timers=clockString(_timers),name=conn.getName(m.sender),user=global.db.data.users[m.sender];if(new Date-global.db.data.users[m.sender].lastngojek>3e5){Math.floor(10*Math.random()),Math.floor(10*Math.random());let randomaku4=`${Math.floor(5*Math.random())}`,rbrb4=(Math.floor(10*Math.random()),15729*randomaku4),rbrb5=2e4*`${Math.floor(10*Math.random())}`.trim();var hsl=`\n*—[ Hasil Ngewe ${name} ]—*\n ➕ 💹 Uang = [ ${`${rbrb4}`} ]\n ➕ ✨ Exp = [ ${`${rbrb5}`} ] \n ➕ 📛 Warn = +1\t\t \n ➕ 😍 Order Selesai = +1\n➕  📥Total Order Sebelumnya : ${order}\n${wm}\n`;global.db.data.users[m.sender].warn+=1,global.db.data.users[m.sender].money+=rbrb4,global.db.data.users[m.sender].exp+=rbrb5,global.db.data.users[m.sender].ojekk+=1,setTimeout((()=>{m.reply(`${hsl}`)}),27e3),setTimeout((()=>{m.reply("\n🥵💦💦Ahhhhhh😫\n")}),25e3),setTimeout((()=>{m.reply("     \n🥵Ahhhh, Sakitttt!! >////<\n 💦Crotttt.....\n")}),2e4),setTimeout((()=>{m.reply("\n🥵 Mulai mengocok.....\n")}),15e3),setTimeout((()=>{m.reply("\n✔️ Mendapatkan pelanggan....\n")}),1e4),setTimeout((()=>{m.reply("🔍Mencari pelanggan.....")}),0),user.lastngojek=1*new Date}else conn.reply(m.chat,`Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n🕔 *${timers}*`,m)};handler.help=["ngewe"],handler.tags=["rpg"],handler.command=/^(ngewe|anu)$/i,handler.register=!0,handler.premium=!0;export default handler;function clockString(ms){let h=Math.floor(ms/36e5),m=Math.floor(ms/6e4)%60,s=Math.floor(ms/1e3)%60;return console.log({ms:ms,h:h,m:m,s:s}),[h,m,s].map((v=>v.toString().padStart(2,0))).join(":")}