// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,usedPrefix:usedPrefix,command:command,args:args,isOwner:isOwner,isAdmin:isAdmin,isROwner:isROwner})=>{let isEnable=/true|enable|(turn)?on|1/i.test(command),chat=global.db.data.chats[m.chat],user=global.db.data.users[m.sender],type=(args[0]||"").toLowerCase(),isAll=!1,isUser=!1;switch(type){case"welcome":if(m.isGroup){if(!isAdmin)throw global.dfail("admin",m,conn),!1}else if(!isOwner)throw global.dfail("group",m,conn),!1;chat.welcome=isEnable;break;case"detect":if(m.isGroup){if(!isAdmin)throw global.dfail("admin",m,conn),!1}else if(!isOwner)throw global.dfail("group",m,conn),!1;chat.detect=isEnable;break;case"delete":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.delete=isEnable;break;case"antidelete":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.delete=!isEnable;break;case"autobio":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.autoBio=isEnable;break;case"autobio":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.autoBio=!isEnable;break;case"autodelvn":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.autodelvn=isEnable;break;case"document":chat.useDocument=isEnable;break;case"public":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.self=!isEnable;break;case"antilink":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiLink=isEnable;break;case"antisticker":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiSticker=isEnable;break;case"autosticker":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.stiker=isEnable;break;case"toxic":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiToxic=!isEnable;break;case"antibadword":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiBadword=isEnable;break;case"antibadword":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiBadword=!isEnable;break;case"antitoxic":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiToxic=isEnable;break;case"autolevelup":isUser=!0,user.autolevelup=isEnable;break;case"mycontact":case"mycontacts":case"whitelistcontact":case"whitelistcontacts":case"whitelistmycontact":case"whitelistmycontacts":if(!isOwner)throw global.dfail("owner",m,conn),!1;conn.callWhitelistMode=isEnable;break;case"restrict":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.restrict=isEnable;break;case"nyimak":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.nyimak=isEnable;break;case"autoread":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.autoread=isEnable;break;case"pconly":case"privateonly":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.pconly=isEnable;break;case"gconly":case"grouponly":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.gconly=isEnable;break;case"swonly":case"statusonly":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.swonly=isEnable;break;case"viewonce":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.viewonce=isEnable;break;default:if(!/[01]/.test(command))return m.reply(`\nList option:\n| welcome\n| delete\n| public\n| antibadword\n| antilink\n| antidelete\n| antisticker\n| autobio\n| autosticker\n| autolevelup\n| detect\n| document\n| whitelistmycontacts\n| restrict\n| nyimak\n| autoread\n| pconly\n| gconly\n| swonly\nContoh:\n${usedPrefix}enable welcome\n${usedPrefix}disable welcome\n`.trim());throw!1}m.reply(`\n*${type}* berhasil di *${isEnable?"nyala":"mati"}kan* ${isAll?"untuk bot ini":isUser?"":"untuk chat ini"}\n`.trim())};handler.help=["en","dis"].map((v=>v+"able2 <option>")),handler.tags=["group","owner"],handler.command=/^((en|dis)able2|(tru|fals)e|(turn)?o(n|ff)|[01])$/i;export default handler;