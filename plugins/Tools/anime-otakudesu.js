// Klo mau pake, pake aja ini bkn enc cma terser aja

import axios from"axios";let handler=async(m,{conn:conn,args:args,usedPrefix:_p})=>{if(!args[0])throw"Judul anime?\nContoh : date a live";let res=(await axios.get(API("can","/api/anime/otakudesu/search",{query:args[0]}))).data,tekss=(res.result,res.result.map((v=>`${v.title}\n${v.link}`)).filter((v=>v)).join("\n\n"));try{await m.reply(tekss)}catch(e){console.log(e),m.reply("Terjadi kesalahan atau server sedang mengalami gangguan.")}};handler.help=["otaku"].map((v=>v+" <anime>")),handler.tags=["tools"],handler.command=/^(otaku|otakudesu)$/i;export default handler;