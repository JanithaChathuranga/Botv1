// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.tebakingambar=conn.tebakingambar?conn.tebakingambar:{};let id=m.chat;if(!(id in conn.tebakingambar))throw!1;let json=conn.tebakingambar[id][1];conn.reply(m.chat,"```"+json.jawaban.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hgam$/i,handler.limit=!0;export default handler;