// Klo mau pake, pake aja ini bkn enc cma terser aja

import JavaScriptObfuscator from"javascript-obfuscator";import fs from"fs";import AdmZip from"adm-zip";const handler=async(m,{conn:conn})=>{if(!m.quoted)return conn.reply(m.chat,"Harap reply ke pesan yang akan diobfuskasi.",m);const quotedMsg=m.quoted;if(quotedMsg.mtype)if("extendedTextMessage"===quotedMsg.mtype&&quotedMsg.text){const inputCode=quotedMsg.text,obfuscationResult=JavaScriptObfuscator.obfuscate(inputCode,{compact:!1,controlFlowFlattening:!0,deadCodeInjection:!0,selfDefending:!0});conn.sendFile(m.chat,Buffer.from(obfuscationResult.getObfuscatedCode()),"obfuscated.js","",m);const consoleLogMessage="\n"+obfuscationResult.getObfuscatedCode();console.log(consoleLogMessage),conn.reply(m.chat,consoleLogMessage,m)}else if("application/javascript"===quotedMsg.mimetype||"application/json"===quotedMsg.mimetype){const fileName=await conn.downloadAndSaveMediaMessage(quotedMsg),fileContent=fs.readFileSync(fileName,"utf-8"),obfuscationResult=JavaScriptObfuscator.obfuscate(fileContent,{compact:!1,controlFlowFlattening:!0,deadCodeInjection:!0,selfDefending:!0});conn.sendFile(m.chat,Buffer.from(obfuscationResult.getObfuscatedCode()),"obfuscated.js","",m),fs.unlinkSync(fileName);const consoleLogMessage="\n"+obfuscationResult.getObfuscatedCode();console.log(consoleLogMessage),conn.reply(m.chat,consoleLogMessage,m)}else if("application/zip"===quotedMsg.mimetype){const zipFileName=await conn.downloadAndSaveMediaMessage(quotedMsg),zip=new AdmZip(zipFileName),zipEntries=zip.getEntries();for(const entry of zipEntries)if(entry.entryName.endsWith(".js")){const jsContent=zip.readAsText(entry),obfuscationResult=JavaScriptObfuscator.obfuscate(jsContent,{compact:!1,controlFlowFlattening:!0,deadCodeInjection:!0,selfDefending:!0});zip.updateFile(entry.entryName,Buffer.from(obfuscationResult.getObfuscatedCode()))}const obfuscatedZipName="obfuscated.zip";zip.writeZip(obfuscatedZipName),conn.sendFile(m.chat,obfuscatedZipName,obfuscatedZipName,"",m),fs.unlinkSync(zipFileName),fs.unlinkSync(obfuscatedZipName);const consoleLogMessage=`File .zip telah diobfuskasi: ${obfuscatedZipName}`;console.log(consoleLogMessage),conn.reply(m.chat,consoleLogMessage,m)}else conn.reply(m.chat,"Format tidak didukung",m);else conn.reply(m.chat,"Format tidak didukung",m)};handler.command=/^obfuscate$/i;export default handler;