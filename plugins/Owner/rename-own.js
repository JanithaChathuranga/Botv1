// Klo mau pake, pake aja ini bkn enc cma terser aja

import{tmpdir}from"os";import{join}from"path";import fs from"fs";let handler=async(m,{args:args,text:text,usedPrefix:usedPrefix,command:command})=>{let info=`${usedPrefix+command} <Old name> | <New name>\n\n*📌_ • Example:_*\n\n➞ ${usedPrefix+command} inv | rpg-inv\n\n*_🗒️ • Note:_*\n\nDo not use the .js extension at the end of the sentence and make sure the word does not contain spaces "rpg-inv"`;if(!args[0])throw info;if("|"==!args[1])throw`• *📌_ • Example:_*:\n\n➞ ${usedPrefix+command} inv | rpg-inv`;if(!args[2])throw`• example:\n\n➞ ${usedPrefix+command} inv | rpg-inv`;let from=args[0],to=args[2],ar1=Object.keys(plugins).map((v=>v.replace(".js","")));if(!ar1.includes(args[0]))return m.reply(`*🗃️ NOT FOUND!*\n==================================\n\n${ar1.map((v=>" "+v)).join`\n`}`);await fs.renameSync(`./plugins/${from}.js`,`./plugins/${to}.js`),conn.reply(m.chat,`Success changes "plugins/${from}.js" to "plugins/${to}.js"`,m)};handler.help=["renameplugin"].map((_=>_+" *<old name> | <new name>*")),handler.tags=["owner"],handler.command=/^(r(ename(file)?|f)|rn)$/i,handler.owner=!0,handler.mods=!0;export default handler;