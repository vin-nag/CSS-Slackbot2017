const Botkit = require('botkit')
//const config = require('./config')

const controller = Botkit.slackbot();

const bot = controller.spawn({
  token: config.TOKEN
})

bot.startRTM((err, bot, payload) => {
  if(err){
    throw new Error('Failed to connect to Slack!')
  }
})

controller.on('user_channel_join',function(bot,message) {
  // message contains data sent by slack
  // in this case:
  // https://api.slack.com/events/channel_joined
  //console.log("event reached for channel join");
  bot.reply(message,"Welcome to our Group <@" + message.user + ">"); 
});





