// Klo mau pake, pake aja ini bkn enc cma terser aja

import axios from"axios";import moment from"moment-timezone";let handler=async(m,{conn:conn,text:text})=>{if(!text)throw"Error!\nMasukan perintah dengan tambahan username!";let Quer=text.replace("https://github.com/","").replace("@","");axios.get(`https://api.github.com/users/${Quer}`).then((res=>{let{login:login,type:type,name:name,followers:followers,following:following,created_at:created_at,updated_at:updated_at,public_gists:public_gists,public_repos:public_repos,twitter_username:twitter_username,bio:bio,hireable:hireable,email:email,location:location,blog:blog,company:company,avatar_url:avatar_url,html_url:html_url}=res.data;var teks=`*User Name :* ${login}\n*Nick Name :* ${name}\n*Followers :* ${followers}\n*Following :* ${following}\n*Public Gists :* ${public_gists}\n*Public Repos :* ${public_repos}\n*Twitter :* ${null==twitter_username?"-":twitter_username}\n*Email :* ${null==email?"-":email}\n*Location :* ${null==location?"-":location}\n*Blog :* ${blog}\n*Link :* ${html_url}\n*Created Time :*\n  - Date : ${moment(created_at).tz("Asia/Jakarta").format("DD-MM-YYYY")}\n  - Time : ${moment(created_at).tz("Asia/Jakarta").format("HH:mm:ss")}\n*Updated Time :* \n  - Date : ${moment(updated_at).tz("Asia/Jakarta").format("DD-MM-YYYY")}\n  - Time : ${moment(updated_at).tz("Asia/Jakarta").format("HH:mm:ss")}\n*Bio :* ${bio}`;conn.sendFile(m.chat,avatar_url,"github-stalk.png",teks,m)}))};handler.help=["githubstalk"],handler.tags=["internet"],handler.command=/^(githubstalk)$/i,handler.limit=!0;export default handler;