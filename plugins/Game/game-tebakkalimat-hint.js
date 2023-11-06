// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.tebakkalimat=conn.tebakkalimat?conn.tebakkalimat:{};let id=m.chat;if(!(id in conn.tebakkalimat))throw!1;let json=conn.tebakkalimat[id][1];conn.reply(m.chat,"```"+json.jawaban.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hkal$/i,handler.limit=!0;export default handler;