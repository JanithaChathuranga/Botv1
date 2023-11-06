// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{await m.reply("Bot ini menggunakan script dari :\n\nhttps://github.com/jcofc\n\nBtw jangan lupa di fork + kasi star nya kak ⭐")};handler.help=["sc"],handler.tags=["info"],handler.command=/^(sc|sourcecode)$/i;export default handler;