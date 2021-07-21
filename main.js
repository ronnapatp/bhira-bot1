const Discord = require('discord.js');
const client = new Discord.Client();

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
    if (msg.content === '!InviteLink'){
        msg.channel.send("Here is the link >> https://discord.com/api/oauth2/authorize?client_id=867031115373215795&permissions=0&scope=bot")
}
})


// Clear massage section
client.on('message', function(message) {
    if(message.content.startsWith("--clear")){
        message.reply('Please dont clear more than 30 message PER TIME')
        const amount = message.content.split(" ")[1];
        if(!amount)
        {
            message.reply(`--clear <amount> " :D "`);
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
client.login('token>Here');
