// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";let handler=async(m,{text:text})=>{let res=await fetch(global.API("https://covid19.mathdro.id","/api/countries/"+text));if(!res.ok)throw await res.text();let json=await res.json();if(!json.confirmed)throw"Negara?";if(!json.confirmed)throw json;m.reply(`\nNegara : ${text}\nTerkonfirmasi : ${json.confirmed.value}\nSembuh : ${json.recovered.value}\nMeninggal : ${json.deaths.value}\nUpdate Info : ${json.lastUpdate}\n`.trim())};handler.help=["covid"].map((v=>v+" <negara>")),handler.tags=["internet"],handler.command=/^(corona|covid|covid19)$/i;export default handler;