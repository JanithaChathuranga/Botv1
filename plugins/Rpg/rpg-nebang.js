// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,usedPrefix:usedPrefix})=>{let user=global.db.data.users[m.sender],timers=clockString(108e5-(new Date-user.lastlumber)),penebang=await conn.getName(m.sender);if(user.stamina<20)return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *${usedPrefix}eat`);if(user.lastlumber>108e5)throw m.reply(`Kamu masih kelelahan\nHarap tunggu ${timers} lagi`);let hmsil1=`${10*`${Math.floor(300*Math.random())}`}`,hmsil2=`${10*`${Math.floor(3e3*Math.random())}`}`,hmsil3=`${10*`${Math.floor(300*Math.random())}`.trim()}`,jln=`\n🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛\n⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳\n\n✔️ ${penebang} Mencari area....\n`,jln2=`\n⬛⬛⬛⬛⬛⬛🚶⬛⬛⬛\n⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳\n\n➕ ${penebang} Hampir sampai....\n`,jln3=`\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛\n⬛⬛⬛⬛⬛⬛⬛⬛⬛🚶\n🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳\n\n➕ ${penebang} Mulai menebang....\n`,jln4=`\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n🏘️ 🏘️ 🚶\n\n➕ ${penebang}\n💹 Menerima hasil....\n`,hsl=`\n*《 Hasil Nebang ${penebang} 》*\n\n *🌳 = [ ${hmsil1} ] Kayu*\n *💹 = [ ${hmsil2} ] money*\n *✉️ = [ ${hmsil3} ] exp*\n \n Stamina anda berkurang -20\n`;user.axedurability-=5,user.stamina-=20,user.money+=hmsil2,user.kayu+=hmsil1,user.exp+=hmsil3,setTimeout((()=>{conn.reply(m.chat,hsl,m)}),27e3),setTimeout((()=>{conn.reply(m.chat,jln4,null)}),25e3),setTimeout((()=>{conn.reply(m.chat,jln3,null)}),2e4),setTimeout((()=>{conn.reply(m.chat,jln2,null)}),15e3),setTimeout((()=>{conn.reply(m.chat,jln,null)}),1e4),setTimeout((()=>{conn.reply(m.chat,`🔍 ${penebang} Mencari Area nebang.....`,null)}),0),user.lastlumber=1*new Date};handler.help=["nebang"],handler.tags=["rpg"],handler.command=/^(nebang|menebang)$/i,handler.group=!0;export default handler;function clockString(ms){return["\n"+(isNaN(ms)?"--":Math.floor(ms/864e5))," *Days ☀️*\n ",isNaN(ms)?"--":Math.floor(ms/36e5)%24," *Hours 🕐*\n ",isNaN(ms)?"--":Math.floor(ms/6e4)%60," *Minute ⏰*\n ",isNaN(ms)?"--":Math.floor(ms/1e3)%60," *Second ⏱️* "].map((v=>v.toString().padStart(2,0))).join("")}