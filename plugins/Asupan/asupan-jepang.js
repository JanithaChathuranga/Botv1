// Klo mau pake, pake aja ini bkn enc cma terser aja

import{promises,readFileSync}from"fs";import{join}from"path";import{xpRange}from"../../lib/levelling.js";import moment from"moment-timezone";import os from"os";import fs from"fs";import fetch from"node-fetch";let handler=async(m,{conn:conn,usedPrefix:_p,__dirname:__dirname,args:args})=>{await conn.sendMessage(m.chat,{react:{text:"⏳",key:m.key}});let prn=`${pickRandom(["./tumnil/1.jpg","./tumnil/2.jpg","./tumnil/3.jpg","./tumnil/4.jpg","./tumnil/5.jpg"])}`;const imek=fs.readFileSync(prn);let arc=pickRandom(global.AraChu2),res=await fetch("https://github.com/ArifzynXD/database/raw/master/asupan/japan.json"),json=await res.json();const randomURL=json[Math.floor(Math.random()*json.length)].url;conn.sendMessage(m.chat,{image:await(await fetch(randomURL)).buffer(),mimetype:"image/jpeg",fileLength:106300440576e50,caption:"",contextInfo:{mentionedJid:[m.sender],forwardingScore:256,isForwarded:!0,externalAdReply:{title:"ᴍʀ ᴊᴄ",body:"자니야",sourceUrl:`https//${global.author}`,mediaType:1,thumbnail:imek,thumbnailUrl:arc,renderLargerThumbnail:!1}}},{quoted:m})};handler.tags=["asupan"],handler.command=/^(japan)$/i,handler.help=["japan"],handler.exp=3;export default handler;function pickRandom(list){return list[Math.floor(Math.random()*list.length)]}