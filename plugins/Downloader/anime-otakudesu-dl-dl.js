// Klo mau pake, pake aja ini bkn enc cma terser aja

import axios from"axios";let handler=async(m,{conn:conn,text:text})=>{if(!text)throw"Link?";if(!text.includes("episode"))throw"Invalid Url...";let x=(await axios.get(API("can","/api/anime/otakudesu/dl",{link:text}))).data.result;try{await conn.reply(m.chat,`*Title :* ${x.title}\n\n*Download Quality 360p :* ${x.low}\n*Download Quality 480p :* ${x.medium}\n*Download Quality 720p :* ${x.high}`,m)}catch(e){console.log(e),m.reply("Error :(")}};handler.help=["otakudl"].map((v=>v+" <id>")),handler.tags=["downloader"],handler.command=/^(otakudl|otakudesudl)$/i;export default handler;