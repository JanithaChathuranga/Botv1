// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,args:args,usedPrefix:usedPrefix,command:command})=>{if(!args[0]||isNaN(args[0]))throw`Masukkan angka mewakili jumlah hari !\n*Misal : ${usedPrefix+command} 30*`;let who;who=m.isGroup?args[1]?args[1]:m.chat:args[1];var jumlahHari=864e5*args[0],now=1*new Date;now<global.db.data.chats[who].expired?global.db.data.chats[who].expired=jumlahHari:global.db.data.chats[who].expired=now+jumlahHari,conn.reply(m.chat,`Berhasil menetapkan hari kadaluarsa untuk Grup ini selama ${args[0]} hari.\n\nHitung Mundur : ${msToDate(global.db.data.chats[who].expired-now)}`,m)};handler.help=["setexpired"].map((v=>v+" <hari>")),handler.tags=["owner"],handler.command=/^(setexpired|addsewa)$/i,handler.owner=!0,handler.group=!0;export default handler;function msToDate(ms){let days=Math.floor(ms/864e5),daysms=ms%864e5,hours=Math.floor(daysms/36e5),hoursms=ms%36e5,minutes=Math.floor(hoursms/6e4),minutesms=ms%6e4;Math.floor(minutesms/1e3);return days+" hari "+hours+" jam "+minutes+" menit"}