// Klo mau pake, pake aja ini bkn enc cma terser aja

import{cpus as _cpus,totalmem,freemem}from"os";import util from"util";import{performance}from"perf_hooks";import{sizeFormatter}from"human-readable";import{join}from"path";import{promises}from"fs";import moment from"moment-timezone";const more=String.fromCharCode(8206),readMore=more.repeat(4001);let format=sizeFormatter({std:"JEDEC",decimalPlaces:2,keepTrailingZeroes:!1,render:(literal,symbol)=>`${literal} ${symbol}B`}),handler=async(m,{conn:conn,usedPrefix:usedPrefix,__dirname:__dirname,text:text,command:command})=>{let date=moment.tz("Asia/Jakarta").format("dddd, Do MMMM, YYYY"),time=moment.tz("Asia/Jakarta").format("HH:mm:ss"),_package=JSON.parse(await promises.readFile(join(__dirname,"../package.json")).catch((_=>({}))))||{},uptime=clockString(1e3*process.uptime()),totalreg=Object.keys(global.db.data.users).length;Object.values(global.db.data.users).filter((user=>1==user.registered)).length;const chats=Object.entries(conn.chats).filter((([id,data])=>id&&data.isChats)),groupsIn=chats.filter((([id])=>id.endsWith("@g.us"))),cpus=(process.memoryUsage(),_cpus().map((cpu=>(cpu.total=Object.keys(cpu.times).reduce(((last,type)=>last+cpu.times[type]),0),cpu))));cpus.reduce(((last,cpu,_,{length:length})=>(last.total+=cpu.total,last.speed+=cpu.speed/length,last.times.user+=cpu.times.user,last.times.nice+=cpu.times.nice,last.times.sys+=cpu.times.sys,last.times.idle+=cpu.times.idle,last.times.irq+=cpu.times.irq,last)),{speed:0,total:0,times:{user:0,nice:0,sys:0,idle:0,irq:0}});let old=performance.now(),speed=performance.now()-old,capti=`🤖 ɴᴀᴍᴇ: ${_package.name}\n🧩 ᴠᴇʀsɪᴏɴ: ${_package.version}\n📚 ʟɪʙʀᴀʀʏ: ${_package.description}\n\n⏳ ᴜᴩᴛɪᴍᴇ: ${uptime}\n📈 ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}\n\n📅 ᴅᴀᴛᴇ: ${date}\n⌚ ᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +5:30﹚\n\n💻 ꜱᴇʀᴠᴇʀ ɪɴғᴏ :\n⮕ ᴩɪɴɢ: ${speed} ᴍs\n⮕ ʀᴀᴍ: ${format(totalmem()-freemem())} / ${format(totalmem())}\n\n💬 ᴡʜᴀᴛꜱᴀᴩᴩ ꜱᴛᴀᴛᴜꜱ :\n⮕ ${groupsIn.length} - Group Chats\n⮕ ${groupsIn.length} - Groups Joined\n⮕ ${groupsIn.length-groupsIn.length} - Groups Left\n⮕ ${chats.length-groupsIn.length} - Personal Chats\n⮕ ${chats.length} - Total Chats\n`.trim();await m.reply(capti)};handler.help=["botinfo"],handler.tags=["info"],handler.command=/^(bot(info)?|infobot)$/i;export default handler;function clockString(ms){return["\n"+(isNaN(ms)?"--":Math.floor(ms/864e5))," *Days ☀️*\n ",isNaN(ms)?"--":Math.floor(ms/36e5)%24," *Hours 🕐*\n ",isNaN(ms)?"--":Math.floor(ms/6e4)%60," *Minute ⏰*\n ",isNaN(ms)?"--":Math.floor(ms/1e3)%60," *Second ⏱️* "].map((v=>v.toString().padStart(2,0))).join("")}