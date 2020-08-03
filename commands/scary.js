const Discord = require('discord.js');

module.exports = {
	name: 'scary',
	description: 'A special meme for my friendo',
	aliases: ['boo'],
	execute(message) {
		const scaryAlan = new Discord.MessageEmbed()
			.setColor('#0088gg')
			.setTitle('I SEE YOU')
			.setURL('https://twitter.com/liverofacat')
			.setImage('https://media.discordapp.net/attachments/618503629208289290/739920827239366686/340.png');
		message.channel.send(scaryAlan);
	},
};