// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";import{FormData,Blob}from"formdata-node";import{fileTypeFromBuffer}from"file-type";let handler=async(m,{args:args,usedPrefix:usedPrefix,command:command})=>{try{let q=m.quoted?m.quoted:m;if(!((q.msg||q).mimetype||""))throw"No media found";let media=await q.download();await m.reply(wait);const response=await pomf2(media);if(response.success){const fileSize=formatBytes(response.files[0].size),pesan=`*Pesan Anda berhasil terkirim! 🚀*\n\n*File Detail:*\n*URL:* ${response.files[0].url}\n*Ukuran:* ${fileSize}`;await m.reply(pesan)}else await m.reply("Pesan Anda gagal terkirim. 🙁")}catch(error){console.error(error),await m.reply("Terjadi kesalahan dalam pemrosesan permintaan Anda. 🙁")}};handler.help=["pomf2"],handler.tags=["tools"],handler.command=/^(pomf2)$/i;export default handler;const pomf2=async buffer=>{try{const{ext:ext,mime:mime}=await fileTypeFromBuffer(buffer)||{};let form=new FormData;const blob=new Blob([buffer.toArrayBuffer()],{type:mime});form.append("files[]",blob,"tmp."+ext);let res=await fetch("https://pomf2.lain.la/upload.php",{method:"POST",body:form}),json=await res.json();if(!json.success)throw json;return json}catch(error){throw console.error(error),error}};function formatBytes(bytes){if(0===bytes)return"0 B";const i=Math.floor(Math.log(bytes)/Math.log(1024));return`${(bytes/1024**i).toFixed(2)} ${["B","KB","MB","GB","TB"][i]}`}