// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";let handler=async(m,{conn:conn,command:command})=>{let url=`https://api.xyroinee.xyz/api/asupan/image/indonesia?apikey=${global.xyro}`;conn.sendFile(m.chat,url,"anu.jpg","_Nih Kak_",m)};handler.command=/^(indonesia)$/i,handler.tags=["random"],handler.help=["indonesia"],handler.premium=!1,handler.limit=!0;export default handler;