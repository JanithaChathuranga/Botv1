// Klo mau pake, pake aja ini bkn enc cma terser aja

import fetch from"node-fetch";let handler=async(m,{conn:conn,command:command})=>{try{const response=await fetch("https://api.waifu.im/search?included_tags=oral"),data=await response.json();if(data.images&&data.images.length>0){const imageInfo=data.images[0],caption=`\nSignature: ${imageInfo.signature}\nExtension: ${imageInfo.extension}\nImage ID: ${imageInfo.image_id}\nFavorites: ${imageInfo.favorites}\nSource: ${imageInfo.source}\nWidth: ${imageInfo.width}\nHeight: ${imageInfo.height}\nByte Size: ${imageInfo.byte_size}\nURL: ${imageInfo.url}\n            `,imageUrl=imageInfo.url;conn.sendFile(m.chat,imageUrl,null,caption,m)}else conn.reply(m.chat,"No anime images found.",m)}catch(error){console.error(error),conn.reply(m.chat,"An error occurred while fetching the data.",m)}};handler.command=/^(xoral)$/i,handler.tags=["nsfw"],handler.help=["xoral"],handler.limit=!0;export default handler;