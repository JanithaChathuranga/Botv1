// Klo mau pake, pake aja ini bkn enc cma terser aja

import fs from"fs";import fetch from"node-fetch";import FormData from"form-data";let handler=async m=>{let q=m.quoted?m.quoted:m,mime=q.mediaType||"";if(!/image|video|audio|sticker|document/.test(mime))throw"No media found";{let media=await q.download(!0),data=await uploadFile(media);m.reply(data.files[0].url)}};handler.help=["tourl2"],handler.tags=["tools"],handler.command=/^(tourl2)$/i;export default handler;async function uploadFile(path){let form=new FormData;form.append("files[]",fs.createReadStream(path));let res=await(await fetch("https://uguu.se/upload.php",{method:"post",headers:{...form.getHeaders()},body:form})).json();return await fs.promises.unlink(path),res}