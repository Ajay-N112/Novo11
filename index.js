//  import json server

const jsonserver=require('json-server')


const cors=require('cors')


 const server=jsonserver.create()



 const middleware=jsonserver.defaults()



 const router=jsonserver.router('db.json')


 server.use(middleware)
server.use(cors())
server.use(router)
 const PORT=8001
 server.listen(PORT,()=>{
    console.log(`___json server started at port :${PORT}_____`);
 })