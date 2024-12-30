   let botmod = staff.get(`${message.author.id}`);
   if (botmod.startsWith !== "Bot") {
       return message.channel.send("Unfortunately, you are a server mod. You can't use bot commands.");
   }
   