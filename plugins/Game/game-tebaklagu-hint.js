// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.tebaklagu=conn.tebaklagu?conn.tebaklagu:{};let id=m.chat;if(!(id in conn.tebaklagu))throw!1;let json=conn.tebaklagu[id][1];conn.reply(m.chat,"```"+json.judul.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hlag$/i,handler.limit=!0;export default handler;