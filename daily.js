const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");
module.exports = {
    name: 'daily',
    description: "daily money command",
    run: async (client, message, args) => {
        let user = message.author;

        let timeout = 86400000;
        let amount = 200;
      
        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
      
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
          let time = ms(timeout - (Date.now() - daily));
        
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .addField("Deja ti-ai luat banii pe ziua de astazi", `Mai poti colecta bani din nou in ${time.hours}ore`)


          message.channel.send(timeEmbed)
        } else {
          let moneyEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`Ti-ai colectat doza de ${amount} monede`);
        message.channel.send(moneyEmbed)
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
      
      
        }
    }
}