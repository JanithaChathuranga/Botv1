// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";let handler=async(m,{conn:conn,text:text})=>{if(!text)throw"Masukan Nama Charanya!!";let res=await fetch(`https://api.lolhuman.xyz/api/xnxx?apikey=${global.lolkey}&url=${text}`),json=await res.json();if(200===json.status&&"success"===json.message){const result=json.result,title=result.title,thumbnail=result.thumbnail,duration=result.duration,view=result.view,rating=result.rating,like=result.like,dislike=result.dislike,comment=result.comment,tag=result.tag.join(", "),description=result.description,mp4Links=result.link.filter((link=>"mp4"===link.type));if(mp4Links.length>0){const caption=`*Title:* ${title}\n*Duration:* ${duration}\n*Views:* ${view}\n*Rating:* ${rating}\n*Likes:* ${like}\n*Dislikes:* ${dislike}\n*Comments:* ${comment}\n*Tags:* ${tag}\n*Description:* ${description}`;for(const mp4Link of mp4Links){let{key:key}=await conn.sendMessage(m.chat,{text:caption,contextInfo:{externalAdReply:{showAdAttribution:!0,title:"ᴊᴄ ʙᴏᴛᴢ",body:global.author,thumbnail:await(await conn.getFile(thumbnail)).data,sourceUrl:"https://자니야 ",mediaType:1,renderLargerThumbnail:!0}}},{quoted:m,ephemeralExpiration:86400});await conn.sendMessage(m.chat,{video:{url:mp4Link.link},caption:""},{quoted:m}),await conn.sendMessage(m.chat,{delete:key})}}else conn.reply(m.chat,"No MP4 video links found.",m)}else conn.reply(m.chat,"An error occurred while fetching the data.",m)};handler.help=["xnxxdl"],handler.tags=["downloader"],handler.command=/^(xnxxdl)$/i,handler.limit=!0;export default handler;