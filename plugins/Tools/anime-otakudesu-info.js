// Klo mau pake, pake aja ini bkn enc cma terser aja

import axios from"axios";let handler=async(m,{conn:conn,text:text,usedPrefix:_p})=>{if(!text)throw"Link?";if(!text.includes("anime"))throw"Invalid Url...";let vs=(await axios.get(API("can","/api/anime/otakudesu/info",{link:text}))).data.result,tekss=vs.episode.map((v=>`${v._title}\n${v._eps}`)).filter((v=>v)).join("\n\n");try{await m.reply(`*Title :* ${vs.title}\n*Japanese Title :* ${vs.japanese_title||"-"}\n*Score :* ${vs.score||"-"}\n*Produser :* ${vs.producer||"-"}\n*Type :* ${vs.type}\n*Status :* ${vs.status||"-"}\n*Total Eps :* ${vs.total_eps||"-"}\n*Durasi :* ${vs.duration||"-"}\n*Release :* ${vs.release_date||"-"}\n*Studio :* ${vs.studio||"-"}\n*Genre :* ${vs.genre}\n\n${tekss}`)}catch(e){console.log(e),m.reply("Terjadi kesalahan atau server sedang mengalami gangguan.")}};handler.help=["otakuinfo"].map((v=>v+" <url>")),handler.tags=["tools"],handler.command=/^(otakuinfo|otakudesuinfo)$/i;export default handler;