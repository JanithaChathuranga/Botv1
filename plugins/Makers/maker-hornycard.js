// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn})=>{let who=m.quoted?m.quoted.sender:m.mentionedJid&&m.mentionedJid[0]?m.mentionedJid[0]:m.fromMe?conn.user.jid:m.sender;conn.sendFile(m.chat,global.API("https://some-random-api.com","/canvas/horny",{avatar:await conn.profilePictureUrl(who,"image").catch((_=>"https://telegra.ph/file/24fa902ead26340f3df2c.png"))}),"hornycard.png","*Nih Kartunya Kak*",m)};handler.help=["hornycard"],handler.tags=["maker"],handler.command=/^(hornycard)$/i;export default handler;