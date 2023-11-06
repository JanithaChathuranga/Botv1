// Klo mau pake, pake aja ini bkn enc cma terser aja

import cp from"child_process";import{promisify}from"util";let exec=promisify(cp.exec).bind(cp),handler=async m=>{let o;await conn.reply(m.chat,"Done",m);try{o=await exec("rm -rf tmp && mkdir tmp")}catch(e){o=e}};handler.help=["cleartmp"],handler.tags=["owner"],handler.command=/^(cleartmp|ctm)$/i,handler.owner=!0;export default handler;