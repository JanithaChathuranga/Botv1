// Klo mau pake, pake aja ini bkn enc cma terser aja

const rewards={exp:15e3,money:35999,potion:9},cooldown=6048e5;let handler=async m=>{let user=global.db.data.users[m.sender];if(new Date-user.lastweekly<cooldown)throw`You have already claimed this daily claim!, wait for *${(user.lastweekly+cooldown-new Date).toTimeString()}*`;let text="";for(let reward of Object.keys(rewards))reward in user&&(user[reward]+=rewards[reward],text+=`*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`);conn.reply(m.chat,`${htki} WEEKLY ${htka}\n`+text.trim(),m),user.lastweekly=1*new Date};handler.help=["weekly"],handler.tags=["rpg"],handler.command=/^(weekly)$/i,handler.cooldown=cooldown;export default handler;