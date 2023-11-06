// Klo mau pake, pake aja ini bkn enc cma terser aja

const approvedRequests=[],rejectedRequests=[],handler=async(m,{conn:conn,args:args,usedPrefix:usedPrefix,command:command})=>{const groupId=m.chat;try{const joinRequestList=await conn.groupRequestParticipantsList(groupId);if("acc"===command){const subCommand=args[0];switch(subCommand){case"list":const formattedList=joinRequestList.map(((request,index)=>`││ \`\`\`${index+1}. Nomor: ${request.jid.split("@")[0]}\`\`\`\n││ \`\`\`Metode: ${request.request_method}\`\`\`\n││ \`\`\`Waktu: ${new Date(1e3*request.request_time).toLocaleString()}\`\`\`\n├┼┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈━`));await m.reply("*Daftar Permintaan Bergabung:*\n\n╭━━━━━━━━━━━━━━━━━━━━━┈─◂\n│╭┈┈─┈─┈━\n"+formattedList.join("\n")+"\n╰┷━━━━━━━━━━━━━━━━━━━━┈─◂");break;case"approve":case"reject":const action=subCommand,validIndexes=args[1].split("|").map((index=>parseInt(index))).filter((index=>!isNaN(index)&&index>0&&index<=joinRequestList.length)),delayBetweenActions=200,responseMessages=[];!async function processRequest(index){if(index<validIndexes.length){const indexToProcess=validIndexes[index],jidToProcess=joinRequestList[indexToProcess-1].jid;try{await conn.groupRequestParticipantsUpdate(groupId,[jidToProcess],action);"approve"===action?approvedRequests.push(jidToProcess):"reject"===action&&rejectedRequests.push(jidToProcess);const formattedResponse=`├┼─┈─┈━\n││ \`\`\`${indexToProcess}. Nomor: ${jidToProcess.split("@")[0]}\`\`\`\n││ \`\`\`Status: ${action}\`\`\`\n││ \`\`\`Time ${action}: ${(new Date).toLocaleString()}\`\`\`\n├┼┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈━`;responseMessages.push(formattedResponse)}catch(error){console.error(error);const phoneNumber=jidToProcess.split("@")[0],errorResponse=`Terjadi kesalahan saat ${action} permintaan bergabung *${phoneNumber}*.`;responseMessages.push(errorResponse)}if(setTimeout((()=>{processRequest(index+1)}),delayBetweenActions),index===validIndexes.length-1){const allResponses=`\n╭━━━━━━━━━━━━━━━━━━━━━┈─◂\n││ \`\`\`Hasil ${action} :\`\`\`\n│╭┈┈─┈─┈━\n`+responseMessages.join("\n")+"\n╰┷━━━━━━━━━━━━━━━━━━━━┈─◂";await m.reply(allResponses)}}}(0);break;case"all":const delayBetweenActionsAll=200,responseMessagesAll=[];!async function processRequestAll(index){if(index<joinRequestList.length){const jidToProcess=joinRequestList[index].jid;try{await conn.groupRequestParticipantsUpdate(groupId,[jidToProcess],"approve");approvedRequests.push(jidToProcess);const phoneNumber=jidToProcess.split("@")[0],formattedResponse=`││ \`\`\`${index+1}. Nomor: ${phoneNumber}\`\`\`\n││ \`\`\`Status: approve\`\`\`\n││ \`\`\`Time approve: ${(new Date).toLocaleString()}\`\`\`\n├┼┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈━`;responseMessagesAll.push(formattedResponse)}catch(error){console.error(error);const errorResponse=`Terjadi kesalahan saat approve permintaan bergabung *${jidToProcess.split("@")[0]}*.`;responseMessagesAll.push(errorResponse)}if(setTimeout((()=>{processRequestAll(index+1)}),delayBetweenActionsAll),index===joinRequestList.length-1){const allResponses="\n╭━━━━━━━━━━━━━━━━━━━━━┈─◂\n││ ```Hasil approve :```\n│╭┈┈─┈─┈━\n"+responseMessagesAll.join("\n")+"\n╰┷━━━━━━━━━━━━━━━━━━━━┈─◂";await m.reply(allResponses)}}}(0);break;case"allreject":const delayBetweenActionsReject=200,responseMessagesReject=[];!async function processRequestReject(index){if(index<joinRequestList.length){const jidToProcess=joinRequestList[index].jid;try{await conn.groupRequestParticipantsUpdate(groupId,[jidToProcess],"reject");rejectedRequests.push(jidToProcess);const phoneNumber=jidToProcess.split("@")[0],formattedResponse=`││\`\`\`${index+1}.\`\`\`\n││ \`\`\`Nomor: ${phoneNumber}\`\`\`\n││ \`\`\`Status: reject\`\`\`\n││ \`\`\`Time reject: ${(new Date).toLocaleString()}\`\`\`\n├┼┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈━`;responseMessagesReject.push(formattedResponse)}catch(error){console.error(error);const errorResponse=`Terjadi kesalahan saat reject permintaan bergabung *${jidToProcess.split("@")[0]}*.`;responseMessagesReject.push(errorResponse)}if(setTimeout((()=>{processRequestReject(index+1)}),delayBetweenActionsReject),index===joinRequestList.length-1){const allResponses="\n╭━━━━━━━━━━━━━━━━━━━━━┈─◂\n├┬━━━━━━━━━━━━━━━━━━━━━┈─\n││ ```Hasil reject :```\n│╭┈┈─┈─┈━\n"+responseMessagesReject.join("\n")+"\n╰┷━━━━━━━━━━━━━━━━━━━━┈─◂";await m.reply(allResponses)}}}(0);break;default:await m.reply("Perintah tidak valid. Gunakan:\n.acc list' untuk melihat daftar.\n.acc approve [nomor(s)]' untuk menyetujui nomor tertentu.\n.acc reject [nomor(s)]' untuk menolak nomor tertentu.\n.acc all' untuk menyetujui semua.\n.acc allreject' untuk menolak semua.\n.acc'")}}else await m.reply("Perintah tidak valid. Gunakan:\n.acc list' untuk melihat daftar.\n.acc approve [nomor(s)]' untuk menyetujui nomor tertentu.\n.acc reject [nomor(s)]' untuk menolak nomor tertentu.\n.acc all' untuk menyetujui semua.\n.acc allreject' untuk menolak semua.\n.acc'")}catch(error){console.error(error),await m.reply("Terjadi kesalahan saat mendapatkan daftar permintaan bergabung.")}};handler.help=["acc *[opsi] [nomor(s)]*"],handler.tags=["group"],handler.command=/^(acc)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0,handler.fail=null;export default handler;