// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";let timeout=12e4,poin=4999,handler=async(m,{conn:conn,command:command,usedPrefix:usedPrefix})=>{conn.tebakbendera=conn.tebakbendera?conn.tebakbendera:{};let id=m.chat;if(id in conn.tebakbendera)throw conn.reply(m.chat,"Masih ada soal belum terjawab di chat ini",conn.tebakbendera[id][0]),!1;let src=await(await fetch("https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json")).json(),json=src[Math.floor(Math.random()*src.length)],caption=`*${command.toUpperCase()}*\nTimeout *${(timeout/1e3).toFixed(2)} detik*\nKetik ${usedPrefix}hben untuk bantuan\nBonus: ${poin} XP\n    `.trim();conn.tebakbendera[id]=[await conn.sendFile(m.chat,json.img,"",caption,m),json,poin,setTimeout((()=>{conn.tebakbendera[id]&&conn.reply(m.chat,`Waktu habis!\nJawabannya adalah *${json.name}*`,conn.tebakbendera[id][0]),delete conn.tebakbendera[id]}),timeout)]};handler.help=["tebakbendera"],handler.tags=["game"],handler.command=/^tebakbendera/i;export default handler;const buttons=[["Hint","/hben"],["Nyerah","menyerah"]];