const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
    name: 'addmoney',
    description: "add money bal",
    run: async (client, message, args) => {
        let ownerID = '735596084465893446'
        if(message.author.id !== ownerID) return;
      
        let user = message.mentions.members.first() || message.author;
      
          if (isNaN(args[1])) return;
          db.add(`money_${message.guild.id}_${user.id}`, args[1])
          let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)
      
          let moneyEmbed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`Am adaugat ${args[1]} Monede\nlui ${user}\nBalanta noua ${bal}`);
          
      
          message.channel.send(moneyEmbed)
      
    }
}

