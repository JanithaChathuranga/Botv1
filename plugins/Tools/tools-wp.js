// Klo mau pake, pake aja ini bkn enc cma terser aja

import fg from"api-dylux";let handler=async(m,{conn:conn,text:text,usedPrefix:usedPrefix,command:command})=>{if(!text)throw"✳️ query??";try{let re=pickRandom(await fg.wallpaper(text));await conn.sendMessage(m.chat,{image:{url:re.image[0]},caption:""},{quoted:m})}catch(error){m.reply("✳️ Error")}};handler.help=["wallpapers","wp"],handler.tags=["tools"],handler.command=["wallpapers","wp"],handler.diamond=!0;export default handler;function pickRandom(list){return list[Math.floor(list.length*Math.random())]}