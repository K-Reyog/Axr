module.exports = {

    name :'clear',
    description:'Clears messages',
    async execute (client , message , args){
        if(message.member.hasPermission('ADMINISTRATOR') ){
            if(!args[0]) return message.reply("Please enter the amount of messages you want to delete my lord");
    
            if(isNaN(args[0])) return message.reply("Please enter a real and positive number... amount does not mean texts does it??");
    
            if(args[0] > 100 ) return message.reply ("You can only delete 100 messages at once... run the command again to delete more");
    
            if(args[0] < 1 ) return message.reply("As i said earlier only positive number will work.");
    
            await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });}
            else{
                message.channel.send('You dont have perms to delete messages so just go away');





    }}}
