// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{text:text})=>{if(!text)throw"Text?";return await conn.groupUpdateDescription(m.chat,text),m.reply("Done.")};handler.help=["setdesc"].map((v=>v+" <text>")),handler.tags=["group"],handler.command=/^(setdesc|sdesc)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;