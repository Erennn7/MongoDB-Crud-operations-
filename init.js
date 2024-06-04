const mongoose=require("mongoose");
const Chat=require("./models/chat.js");


main().then(()=>{
    console.log("connection succesful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
        from:"mayur",
        to:"samarth",
        message:"lewis better",
        created_at:Date(),
    },
    {
        from:"Jiya",
        to:"samarth",
        message:"Heyyyy! How are you?????",
        created_at:Date(),
    },
    {
        from:"Rahi",
        to:"samarth",
        message:"Jai shree ram",
        created_at:Date(),
    },
    {
        from:"Anvita",
        to:"samarth",
        message:"How are you samarth",
        created_at:Date(),
    },
    {
        from:"Nachiket",
        to:"samarth",
        message:"Kingmaker of Umanagri",
        created_at:Date(),
    },
]

Chat.insertMany(allChats);