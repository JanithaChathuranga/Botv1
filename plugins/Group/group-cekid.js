// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,groupMetadata:groupMetadata})=>{conn.reply(m.chat,`${await groupMetadata.id}`,m)};handler.help=["cekid"],handler.tags=["group"],handler.command=/^(cekid|idgc|gcid)$/i,handler.group=!0;export default handler;