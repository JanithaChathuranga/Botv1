// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{global.prefix=new RegExp("^["+(opts.prefix||"!#/.\\-").replace(/[|\\{}()[\]^$+*?.\-\^]/g,"\\$&")+"]"),await m.reply("Prefix berhasil direset")};handler.help=["resetprefix"],handler.tags=["owner"],handler.command=/^(resetprefix)$/i,handler.rowner=!0;export default handler;