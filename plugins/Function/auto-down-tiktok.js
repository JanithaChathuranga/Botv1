// Klo mau pake, pake aja ini bkn enc cma terser aja

import axios from"axios";import fetch from"node-fetch";import cheerio from"cheerio";import got from"got";import fg from"api-dylux";import{fetchVideo}from"@prevter/tiktok-scraper";import{Tiktok}from"@xct007/tiktok-scraper";export async function before(m){const matches=m.text.trim().match(/https:\/\/vt\.tiktok\.com\/[A-Za-z0-9]+/g),spas="                ";if(!matches)return!1;await m.reply(wait);try{const videoX=await Tiktok(matches[0]);let XctCap=`${spas}*[ T I K T O K ]*\n\n${getUserProfileInfo(videoX)}\n\n${spas}*[ V1 ]*`;await conn.sendFile(m.chat,videoX.download.nowm||giflogo,"",XctCap,m)}catch(e){try{const video=await fetchVideo(matches[0]),buffer=await video.download({progress:p=>{console.log(`Downloaded ${p.progress}% (${p.downloaded}/${p.total} bytes)`)}});let PrevCap=`${spas}*[ T I K T O K ]*\n\n${getVideoInfo(video)}\n\n${spas}*[ V2 ]*`;await conn.sendFile(m.chat,buffer||giflogo,"",PrevCap,m)}catch(e){try{let Fg=await fg.tiktok(matches[0]),FgCap=`${spas}*[ T I K T O K ]*\n\n*Nickname:* ${Fg.nickname}\n*Unique ID:* ${Fg.unique_id}\n*Download Count:* ${Fg.download_count}\n*Duration:* ${Fg.duration}\n*Description:* ${Fg.description}\n${spas}*[ V3 ]*`;await conn.sendFile(m.chat,Fg.play||Fg.hdplay,"",FgCap,m)}catch(e){try{const god=await axios.get("https://godownloader.com/api/tiktok-no-watermark-free?url="+matches[0]+"&key=godownloader.com");let GoCap=`${spas}*[ T I K T O K ]*\n\n*Desc:* ${god.data.desc}\n\n${spas}*[ V4 ]*`;await conn.sendFile(m.chat,god.data.video_no_watermark,"",GoCap,m)}catch(e){try{let S=(await Tiktokdl(matches[0])).result,ScrapCap=`${spas}*「 T I K T O K 」*\n\n*📛 Author:* ${S.author.nickname}\n*📒 Title:* ${S.desc}\n\n${spas}*[ V5 ]*`;await conn.sendFile(m.chat,S.download.nowm,"",ScrapCap,m)}catch(e){throw eror}}}}}}export const disabled=!1;async function Tiktokdl(url){try{const valid=await async function(url){let result;const Konto1=/video\/([\d|\+]+)?\/?/,valid=url.match(Konto1);if(valid)return valid[1];try{const data=await got.get(url,{headers:{"Accept-Encoding":"deflate"},maxRedirects:0}).catch((e=>e.response.headers.location)),_valid=data.match(Konto1);_valid&&(result=_valid[1])}catch(error){result=!1}return result}(url),data=await got.get((aweme=valid,`https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`),{headers:{"Accept-Encoding":"deflate","User-Agent":"okhttp/3.14.9"}}).catch((e=>e.response)),obj=JSON.parse(data.body).aweme_list.find((o=>o.aweme_id===valid));return{status:!0,result:{aweme_id:obj.aweme_id,region:obj.region,desc:obj.desc,create_time:obj.create_time,author:{uid:obj.author.uid,unique_id:obj.author.unique_id,nickname:obj.author.nickname,birthday:obj.author.birthday},duration:obj.music.duration,download:{nowm:obj.video.play_addr.url_list[0],wm:obj.video.download_addr.url_list[0],music:obj.music.play_url.url_list[0],music_info:{id:obj.music.id,title:obj.music.title,author:obj.music.author,is_original:obj.music.is_original,cover_hd:obj.music.cover_hd.url_list[0],cover_large:obj.music.cover_large.url_list[0],cover_medium:obj.music.cover_medium.url_list[0]}}}}}catch(e){return{status:!1,result:e}}var aweme}function getVideoInfo(video){return`Video description: ${video.description}\n🔗 URL: ${video.url}\n👤 Author: ${video.author}\n❤️ Likes: ${video.likes}\n💬 Comments: ${video.comments}\n🔁 Shares: ${video.shares}\n▶️ Plays: ${video.playCount}\n🎵 Music: ${video.music.name} - ${video.music.author}\n🖼️ Thumbnail URL: ${video.previewImageUrl}`}function getEmojiCount(count){const emojis=["👍","❤️","🔁","💬","🔥"];return emojis[Math.floor(Math.random()*emojis.length)]+count.toLocaleString()}function getUserProfileInfo(tiktokData){const user=tiktokData.author,stats=tiktokData.statistics;return`User Profile:\n🆔 Unique ID: ${user.uid}\n👤 Nickname: ${user.nickname}\n💬 Description: ${tiktokData.desc}\n👥 Comments: ${getEmojiCount(stats.comment_count)}\n👍 Likes: ${getEmojiCount(stats.digg_count)}\n🎵 Music: ${tiktokData.download.music_info.title}`}