// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{conn.tebakbendera=conn.tebakbendera?conn.tebakbendera:{};let id=m.chat;if(!(id in conn.tebakbendera))throw!1;let json=conn.tebakbendera[id][1];conn.reply(m.chat,"```"+json.name.replace(/[AIUEOaiueo]/gi,"_")+"```",m)};handler.command=/^hben$/i,handler.limit=!0;export default handler;