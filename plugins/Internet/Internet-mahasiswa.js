// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";var handler=async(m,{conn:conn,text:text})=>{if(!text)throw"*_Masukan Nama Mahasiswa/Siswa Yang Ingin Kamu Cari !_*";conn.reply(m.chat,"Sedang mencari Orangnya... Silahkan tunggu",m);let res=await fetch("https://api-frontend.kemdikbud.go.id/hit_mhs/"+text);if(!res.ok)throw"Tidak Ditemukan";let json=await res.json(),message="";json.mahasiswa.forEach((data=>{let nama=data.text,websiteLink=data["website-link"];message+=`\nNama = ${nama}\n\nData Ditemukan pada website = ${`https://pddikti.kemdikbud.go.id${websiteLink}`}\n\n\n`})),conn.reply(m.chat,message,m)};handler.help=["mahasiswa"],handler.tags=["internet"],handler.command=/^(mahasiswa)$/i,handler.limit=!0;export default handler;