const mongo= require("mongoose")

const mongoUri=process.env.MONGO

const data = async()=>{
    try {
        const connection= await mongo.connect(mongoUri)
        if(connection){
            console.log("Database connected Successfully");
            
        }
    } catch (error) {
        console.log("Unable to connect with Database");
        
    }
}

module.exports={data}