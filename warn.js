client.on("message" , msg => {
    if(message.content.startsWith(profix+"warn")){
        let user = message.mentions.users.first()
        let grund = message.content.split(" ").slice(2).join(" ")
    
        if(!user) return message.channel.send("Hello").then(msg=>msg.delete({timeout:"5000"}));
    
    
        if(!grund) grund = "Kein Grund"
    
        let embed = new Discord.MessageEmbed()
        .setTitle("Warning!")
        .setDescription(`Warning <@!${user.id}>, Reasone !\nGrund: ${grund}`)
        .setColor("RED")
    
        message.channel.send(embed).then(msg=>msg.delete({timeout:"8000"}));
    
        if(!warnFile[user.id+message.guild.id]){
            warnFile[user.id+message.guild.id] = {
                warn:0,
                maxwarn:3
            }
        }
    
        warnFile[user.id+message.guild.id].warn += 1
    
        if(warnFile[user.id+message.guild.id].warn > warnFile[user.id+message.guild.id].maxwarn){
            if(message.guild.member(user).kickable == true){
                message.channel.send(`User <@!${user.id}> hhhhhhhhh`)
                message.guild.member(user).kick("HELLO BRO.")
            }
            delete warnFile[user.id+message.guild.id]
        }
    
    
    
        fs.writeFile("./warn.json", JSON.stringify(warnFile), function(err){
            if(err) console.log(err)
        })
    })