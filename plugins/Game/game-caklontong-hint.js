// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.caklontong=conn.caklontong?conn.caklontong:{};let id=m.chat;if(!(id in conn.caklontong))throw!1;let json=conn.caklontong[id][1];conn.reply(m.chat,"```"+json.jawaban.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hcak$/i,handler.limit=!0;export default handler;