const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json')
const command = require('./command')


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("!help", { type: "PLAYING"})
});

client.on("message" , msg => {
    if (msg.content === '!rules'){
        msg.channel.send("Please go to <#853526088473640970> 😄");
}
})
client.on("message" , msg => {
    if (msg.content === '!announcement'){
        msg.channel.send("Please go to <#853570792973008907> 😄");
}
})


// Emoji section
client.on("message" , msg => {
    if (msg.content === '!smile'){
        msg.channel.send("Bot will add smile emoji to your message!")
        msg.react('😀');
}
})

client.on("message" , msg => {
    if (msg.content === '!sad'){
        msg.channel.send("Bot will add sad emoji to your message!")
        msg.react('😭');
}
})
client.on("message" , msg => {
    if (msg.content === '!shock'){
        msg.channel.send("Bot will add shock emoji to your message!")
        msg.react('😱');
}
})
client.on("message" , msg => {
    if (msg.content === '!sick'){
        msg.channel.send("Bot will add sick emoji to your message!")
        msg.react('😷');
}
})
client.on("message" , msg => {
    if (msg.content === '!police'){
        msg.channel.send("Bot will add police emoji to your message!")
        msg.react('👮');
        msg.react('👮‍♀️');
}
})
client.on("message" , msg => {
    if (msg.content === '!dog'){
        msg.channel.send("Bot will add dog emoji to your message!")
        msg.react('🐶');
}
})
client.on("message" , msg => {
    if (msg.content === '!cat'){
        msg.channel.send("Bot will add cat emoji to your message!")
        msg.react('🐱');
}
})
client.on("message" , msg => {
    if (msg.content === '!monkey'){
        msg.channel.send("Bot will add monkey emoji to your message!")
        msg.react('🐵');
}
})
client.on("message" , msg => {
    if (msg.content === '!thumbup'){
        msg.channel.send("Bot will add thumbup emoji to your message!")
        msg.react('👍');
}
})

client.on("message" , msg => {
    if (msg.content === '!confuse'){
        msg.channel.send("Bot will add confuse emoji to your message!")
        msg.react('🤔');
}
})
client.on("message" , msg => {
    if (msg.content === '!shy'){
        msg.channel.send("Bot will add shy emoji to your message!")
        msg.react('🤣');
}
})
client.on("message" , msg => {
    if (msg.content === '!angry'){
        msg.channel.send("Bot will add angry emoji to your message!")
        msg.react('🤬');
}
})

client.on("message" , msg => {
    if (msg.content === '!invitelink'){
        msg.channel.send("Here is the link >> https://discord.com/api/oauth2/authorize?client_id=867031115373215795&permissions=0&scope=bot")
}
})


    
// help command
client.on("message" , msg => {
    if (msg.content === '!help'){
        const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#E74C3C')
    .setTitle('Kaolad bot help area')
    .addFields(
        { name: 'Command', value: '`!help-commands`', inline: true},
        { name: 'Moderator', value: '`!help-moderator`', inline: true },
        { name: 'Music', value: '`!help-music`', inline: true },
    )
    .setTimestamp()
    .setFooter('Kaolad bot');
    
    msg.channel.send(exampleEmbed);
    }
    })
client.on("message" , msg => {
    if (msg.content === '!help-commands'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .setTitle('Command List')
        .addField('`!<emoji name>`', 'Bot will add emoji reaction to your message')
	    .addField('`!rules`', 'Show rules')
	    .addField('`!announcement`', 'Show announcement')
	    .addField('`!invitelink`', 'Show kaolad bot invite link')
        .setTimestamp()
        .setFooter('Kaolad bot');
    
        msg.channel.send(exampleEmbed);
    }
    })
client.on("message" , msg => {
    if (msg.content === '!help-moderator'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .setTitle('Moderator List')
        .addField('`!clear <amount>`', 'Bot will delete message')
        .addField('`!ban <tag people>`', 'Bot will ban member')
        .addField('`!kick <tag prople>`', 'Bot will kick member')
        .setTimestamp()
        .setFooter('Kaolad bot');
    
        msg.channel.send(exampleEmbed);
    }
    })
client.on("message" , msg => {
    if (msg.content === '!help-music'){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#E74C3C')
        .setTitle("Please use hydra or rythm !")
        .setTimestamp()
        .setFooter('Kaolad bot');
    
        msg.channel.send(exampleEmbed);
    }
    })


// Clear massage section
client.on('message', function(message) {
    if(message.content.startsWith("!clear")){
        message.reply('DO NOT CLEAR MORE THAN 10 MESSAGE PER TIME')
        const amount = message.content.split(" ")[1];
        if(!amount)
        {
            message.reply(`--clear <amount> "DO NOT CLEAR MORE THAN 10 MESSAGE"`);
            return;
        }
         if(!message.member.hasPermission("MANAGE_MESSAGES"))
         {
            message.channel.send('You have no permissions to do that');
            return;
         }
        message.channel.bulkDelete(amount)
    .then(messages => message.channel.send(`Messages deleted by ${message.author.username}`))
    .catch(console.error);
    }

});



client.on('ready', () => {
    console.log('The client is ready!')
  
    command(client, 'ban', (message) => {
      const { member, mentions } = message
  
      const tag = `<@${member.id}>`
  
      if (
        member.hasPermission('ADMINISTRATOR') ||
        member.hasPermission('BAN_MEMBERS')
      ) {
        const target = mentions.users.first()
        if (target) {
          const targetMember = message.guild.members.cache.get(target.id)
          targetMember.ban()
          message.channel.send(`${tag} That user has ban, BYE!`)
        } else {
          message.channel.send(`Please tag someone to ban.`)
        }
      } else {
        message.channel.send(
          `${tag} You do not have permission to use this command.`
        )
      }
    })
  
    command(client, 'kick', (message) => {
      const { member, mentions } = message
  
      const tag = `<@${member.id}>`
  
      if (
        member.hasPermission('ADMINISTRATOR') ||
        member.hasPermission('KICK_MEMBERS')
      ) {
        const target = mentions.users.first()
        if (target) {
          const targetMember = message.guild.members.cache.get(target.id)
          targetMember.kick()
          message.channel.send(`${tag} That user has kicked, BYE!`)
        } else {
          message.channel.send(`Please tag someone to kick.`)
        }
      } else {
        message.channel.send(
          `${tag} You do not have any permission to use this command.`
        )
      }
    })
  })
  
  client.login(config.token)