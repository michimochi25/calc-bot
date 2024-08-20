const { Client, GatewayIntentBits } = require("discord.js");
const math = require('mathjs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const config = require("./config.json");
client.login(config.BOT_TOKEN);

client.on("messageCreate", function (message) {
    if (message.author.bot) return;
    let res;
    try {
        res = math.evaluate(message.content);
    } catch {
        return message.reply({ content: 'Unable to evaluate.. weird syntax' });
    }
    message.reply({ content: `The result of ${message.content} is ${res}` });
});