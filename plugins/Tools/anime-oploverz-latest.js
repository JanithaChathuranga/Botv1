// Klo mau pake, pake aja ini bkn enc cma terser aja

import axios from"axios";let handler=async(m,{conn:conn})=>{let api=(await axios.get(API("skizo","/api/oploverz/ongoing",{apikey:APIKeys["https://xzn.wtf"]}))).data;try{let tekss=api.map((v=>`${v.title}\n${v.link}`)).filter((v=>v)).join("\n\n");await m.reply(tekss)}catch(e){console.log(e),m.reply("Terjadi kesalahan atau server sedang mengalami gangguan.")}};handler.help=["oploverzlatest"],handler.tags=["tools"],handler.command=/^(oploverzlatest|oplolatest)$/i;export default handler;