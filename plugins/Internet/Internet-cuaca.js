// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";let handler=async(m,{text:text,usedPrefix:usedPrefix,command:command})=>{if(!text)throw`Pengunaan:\n${usedPrefix+command} <teks>\n\nContoh:\n${usedPrefix+command} Jakarta`;m.reply(wait);let res=await fetch(API("https://api.openweathermap.org","/data/2.5/weather",{q:text,units:"metric",appid:"060a6bcfa19809c2cd4d97a212b19273"}));if(!res.ok)throw"lokasi tidak ditemukan";let json=await res.json();if(200!=json.cod)throw json;m.reply(`\nLokasi: ${json.name}\nNegara: ${json.sys.country}\nCuaca: ${json.weather[0].description}\nSuhu saat ini: ${json.main.temp} °C\nSuhu tertinggi: ${json.main.temp_max} °C\nSuhu terendah: ${json.main.temp_min} °C\nKelembapan: ${json.main.humidity} %\nAngin: ${json.wind.speed} km/jam\n    `.trim())};handler.help=["cuaca"],handler.tags=["internet"],handler.command=/^(cuaca|weather)$/i,handler.limit=!0;export default handler;