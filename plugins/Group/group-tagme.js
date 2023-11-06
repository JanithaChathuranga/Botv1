// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,text:text})=>{let tag=`@${m.sender.replace(/@.+/,"")}`,mentionedJid=[m.sender];conn.reply(m.chat,tag,m,{contextInfo:{mentionedJid:mentionedJid}})};handler.help=["tagme"],handler.tags=["group"],handler.command=/^tagme$/i,handler.group=!1;export default handler;