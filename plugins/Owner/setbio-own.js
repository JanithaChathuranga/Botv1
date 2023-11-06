// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,text:text})=>{if(!text)throw"uhm.. teksnya mana?";try{await conn.setStatus(text),m.reply("Berhasil!")}catch(e){throw console.log(e),"Eror"}};handler.help=["setbio <teks>"],handler.tags=["owner"],handler.command=/^set(bio|status)$/i,handler.owner=!0;export default handler;