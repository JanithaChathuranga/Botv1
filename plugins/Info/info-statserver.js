// Klo mau pake, pake aja ini bkn enc cma terser aja

import cp from"child_process";import{promisify}from"util";let exec=promisify(cp.exec).bind(cp),handler=async m=>{let o;await conn.reply(m.chat,"Wait",m);try{o=await exec("df -h")}catch(e){o=e}finally{let{stdout:stdout,stderr:stderr}=o;stdout.trim()&&m.reply(stdout),stderr.trim()&&m.reply(stderr)}};handler.help=["statserver"],handler.tags=["info"],handler.command=/^(statserver)$/i;export default handler;