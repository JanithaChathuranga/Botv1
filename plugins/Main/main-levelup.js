// Klo mau pake, pake aja ini bkn enc cma terser aja

import{canLevelUp,xpRange}from"../../lib/levelling.js";import{levelup}from"../../lib/canvas.js";import db from"../../lib/database.js";let handler=async(m,{conn:conn})=>{let user=global.db.data.users[m.sender];if(!canLevelUp(user.level,user.exp,global.multiplier)){let{min:min,xp:xp,max:max}=xpRange(user.level,global.multiplier);throw`\nLevel *${user.level} (${user.exp-min}/${xp})*\nKurang *${max-user.exp}* lagi!\n`.trim()}let before=1*user.level;for(;canLevelUp(user.level,user.exp,global.multiplier);)user.level++;if(before!==user.level){let teks=`Selamat ${conn.getName(m.sender)} naik 🧬level`,str=`\n${teks} \n• 🧬Level Sebelumnya : ${before}\n• 🧬Level Baru : ${user.level}\n• 🧬Role Kamu : ${user.role}\n• Pada Jam : ${(new Date).toLocaleString("id-ID")}\n*_Semakin sering berinteraksi dengan bot Semakin Tinggi level kamu_*\n`.trim();try{const img=await levelup(teks,user.level);conn.sendFile(m.chat,img,"levelup.jpg",str,m)}catch(e){m.reply(str)}}};handler.help=["levelup"],handler.tags=["xp"],handler.command=/^level(|up)$/i;export default handler;