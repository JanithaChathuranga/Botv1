// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,usedPrefix:usedPrefix,text:text,args:args,command:command})=>{let monsters=[{area:1,name:"Goblin"},{area:1,name:"Slime"},{area:1,name:"Wolf"},{area:2,name:"Nymph"},{area:2,name:"Skeleton"},{area:2,name:"Wolf"},{area:3,name:"Baby Demon"},{area:3,name:"Ghost"},{area:3,name:"Zombie"},{area:4,name:"Imp"},{area:4,name:"Witch"},{area:4,name:"Zombie"},{area:5,name:"Ghoul"},{area:5,name:"Giant Scorpion"},{area:5,name:"Unicorn"},{area:6,name:"Baby Robot"},{area:6,name:"Sorcerer"},{area:6,name:"Unicorn"},{area:7,name:"Cecaelia"},{area:7,name:"Giant Piranha"},{area:7,name:"Mermaid"},{area:8,name:"Giant Crocodile"},{area:8,name:"Nereid"},{area:8,name:"Mermaid"},{area:9,name:"Demon"},{area:9,name:"Harpy"},{area:9,name:"Killer Robot"},{area:10,name:"Dullahan"},{area:10,name:"Manticore"},{area:10,name:"Killer Robot"},{area:11,name:"Baby Dragon"},{area:11,name:"Young Dragon"},{area:11,name:"Scaled Baby Dragon"},{area:12,name:"Kid Dragon"},{area:12,name:"Not so young Dragon"},{area:12,name:"Scaled Kid Dragon"},{area:13,name:"Definitely not so young Dragon"},{area:13,name:"Teen Dragon"},{area:13,name:"Scaled Teen Dragon"}],player=global.db.data.users[m.sender],pengirim=m.sender.split("@")[0],timers=clockString(12e5-(new Date-global.db.data.users[m.sender].lasthunt)),area_monsters=monsters[Math.floor(Math.random()*monsters.length)],monster=area_monsters.name;area_monsters=area_monsters.area;let monsterName=monster.toUpperCase();if(!(new Date-global.db.data.users[m.sender].lasthunt>12e5))throw`Tunggu ${timers} Untuk Berburu Lagi`;{let coins=parseInt(Math.floor(1e5*Math.random())),exp=parseInt(Math.floor(1e4*Math.random())),healing=1*`${Math.floor(100*Math.random())}`.trim();if(player.health-=healing,player.lasthunt=1*new Date,player.health<0){let msg=`*@${pengirim}* Anda Mati Di Bunuh Oleh ${monsterName}`;return player.level>0&&player.sword>0&&(player.level-=1,player.sword-=5,player.exp-=1*exp,msg+="\nLevel Anda Turun 1 Karena Mati Saat Berburu!\nSword Anda Berkurang 5 Karena Mati Saat Berburu!"),player.health=100,void await conn.reply(m.chat,msg,m,{mentions:conn.parseMention(msg)})}player.money+=1*coins,player.exp+=1*exp,global.db.data.users[m.sender].tiketcoin+=1;let pesan=`Berhasil menemukan *${monsterName}*\n*@${pengirim}* Kamu sudah membunuhnya\nMendapatkan:\n${new Intl.NumberFormat("en-US").format(coins)} Money\n${new Intl.NumberFormat("en-US").format(exp)} XP\nBerkurang -${healing} Health, Tersisa ${player.health} Health\n\n+1 Tiketcoin`;await conn.reply(m.chat,pesan,m,{mentions:conn.parseMention(pesan)})}};handler.help=["hunt"],handler.tags=["game"],handler.command=/^hunter|hunt/i,handler.limit=!0,handler.group=!0,handler.fail=null;export default handler;function clockString(ms){return["\n"+(isNaN(ms)?"--":Math.floor(ms/864e5))," *Days ☀️*\n ",isNaN(ms)?"--":Math.floor(ms/36e5)%24," *Hours 🕐*\n ",isNaN(ms)?"--":Math.floor(ms/6e4)%60," *Minute ⏰*\n ",isNaN(ms)?"--":Math.floor(ms/1e3)%60," *Second ⏱️* "].map((v=>v.toString().padStart(2,0))).join("")}