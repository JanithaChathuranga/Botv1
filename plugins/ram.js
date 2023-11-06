// Klo mau pake, pake aja ini bkn enc cma terser aja

import{freemem}from"os";import{sizeFormatter}from"human-readable";const format=sizeFormatter({std:"JEDEC",decimalPlaces:2,keepTrailingZeroes:!1,render:(l,s)=>`${l} ${s}B`}),handler=async(m,{conn:conn})=>conn.reply(m.chat,`🔵 Free RAM: ${format(freemem())}`,m);handler.command=/^ram$/i;export default handler;