// Klo mau pake, pake aja ini bkn enc cma terser aja

import similarity from"similarity";const threshold=.72;export async function before(m){let id=m.chat;if(!m.quoted||!m.quoted.fromMe||!m.quoted.isBaileys||!m.text||!/Ketik.*quizzh/i.test(m.quoted.text)||/.*quizzh/i.test(m.text))return!0;if(this.quizz=this.quizz?this.quizz:{},!(id in this.quizz))return this.reply(m.chat,"Soal itu telah berakhir",m);if(m.quoted.id==this.quizz[id][0].id){if(/^((me)?nyerah|surr?ender)$/i.test(m.text))return clearTimeout(this.quizz[id][3]),delete this.quizz[id],this.reply(m.chat,"*Yah Menyerah :( !*",m);let json=JSON.parse(JSON.stringify(this.quizz[id][1]));m.text.toLowerCase()==json[0].jawaban.toLowerCase().trim()?(global.db.data.users[m.sender].exp+=this.quizz[id][2],this.reply(m.chat,`✅ *Benar!*\n+${this.quizz[id][2]} XP`,m),clearTimeout(this.quizz[id][3]),delete this.quizz[id]):similarity(m.text.toLowerCase(),json[0].jawaban.toLowerCase().trim())>=.72?m.reply("❗ *Dikit Lagi!*"):this.reply(m.chat,"❌ *Salah!*",m)}return!0}export const exp=0;const buttonquizz=[["quizz","/quizz"]];