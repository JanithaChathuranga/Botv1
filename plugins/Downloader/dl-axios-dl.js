// Klo mau pake, pake aja ini bkn enc cma terser aja

import axios from"axios";import fs from"fs";import path from"path";const handler=async(m,{conn:conn,text:text})=>{try{const fileExtension=path.extname(text).slice(1),uniqueFilename=`${Date.now()}.${fileExtension}`,startTime=Date.now(),response=await axios.get(text,{responseType:"stream"}),elapsedTime=(Date.now()-startTime)/1e3,downloadSpeed=response.headers["content-length"]/elapsedTime,writer=fs.createWriteStream(uniqueFilename);response.data.pipe(writer),await new Promise((resolve=>{writer.on("finish",resolve)}));const fileSizeInBytes=fs.statSync(uniqueFilename).size,pesan=await conn.sendMessage(m.chat,{text:`Nama file: ${uniqueFilename}\nUkuran file: ${fileSizeInBytes} bytes\n\nWaktu unduh: ${elapsedTime} detik\nKecepatan unduh: ${downloadSpeed} Bps\n\nSendang mengirim file`});conn.sendFile(m.chat,uniqueFilename,null,"Berikut adalah file yang diunduh:",m,null,!0),setTimeout((()=>{conn.sendMessage(m.chat,{delete:pesan.key})}),4e3),fs.unlinkSync(uniqueFilename)}catch(error){console.error("Terjadi kesalahan saat mengunduh file:",error),m.reply("Terjadi kesalahan saat mengunduh file.")}};handler.command=/^gett$/i;export default handler;