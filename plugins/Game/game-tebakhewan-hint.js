// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.tebakhewan=conn.tebakhewan?conn.tebakhewan:{};let id=m.chat;if(!(id in conn.tebakhewan))throw!1;let json=conn.tebakhewan[id][1];conn.reply(m.chat,"```"+json.title.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hhew$/i,handler.limit=!0;export default handler;