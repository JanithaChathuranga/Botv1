// Klo mau pake, pake aja ini bkn enc cma terser aja

let linkRegex=/chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i,handler=async(m,{conn:conn,text:text,isOwner:isOwner})=>{let[_,code,expired]=text.match(linkRegex)||[];if(!code)throw"Link invalid";let res=await conn.groupAcceptInvite(code);expired=Math.floor(Math.min(999,Math.max(1,isOwner?isNumber(expired)?parseInt(expired):0:3))),m.reply(`Berhasil join grup ${res}${expired?` selama ${expired} hari`:""}`);let chats=global.db.data.chats[res];chats||(chats=global.db.data.chats[res]={}),expired&&(chats.expired=+new Date+1e3*expired*60*60*24)};handler.help=["join <chat.whatsapp.com>"],handler.tags=["owner"],handler.command=/^join$/i,handler.rowner=!0;export default handler;const isNumber=x=>"number"==typeof(x=parseInt(x))&&!isNaN(x);