// Klo mau pake, pake aja ini bkn enc cma terser aja

import{toDataURL}from"qrcode";var handler=async(m,{conn:conn,text:text})=>{if(!text)throw"Teksnya mana banh?";conn.sendFile(m.chat,await toDataURL(text.slice(0,2048),{scale:8}),"qrcode.png","¯\\_(ツ)_/¯",m)};handler.help=["","code"].map((v=>"qr"+v+" <teks>")),handler.tags=["tools"],handler.command=/^qr(code)?$/i;export default handler;