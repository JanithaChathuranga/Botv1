// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.tebakkata=conn.tebakkata?conn.tebakkata:{};let id=m.chat;if(!(id in conn.tebakkata))throw!1;let json=conn.tebakkata[id][1];conn.reply(m.chat,"```"+json.jawaban.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hkat$/i,handler.limit=!0;export default handler;