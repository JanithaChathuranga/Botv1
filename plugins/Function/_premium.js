// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=m=>m;export async function all(m){let user=global.db.data.users[m.sender];m.chat.endsWith("broadcast")||0!=user.premiumTime&&user.premium&&1*new Date>=user.premiumTime&&(await m.reply("waktu premium kamu sudah habis!"),user.premiumTime=0,user.premium=!1)}