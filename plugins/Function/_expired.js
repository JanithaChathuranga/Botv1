// Klo mau pake, pake aja ini bkn enc cma terser aja

export async function all(m){if(!m.isGroup)return;let chats=global.db.data.chats[m.chat];if(!chats.expired)return!0;+new Date>chats.expired&&(await this.reply(m.chat,"Bye🖐 bot akan left!!"),await this.groupLeave(m.chat),chats.expired=null)}