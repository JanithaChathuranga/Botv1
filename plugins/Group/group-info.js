// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,participants:participants,groupMetadata:groupMetadata})=>{const pp=await conn.profilePictureUrl(m.chat,"image").catch((_=>null))||"./src/avatar_contact.png",{isBanned:isBanned,welcome:welcome,detect:detect,sWelcome:sWelcome,sBye:sBye,sPromote:sPromote,sDemote:sDemote,antiLink:antiLink,delete:del}=global.db.data.chats[m.chat],groupAdmins=participants.filter((p=>p.admin)),listAdmin=groupAdmins.map(((v,i)=>`${i+1}. @${v.id.split("@")[0]}`)).join("\n"),owner=groupMetadata.owner||groupAdmins.find((p=>"superadmin"===p.admin))?.id||m.chat.split`-`[0]+"@s.whatsapp.net";let text=`*「 Group Information 」*\n\n*ID:* \n${groupMetadata.id}\n*Name:* \n${groupMetadata.subject}\n*Description:* \n${groupMetadata.desc?.toString()||"unknown"}\n*Total Members:*\n${participants.length} Members\n*Group Owner:* \n@${owner.split("@")[0]}\n*Group Admins:*\n${listAdmin}\n*Group Settings:*\n${isBanned?"✅":"❌"} Banned\n${welcome?"✅":"❌"} Welcome\n${detect?"✅":"❌"} Detect\n${del?"❌":"✅"} Anti Delete\n${antiLink?"✅":"❌"} Anti Link\n*Message Settings:*\nWelcome: ${sWelcome}\nBye: ${sBye}\nPromote: ${sPromote}\nDemote: ${sDemote}\n`.trim();conn.sendFile(m.chat,pp,"pp.jpg",text,m,!1,{mentions:[...groupAdmins.map((v=>v.id)),owner]})};handler.help=["infogrup"],handler.tags=["group"],handler.command=/^(gro?upinfo|info(gro?up|gc))$/i,handler.group=!0;export default handler;