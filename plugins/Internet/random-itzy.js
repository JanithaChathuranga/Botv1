// Klo mau pake, pake aja ini bkn enc cma terser aja

import axios from"axios";let handler=async(m,{conn:conn,args:args,usedPrefix:usedPrefix,command:command})=>{let res=(await axios.get("https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/itzy.json")).data,mystic=await res[Math.floor(res.length*Math.random())];conn.sendFile(m.chat,mystic,"error.jpg",`_${command}_`,m)};handler.help=["itzy","kpopitzy"],handler.tags=["internet"],handler.command=/^(itzy|kpopitzy)$/i;export default handler;