// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,usedPrefix:usedPrefix})=>{let banteng=global.db.data.users[m.sender].banteng,harimau=global.db.data.users[m.sender].harimau,gajah=global.db.data.users[m.sender].gajah,kambing=global.db.data.users[m.sender].kambing,panda=global.db.data.users[m.sender].panda,buaya=global.db.data.users[m.sender].buaya,kerbau=global.db.data.users[m.sender].kerbau,sapi=global.db.data.users[m.sender].sapi,monyet=global.db.data.users[m.sender].monyet,babihutan=global.db.data.users[m.sender].babihutan,babi=global.db.data.users[m.sender].babi,ayam=global.db.data.users[m.sender].ayam,ndy=`\n*${htki} KANDANG ${htka}*\n    \n *➡️   ️ 🐂 = [ ${banteng} ] Ekor Banteng*\n *➡️   ️ 🐅 = [ ${harimau} ] Ekor Harimau*\n *➡️   ️ 🐘 = [ ${gajah} ] Ekor Gajah*\n *➡️   ️ 🐐 = [ ${kambing} ] Ekor Kambing*\n *➡️   ️ 🐼 = [ ${panda} ] Ekor Panda*\n *➡️   ️ 🐊 = [ ${buaya} ] Ekor Buaya*\n *➡️   ️ 🐃 = [ ${kerbau} ] Ekor Kerbau*\n *➡️   ️ 🐮 = [ ${sapi} ] Ekor Sapi*\n *➡️   ️ 🐒 = [ ${monyet} ] Ekor Monyet*\n *➡️   ️ 🐗 = [ ${babihutan} ] Ekor Babi Hutan*\n *➡️   ️ 🐖 = [ ${babi} ] Ekor Babi*\n *➡️   ️ 🐓 = [ ${ayam} ] Ekor Ayam*\n \n `.trim();await conn.reply(m.chat,ndy,m)};handler.help=["kandang"],handler.tags=["rpg"],handler.command=/^(kandang)$/i;export default handler;const more=String.fromCharCode(8206),readMore=more.repeat(4001);