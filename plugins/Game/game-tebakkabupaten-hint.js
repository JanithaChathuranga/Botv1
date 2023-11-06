// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.tebakkabupaten=conn.tebakkabupaten?conn.tebakkabupaten:{};let id=m.chat;if(!(id in conn.tebakkabupaten))throw!1;let json=conn.tebakkabupaten[id][1];conn.reply(m.chat,"```"+json.title.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hkab$/i,handler.limit=!0;export default handler;