// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";const BRAINSHOP_BID="176217",BRAINSHOP_KEY="knXmUkn9zcHAk09T";export async function before(m,{conn:conn}){if(m.isBaileys&&m.fromMe)return!0;if(!m.isGroup)return!1;if(!global.db.data.users[m.sender].chatbot)return!0;const uid=encodeURIComponent(m.sender),msg=encodeURIComponent(m.text),response=await fetch(`http://api.brainshop.ai/get?bid=176217&key=${BRAINSHOP_KEY}&uid=${uid}&msg=${msg}`),reply=(await response.json()).cnt;m.reply(reply)}