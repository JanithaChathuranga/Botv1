// Klo mau pake, pake aja ini bkn enc cma terser aja

import db from"../../lib/database.js";let handler=async(m,{conn:conn,usedPrefix:usedPrefix,command:command,args:args,isOwner:isOwner,isAdmin:isAdmin,isROwner:isROwner})=>{const{isBanned:isBanned,welcome:welcome,detect:detect,sWelcome:sWelcome,sBye:sBye,anticall:anticall,nsfw:nsfw,premnsfw:premnsfw,autoresponder:autoresponder,viewonce:viewonce,autoread:autoread,restrict:restrict,useDocument:useDocument,stiker:stiker,autolevelup:autolevelup,antibadword:antibadword,whitelistmycontacts:whitelistmycontacts,self:self,premnsfwchat:premnsfwchat,document:document,antiwame:antiwame,autosticker:autosticker,getmsg:getmsg,nyimak:nyimak,swonly:swonly,pconly:pconly,gconly:gconly,sPromote:sPromote,sDemote:sDemote,antiLinkTik:antiLinkTik,antiLinkTel:antiLinkTel,antiLinkIg:antiLinkIg,antiLinkHttp:antiLinkHttp,antiLinkYt:antiLinkYt,antiLinkFb:antiLinkFb,antiVirtex:antiVirtex,antiToxic:antiToxic,antiLink:antiLink,antiLinkWame:antiLinkWame,simi:simi,antiStiker:antiStiker,antiSpam:antiSpam,del:del}=global.db.data.chats[m.chat];let isEnable=/true|enable|(turn)?on|1/i.test(command),chat=global.db.data.chats[m.chat],who=m.mentionedJid&&m.mentionedJid[0]?m.mentionedJid[0]:m.fromMe?conn.user.jid:m.sender,user=(await conn.getName(who),global.db.data.users[m.sender]),bot=global.db.data.settings[conn.user.jid]||{},type=(args[0]||"").toLowerCase(),isAll=!1,isUser=!1;switch(type){case"freply":case"fakereply":if(isAll=!0,!isOwner)throw global.dfail("owner",m,conn),!1;bot.freply=isEnable;break;case"welcome":if(m.isGroup){if(!isAdmin)throw global.dfail("admin",m,conn),!1}else if(!isOwner)throw global.dfail("group",m,conn),!1;chat.welcome=isEnable;break;case"detect":if(m.isGroup){if(!isAdmin)throw global.dfail("admin",m,conn),!1}else if(!isOwner)throw global.dfail("group",m,conn),!1;chat.detect=isEnable;break;case"delete":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.delete=isEnable;break;case"antibadword":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiBadword=isEnable;break;case"clear":if(isAll=!0,!isOwner)throw global.dfail("owner",m,conn),!1;bot.clear=isEnable;break;case"viewonce":case"antiviewonce":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.viewonce=isEnable;break;case"desc":if(m.isGroup){if(!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1}else if(!isOwner)throw global.dfail("group",m,conn),!1;chat.descUpdate=isEnable;break;case"antidelete":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.delete=!isEnable;break;case"autodelvn":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.autodelvn=isEnable;break;case"document":chat.useDocument=isEnable;break;case"public":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.self=!isEnable;break;case"bcjoin":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.bcjoin=isEnable;break;case"antilink":case"antiwame":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiLink=isEnable;break;case"antilinkbitly":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiLinkBitly=isEnable;break;case"antilinktik":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiLinkTik=isEnable;break;case"antilinkyt":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiLinkYt=isEnable;break;case"antilinktel":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiLinkTel=isEnable;break;case"antilinkfb":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiLinkFb=isEnable;break;case"antilinkig":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiLinkIg=isEnable;break;case"antilinkwa":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiLinkWa=isEnable;break;case"antihatetepe":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiLinkHttp=isEnable;break;case"nsfw":case"antilinkhttp":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.nsfw=isEnable;break;case"antivirtex":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiVirtex=isEnable;break;case"antisatir":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiSatir=isEnable;break;case"simi":if(!isROwner)throw global.dfail("rowner",m,conn),!1;chat.simi=isEnable;break;case"autovn":if(!isROwner)throw global.dfail("rowner",m,conn),!1;chat.autoVn=isEnable;break;case"autopresence":if(!isROwner)throw global.dfail("rowner",m,conn),!1;chat.autoPesence=isEnable;break;case"autoreply":if(!isROwner)throw global.dfail("rowner",m,conn),!1;chat.autoReply=isEnable;break;case"autosticker":if(!isROwner)throw global.dfail("rowner",m,conn),!1;chat.autoSticker=isEnable;break;case"antisticker":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiSticker=isEnable;break;case"autojoin":if(!isROwner)throw global.dfail("rowner",m,conn),!1;chat.autoJoin=isEnable;break;case"autoupnews":if(!isROwner)throw global.dfail("rowner",m,conn),!1;chat.updateAnimeNews=isEnable;break;case"autoupnime":if(!isROwner)throw global.dfail("rowner",m,conn),!1;chat.updateAnime=isEnable;break;case"toxic":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiToxic=!isEnable;break;case"antitoxic":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiToxic=isEnable;break;case"antispam":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiSpam=isEnable;break;case"anticall":if(m.isGroup&&!isAdmin&&!isOwner)throw global.dfail("admin",m,conn),!1;chat.antiCall=isEnable;break;case"autolevelup":isUser=!0,user.autolevelup=isEnable;break;case"mycontact":case"mycontacts":case"whitelistcontact":case"whitelistcontacts":case"whitelistmycontact":case"whitelistmycontacts":if(!isOwner)throw global.dfail("owner",m,conn),!1;conn.callWhitelistMode=isEnable;break;case"restrict":if(isAll=!0,!isOwner)throw global.dfail("owner",m,conn),!1;bot.restrict=isEnable;break;case"nyimak":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.nyimak=isEnable;break;case"autoread":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.autoread=isEnable;break;case"pconly":case"privateonly":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.pconly=isEnable;break;case"gconly":case"grouponly":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.gconly=isEnable;break;case"getmsg":if(m.isGroup&&!isAdmin&&!isOwner)return dfail("admin",m,conn);chat.getmsg=isEnable;break;case"swonly":case"statusonly":if(isAll=!0,!isROwner)throw global.dfail("rowner",m,conn),!1;global.opts.swonly=isEnable;break;default:if(!/[01]/.test(command))return conn.sendMessage(m.chat,{text:`*〔 llı OPTIONS ıll 〕*\n    \n    \n꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦\n   \nbanned \nwelcome \ndetect \nantidelete \nantivirtex \nantistiker  \nantispam \nantitoxic  \nantilink \nantilinktik \nantilinktel \nantilinkyt\nantilinkhttp\nantiwame \nantilinkig \nantilinkfb \nanticall \nantibadword\nsimi\nautosticker \nautolevelup \nautoread \ndocument\nautoresponder \nnsfw \ngetmsg \npremnsfw\ngconly \nnyimak\npconly \npublic \nrestrict \nswonly\n  \n▶︎ ━━━━━━━•──────────── \n      ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻\n\n📜 *TUTORIAL*\n \n𝍤 ON: ${usedPrefix}on welcome ❫\n\n𝍤 OFF: ${usedPrefix}off welcome ❫\n\n📮Pastikan Huruf kecil semua!`,contextInfo:{externalAdReply:{title:v,thumbnailUrl:thumbnailUrl,sourceUrl:sgc,mediaType:1,renderLargerThumbnail:!0}}},{quoted:m})}let cap=`*${htki} STATUS ${htka}* \n 📔  *Type:*   ${type}  \n 🗞️  *Status:*   Succes ✅ \n 💻️  *Options:*   ${isEnable?"ON":"OFF"} \n 🗳️  ${isAll?"Bot Only":isUser?"":"Chat Only"}\n `;conn.sendMessage(m.chat,{text:cap,contextInfo:{externalAdReply:{title:v,thumbnailUrl:thumbnailUrl,sourceUrl:sgc,mediaType:1,renderLargerThumbnail:!0}}},{quoted:m})};handler.help=["en","dis"].map((v=>v+"able <option>")),handler.tags=["group","owner"],handler.command=/^((en|dis)able5|(tru|fals)e|(turn)?o(n|ff)|[01])$/i;export default handler;