// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=async(m,{conn:conn,args:args,usedPrefix:usedPrefix,command:command})=>{let isClose={open:"not_announcement",close:"announcement"}[args[0]||""];if(void 0===isClose)throw`\n*Format salah! Contoh :*\n  *❌ ${usedPrefix+command} close*\n  *✅ ${usedPrefix+command} open*\n`.trim();await conn.groupSettingUpdate(m.chat,isClose)};handler.help=["group"].map((v=>v+" <open / close>")),handler.tags=["group"],handler.command=/^(group|grup)$/i,handler.group=!0,handler.admin=!0,handler.botAdmin=!0;export default handler;