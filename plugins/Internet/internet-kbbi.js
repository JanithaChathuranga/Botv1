// Klo mau pake, pake aja ini bkn enc cma terser aja

import{kbbi}from"@bochilteam/scraper";let handler=async(m,{text:text,usedPrefix:usedPrefix,command:command})=>{if(!text)throw`Example use ${usedPrefix}${command} halo`;const res=await kbbi(text);m.reply(`\n${res.map((v=>`\n*📌${v.title}*\n\n${v.means.map((v=>"- "+v)).join("\n`")}\n`)).join("\n").trim()}\n\nNote:\np = Partikel: kelas kata yang meliputi kata depan, kata sambung, kata seru, kata sandang, ucapan salam\nn = Nomina: kata benda\n`.trim())};handler.help=["kbbi <teks>"],handler.tags=["internet"],handler.command=/^kbbi$/i;export default handler;