// Klo mau pake, pake aja ini bkn enc cma terser aja

export async function before(m){const chat=global.db.data.chats[m.chat];if(m.isBaileys||!m.text)return!1;chat.gconly&&!m.chat.endsWith("g.us")?(chat.pconly=!1,chat.isBanned=!0):chat.isBanned=!1,chat.pconly&&m.chat.endsWith("g.us")?(chat.gconly=!1,chat.isBanned=!0):chat.isBanned=!1}export const disabled=!1;