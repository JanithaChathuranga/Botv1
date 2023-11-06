// Klo mau pake, pake aja ini bkn enc cma terser aja

let handler=m=>m;handler.before=async function(m){let user=db.data.users[m.sender];user.health>100&&(user.health=100),user.health<0&&(user.health=0)};export default handler;