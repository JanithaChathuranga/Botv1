// Klo mau pake, pake aja ini bkn enc cma terser aja

import yts from"yt-search";import fs from"fs";let handler=async(m,{conn:conn,text:text,usedPrefix:usedPrefix,command:command})=>{if(!text)throw`*[❗INFORMATION❗] THE NUMBER YOU ARE SEARCHING FOR WAS NOT FOUND PLEASE ENTER THE CORRECT NUMBER/TITULO*\n\n*—◉ EJEMPLO:*\n*${usedPrefix+command} Enter a video title*`;try{let vids_={from:m.sender,urls:[]};global.videoList||(global.videoList=[]),global.videoList[0]?.from==m.sender&&delete global.videoList;let results=await yts(text),textoInfo=`*[❗] You can download the videos you want in the following ways:*\n    ◉ ${usedPrefix}audio <nomor>\n    ◉ ${usedPrefix}video <nomor>\n\n    *—◉ Contoh:*\n    *◉ ${usedPrefix}audio 5*\n    *◉ ${usedPrefix}video 8*`.trim(),teks=results.all.map(((v,i)=>{let link=v.url;return vids_.urls.push(link),`[${i+1}] ${v.title}\n↳ 🫐 *_Link :_* ${v.url}\n↳ 🕒 *_Durasi :_* ${v.timestamp}\n↳ 📥 *_Diunggah :_* ${v.ago}\n↳ 👁 *_Ditonton :_* ${v.views}`})).join("\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n");conn.sendFile(m.chat,results.all[0].thumbnail,"yts.jpeg",textoInfo+"\n\n"+teks,m),global.videoList.push(vids_)}catch{await m.reply("*[❗INFORMATION❗] AN ERROR HAS OCCURRED, PLEASE PROVIDE THE CORRECT NUMBER FOR THE VIDEO CONCENTRATION*")}};handler.help=["playlist *<teks>*"],handler.tags=["downloader"],handler.command=/^playlist|playlist2$/i;export default handler;