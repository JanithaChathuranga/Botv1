// Klo mau pake, pake aja ini bkn enc cma terser aja

import axios from"axios";import cheerio from"cheerio";const handler=async(m,{conn:conn,text:text,usedPrefix:usedPrefix,command:command})=>{const[from,to]=text.split(/[^\w\s]/g);if(!from||!to)throw`Contoh: ${usedPrefix+command} jakarta|bandung`;await m.reply(wait);try{const data=await jarak(from,to);data.img?await conn.sendMessage(m.chat,{image:data.img,caption:data.desc+"\n\n"+data.rute},{quoted:m}):await m.reply(data.desc)}catch(error){console.error(error),await m.reply(eror)}};handler.help=["jarak *[from]|[to]*"],handler.tags=["internet"],handler.command=["jarak"];export default handler;async function jarak(from,to){try{const query=`jarak ${from} ke ${to}`,{data:data}=await axios.get(`https://www.google.com/search?q=${encodeURIComponent(query)}&hl=id`),$=cheerio.load(data),img=$('script:contains("var s=\'")').text().match(/var s='(.*?)'/)?.[1]||"",imgData=/^data:.*?\/.*?;base64,/i.test(img)?Buffer.from(img.split(",")[1],"base64"):null,[desc,rute]=$("div.kCrYT > span > div.BNeawe.deIvCb.AP7Wnd, div.kCrYT > span > div.BNeawe.tAd8D.AP7Wnd").toArray().map((el=>$(el).text().trim()));return{img:imgData,desc:desc.replace(/(Dari:|Ke:)/g,"- *$1*"),rute:rute}}catch(error){throw console.error(error),"Terjadi kesalahan dalam menghitung jarak."}}