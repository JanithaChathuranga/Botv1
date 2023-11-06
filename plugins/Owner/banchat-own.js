// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{participants:participants})=>{global.db.data.chats[m.chat].isBanned=!0,m.reply("Done!")};handler.help=["banchat"],handler.tags=["owner"],handler.command=/^(banchat|bnc)$/i,handler.owner=!0;export default handler;