// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";let handler=async(m,{conn:conn,isOwner:isOwner,usedPrefix:usedPrefix,command:command,text:text,args:args})=>{if(!Number(text))return m.reply("Masukan Nomornya");await m.reply(wait);let res=await fetch("https://civitai.com/api/v1/models"),resu=(await res.json()).items[text].modelVersions[0].images[0].meta.prompt;await m.reply(resu)};handler.help=["modeldif"],handler.tags=["internet"],handler.command=/^(modeldif)$/i;export default handler;