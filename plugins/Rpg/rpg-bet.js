// Klo mau pake, pake aja ini bkn enc cma terser aja

let confirm={};async function handler(m,{conn:conn,args:args}){if(m.sender in confirm)throw"Kamu masih melakukan judi, tunggu sampai selesai!!";try{let user=global.db.data.users[m.sender],count=1*(args[0]&&number(parseInt(args[0]))?Math.max(parseInt(args[0]),1):/all/i.test(args[0])?Math.floor(parseInt(user.money)):1);if(1*user.money<count)return m.reply("💹 Uang kamu tidak cukup!!");if(!(m.sender in confirm)){confirm[m.sender]={sender:m.sender,count:count,timeout:setTimeout((()=>(m.reply("timed out"),delete confirm[m.sender])),6e4)};let txt=`Apakah anda yakin mau melakukan judi (Y/n)\n\n*Taruhan:* ${count} 💹\n⏰ 60s Timeout`;return conn.reply(m.chat,txt,m)}}catch(e){if(console.error(e),m.sender in confirm){let{timeout:timeout}=confirm[m.sender];clearTimeout(timeout),delete confirm[m.sender],m.reply("Rejected")}}}handler.before=async m=>{if(!(m.sender in confirm))return;if(m.isBaileys)return;let{timeout:timeout,count:count}=confirm[m.sender],user=global.db.data.users[m.sender],moneyDulu=1*user.money,txt=(m.msg&&m.msg.selectedDisplayText?m.msg.selectedDisplayText:m.text?m.text:"").toLowerCase();try{if(/^(✔️|y(es|a))?$/i.test(txt)){let Bot=1*Math.ceil(91*Math.random()),Kamu=1*Math.floor(71*Math.random()),status="Kalah";return Bot<Kamu?(user.money+=1*count,status="Menang"):Bot>Kamu?user.money-=1*count:(status="Seri",user.money+=1*Math.floor(count/1.5)),m.reply(`\n| *PLAYERS* | *POINT* |\n*🤖 BOT:*      ${Bot}\n*👤 KAMU:*    ${Kamu}\n\nKamu *${status}*, kamu ${"Menang"==status?`Mendapatkan *+${2*count}*`:"Kalah"==status?`Kehilangan *-${1*count}*`:`Mendapatkan *+${Math.floor(count/1.5)}*`} Money 💹\n    `.trim()),clearTimeout(timeout),delete confirm[m.sender],!0}if(/^(✖️|no)?$/i.test(txt))return clearTimeout(timeout),delete confirm[m.sender],m.reply("Rejected"),!0}catch(e){return clearTimeout(timeout),delete confirm[m.sender],moneyDulu>1*user.money&&(user.money=1*moneyDulu),m.reply("Error saat melakukan judi (Rejected)"),!0}finally{return clearTimeout(timeout),delete confirm[m.sender],!0}},handler.help=["judi [jumlah]"],handler.tags=["rpg"],handler.command=/^(judi|bet)$/i;export default handler;function number(x=0){return x=parseInt(x),!isNaN(x)&&"number"==typeof x}