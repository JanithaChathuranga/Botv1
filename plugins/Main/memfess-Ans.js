// Klo mau pake, pake aja ini bkn enc cma terser aja

export async function before(m){if(!m.chat.endsWith("@s.whatsapp.net"))return!0;this.menfess=this.menfess?this.menfess:{};let mf=Object.values(this.menfess).find((v=>!1===v.status&&v.penerima==m.sender));if(!mf)return!0;if(console.log(m),"Balas"===m.text&&"buttonsMessage"==m.quoted.mtype)return m.reply("Silahkan kirim pesan balasan kamu.");let txt=`Hai kak @${mf.dari.split("@")[0]}, kamu menerima balasan nih.\n\nPesan balasannya:\n${m.text}\n`.trim();await this.reply(mf.dari,txt,null).then((()=>(m.reply("Balasan Menfess terkirim."),this.delay(1e3),delete this.menfess[mf.id],!0)))}