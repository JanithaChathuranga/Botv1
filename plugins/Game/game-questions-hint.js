// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.question=conn.question?conn.question:{};let id=m.chat;if(!(id in conn.question))throw!1;let json=conn.question[id][1];conn.reply(m.chat,"```"+json.results[0].correct_answer.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^quest$/i,handler.limit=!0;export default handler;