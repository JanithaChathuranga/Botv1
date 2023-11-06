// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.tebakanjime=conn.tebakanjime?conn.tebakanjime:{};let id=m.chat;if(!(id in conn.tebakanjime))throw!1;let json=conn.tebakanjime[id][1];conn.reply(m.chat,"```"+json.name.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hani$/i,handler.limit=!0;export default handler;