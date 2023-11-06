// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async m=>{global.db.data.chats[m.chat].isBanned=!1,m.reply("Done!")};handler.help=["unbanchat"],handler.tags=["owner"],handler.command=/^(unbanchat|ubnc)$/i,handler.owner=!0;export default handler;