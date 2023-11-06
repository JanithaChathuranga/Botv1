// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.asahotak=conn.asahotak?conn.asahotak:{};let id=m.chat;if(!(id in conn.asahotak))throw!1;let json=conn.asahotak[id][1];conn.reply(m.chat,"```"+json.jawaban.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hasa$/i,handler.limit=!0;export default handler;