// Klo mau pake, pake aja ini bkn enc cma terser aja

export async function before(m,{isAdmin:isAdmin,isBotAdmin:isBotAdmin}){let chat=global.db.data.chats[m.chat];if(m.chat.endsWith("broadcast")||chat.isBanned||!chat.getmsg||global.db.data.users[m.sender].banned||m.isBaileys)return;let msgs=global.db.data.msgs;if(!(m.text in msgs))return;let _m=this.serializeM(JSON.parse(JSON.stringify(msgs[m.text]),((_,v)=>null!==v&&"object"==typeof v&&"type"in v&&"Buffer"===v.type&&"data"in v&&Array.isArray(v.data)?Buffer.from(v.data):v)));await _m.copyNForward(m.chat,!1)}