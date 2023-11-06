// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.tebaklirik=conn.tebaklirik?conn.tebaklirik:{};let id=m.chat;if(!(id in conn.tebaklirik))throw!1;let json=conn.tebaklirik[id][1];conn.reply(m.chat,"```"+json.jawaban.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hlir$/i,handler.limit=!0;export default handler;