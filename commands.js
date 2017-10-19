//ping command
exports.run = (client, message, args) => {
    message.channel.send("pong!").catch(console.error);
}

//help command
exports.run = (client, message, args) => {
    message.channel.send("Hi I'm Jakebot! Right now I can !say, !help. Not much else, I'm afraid.");
}

//say command
exports.run = (client, message, args) => {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
}

//versus flip command
//!versus user1 user2
exports.run = (client, message, args) => {
    let heads = args[0];
    let tails = args[1];
    const round1 = Math.random();
    const round2 = Math.random();
    const round3 = Math.random();
    
    const embed = new Discord.RichEmbed()
        .setTitle("COIN FLIP #RR AC FINAL PLUS")
        .setColor("#6199B5")
        .setDescription("HEAVEN OR HELL, LET'S JAKE!");
    
    //if first round goes Heads
    if(round1 < 0.5) {
        embed.addField("ROUND 1", `$(heads) gets first strike!`);
        
        //if Heads wins again
        if(round2 < 0.5) {
            embed.addField("ROUND 2", `$(heads) takes it straight!`);
            embed.addField("THE WINNER IS", `$(heads)!  There was never any doubt!`);
        }
        
        //Tails takes Round 2
        else {
            embed.addField("ROUND 2", `$(tails) answers back!`);
            
            //if Heads wins game 3
            if(round3 < 0.5) {
                embed.addField("ROUND 3", `$(heads) claims the crown!`);
                embed.addField("THE WINNER IS", `$(heads)! A nervous victory!`);
            }
            
            //Tails wins game 3
            else {
                embed.addField("ROUND 3", `$(tails) comes out on top!`);
                embed.addField("THE WINNER IS", `$(tails)! A reverse sweep!`);
            }
        }
    }
    else {
        embed.addField("ROUND 1", `$(tails) tastes first blood!`);
        
        //if Heads wins Round 2
        if(round2 < 0.5) {
            embed.addField("ROUND 2", `$(heads) retaliates!`);
            
            //if Heads wins Round 3
            if(round3 < 0.5) {
                embed.addField("ROUND 3", `$(heads) couldn't be stopped!`);
                embed.addField("THE WINNER IS", `$(heads)! What a comeback!`);
            }
            
            else {
                embed.addField("ROUND 3", `$(tails) strikes the fatal blow!`);
                embed.addField("THE WINNER IS", `$(tails)! What an amazing match!`);
            }
        }
        
        else {
            embed.addField("ROUND 2", `$(tails) is in the zone!`);
            embed.addField("THE WINNER IS", `$(tails)! A beautiful victory!`);
        }
    }
    
    message.channel.send({embed});
}