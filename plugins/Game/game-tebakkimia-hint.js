// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.tebakkimia=conn.tebakkimia?conn.tebakkimia:{};let id=m.chat;if(!(id in conn.tebakkimia))throw!1;let json=conn.tebakkimia[id][1];conn.reply(m.chat,"```"+json.unsur.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hkim$/i,handler.limit=!0;export default handler;