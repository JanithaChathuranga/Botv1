// Klo mau pake, pake aja ini bkn enc cma terser aja

import{emoji_role,sesi,playerOnGame,playerOnRoom,playerExit,dataPlayer,dataPlayerById,getPlayerById,getPlayerById2,killWerewolf,killww,dreamySeer,sorcerer,protectGuardian,roleShuffle,roleChanger,roleAmount,roleGenerator,addTimer,startGame,playerHidup,playerMati,vote,voteResult,clearAllVote,getWinner,win,pagi,malam,skill,voteStart,voteDone,voting,run,run_vote,run_malam,run_pagi}from"../../lib/werewolf.js";const handler=async(m,{conn:conn,command:command,usedPrefix:usedPrefix,args:args})=>{const{sender:sender,chat:chat}=m;conn.werewolf=conn.werewolf?conn.werewolf:{};const ww=conn.werewolf?conn.werewolf:{},value=args[0],target=args[1];if(!1===playerOnGame(sender,ww))return m.reply("Kamu tidak dalam sesi game");if(!0===dataPlayer(sender,ww).status)return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam");if(!0===dataPlayer(sender,ww).isdead)return m.reply("Kamu sudah mati");if(!target||target.length<1)return m.reply("Masukan nomor player");if(isNaN(target))return m.reply("Gunakan hanya nomor");let byId=getPlayerById2(sender,parseInt(target),ww);if(!0===byId.db.isdead)return m.reply("Player sudah mati");if(byId.db.id===sender)return m.reply("Tidak bisa menggunakan skill untuk diri sendiri");if(!1===byId)return m.reply("Player tidak terdaftar");if("kill"===value)return"werewolf"!==dataPlayer(sender,ww).role?m.reply("Peran ini bukan untuk kamu"):"sorcerer"===byId.db.role?m.reply("Tidak bisa menggunakan skill untuk teman"):m.reply("Berhasil membunuh player "+parseInt(target)).then((()=>{dataPlayer(sender,ww).status=!0,killWerewolf(sender,parseInt(target),ww)}));if("dreamy"===value){if("seer"!==dataPlayer(sender,ww).role)return m.reply("Peran ini bukan untuk kamu");let dreamy=dreamySeer(m.sender,parseInt(target),ww);return m.reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`).then((()=>{dataPlayer(sender,ww).status=!0}))}if("deff"===value)return"guardian"!==dataPlayer(sender,ww).role?m.reply("Peran ini bukan untuk kamu"):m.reply(`Berhasil melindungi player ${target}`).then((()=>{protectGuardian(m.sender,parseInt(target),ww),dataPlayer(sender,ww).status=!0}));if("sorcerer"===value){if("sorcerer"!==dataPlayer(sender,ww).role)return m.reply("Peran ini bukan untuk kamu");let sorker=sorcerer(getSesi(m.sender),target);return m.reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`).then((()=>{dataPlayer(sender,ww).status=!0}))}};handler.help=["wwpc"],handler.tags=["rpg"],handler.command=["wwpc"];export default handler;