// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.lengkapikalimat=conn.lengkapikalimat?conn.lengkapikalimat:{};let id=m.chat;if(!(id in conn.lengkapikalimat))throw!1;let json=conn.lengkapikalimat[id][1];conn.reply(m.chat,"```"+json.jawaban.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hlen$/i,handler.limit=!0;export default handler;