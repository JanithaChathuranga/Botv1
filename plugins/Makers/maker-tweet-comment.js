// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,args:args,usedPrefix:usedPrefix,command:command})=>{let text,who=m.mentionedJid&&m.mentionedJid[0]?m.mentionedJid[0]:m.fromMe?conn.user.jid:m.sender,name=m.name;if(args.length>=1)text=args.slice(0).join(" ");else{if(!m.quoted||!m.quoted.text)throw"Input Teks";text=m.quoted.text}await m.reply(wait);try{const avatar=await conn.profilePictureUrl(m.sender,"image").catch((_=>"https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg"));let part1=Math.floor(1e3*Math.random());Math.floor(1e3*Math.random());const username=who.split("@")[0],replies=part1,retweets=part1,theme="dark",url=`https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`;conn.sendFile(m.chat,url,"tweet.png","*THANKS FOR TWEETING*",m)}catch(e){await m.reply(eror)}};handler.help=["tweetc"],handler.tags=["maker"],handler.command=["tweetc"];export default handler;