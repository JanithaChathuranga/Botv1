// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";let handler=m=>m;handler.before=async m=>{let chat=global.db.data.chats[m.chat];if(chat.simi&&!chat.isBanned){if(/^.*false|disnable|(turn)?off|0/i.test(m.text))return;if(!m.text)return;let res=await fetch(global.API("https://api.simsimi.net","/v2/",{text:encodeURIComponent(m.text),lc:"id"},""));if(!res.ok)throw eror;let json=await res.json();return"gapaham banh:v"==json.success?m.reply("lu ngetik apaaan sih"):(await m.reply(`${json.success}`),!0)}return!0};export default handler;