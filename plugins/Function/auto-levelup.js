// Klo mau pake, pake aja ini bkn enc cma terser aja

import{canLevelUp,xpRange}from"../../lib/levelling.js";import{levelup}from"../../lib/canvas.js";export async function before(m){let user=global.db.data.users[m.sender];if(!user.autolevelup)return!0;if(!canLevelUp(user.level,user.exp,global.multiplier)){let{min:min,xp:xp,max:max}=xpRange(user.level,global.multiplier);throw`\nLevel ${user.level} 📊\n*${user.exp-min} / ${xp}*\nKurang *${max-user.exp}* lagi! ✨\n`.trim()}let before=1*user.level;for(;canLevelUp(user.level,user.exp,global.multiplier);)user.level++;if(before!==user.level){let teks=`Selamat ${this.getName(m.sender)} naik 🧬level\n.             ${user.role}`,str=`${this.getName(m.sender)} naik 🧬level\n.             ${user.role}\n\n*🎉 C O N G R A T S 🎉*\n*${before}* ➔ *${user.level}* [ *${user.role}* ]\n\n• 🧬Level Sebelumnya : ${before}\n• 🧬Level Baru : ${user.level}\n• Pada Jam : ${(new Date).toLocaleString("id-ID")}\n\n*Note:* _Semakin sering berinteraksi dengan bot Semakin Tinggi level kamu_\n`.trim();try{let img=await levelup(teks,user.level);await this.sendFile(m.chat,img,"",str,m)}catch(e){await this.sendFile(m.chat,fla+"levelup","",str,m)}}}