// Klo mau pake, pake aja ini bkn enc cma terser aja

import PhoneNumber from"awesome-phonenumber";import moment from"moment-timezone";let handler=async(m,{conn:conn,usedPrefix:usedPrefix})=>{let who=m.mentionedJid&&m.mentionedJid[0]?m.mentionedJid[0]:m.fromMe?conn.user.jid:m.sender;var{status:status,setAt:setAt}=await conn.fetchStatus(who).catch((()=>({status:"",setAt:""})));let pp;try{pp=await conn.profilePictureUrl(who,"image")}catch(e){pp="https://telegra.ph/file/e47d9ec693e5288ad9382.jpg"}finally{let str=`\n  • Name: ${conn.getName(who)}, \n• Tag: @${who.replace(/@.+/,"")}, ${status?"\n• Bio: "+status:""}, \n• Set At Bio: ${setAt&&moment(setAt).format("DD MMMM YYYY")||"Unknown"}, \n• Number: ${PhoneNumber("+"+who.replace("@s.whatsapp.net","")).getNumber("international")},\n• Link: https://wa.me/${who.split`@`[0]}`.trim(),mentionedJid=[who];conn.sendFile(m.chat,pp,"pp.jpeg",str,m,!1,{contextInfo:{mentionedJid:mentionedJid}})}};handler.help=["profile2 [@user]"],handler.tags=["tools","misc"],handler.command=/^(profile2)$/i,handler.group=!0;export default handler;