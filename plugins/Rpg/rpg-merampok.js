// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,text:text,usedPrefix:usedPrefix,command:command})=>{let who,dapat=Math.floor(1e5*Math.random());m.sender;if(who=m.isGroup?m.mentionedJid[0]:m.chat,!who)throw"Tag salah satu lah";if(void 0===db.data.users[who])throw"Pengguna tidak ada didalam data base";let timers=clockString(36e5-(new Date-global.db.data.users[m.sender].lastrob)),users=global.db.data.users;if(new Date-global.db.data.users[m.sender].lastrob>36e5){if(1e4>users[who].money)throw"ᴛᴀʀɢᴇᴛ ɢᴀᴀᴅᴀ 💰ᴜᴀɴɢ ʙᴏᴅᴏʜ, ᴋɪꜱᴍɪɴ ᴅɪᴀ";users[who].money-=1*dapat,users[m.sender].money+=1*dapat,global.db.data.users[m.sender].lastrob=1*new Date,conn.reply(m.chat,`ʙᴇʀʜᴀꜱɪʟ ᴍᴇʀᴀᴍᴘᴏᴋ ᴍᴏɴᴇʏ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ 💰${dapat}`,m)}else conn.reply(m.chat,`Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`,m)};handler.help=["merampok *@tag*"],handler.tags=["rpg"],handler.command=/^merampok|rob$/,handler.limit=!0,handler.group=!0;export default handler;function pickRandom(list){return list[Math.floor(Math.random()*list.length)]}function clockString(ms){return["\n"+(isNaN(ms)?"--":Math.floor(ms/864e5))," *Days ☀️*\n ",isNaN(ms)?"--":Math.floor(ms/36e5)%24," *Hours 🕐*\n ",isNaN(ms)?"--":Math.floor(ms/6e4)%60," *Minute ⏰*\n ",isNaN(ms)?"--":Math.floor(ms/1e3)%60," *Second ⏱️* "].map((v=>v.toString().padStart(2,0))).join("")}