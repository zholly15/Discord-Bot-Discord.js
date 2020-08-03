const Discord = require('discord.js');

module.exports = {
	name: 'disgusting',
	description: 'Disgusting Spongebob Meme',
	aliases: ['yuck', 'ugly'],
	execute(message) {
		const disgustingSponge = new Discord.MessageEmbed()
			.setColor('#0088gg')
			.setTitle('EWWWW WTF')
			.setURL('https://youtu.be/8Yy-83RbW1w')
			.setImage('https://media.discordapp.net/attachments/618503629208289290/739920791856218182/artworks-000133021540-aug5md-t500x500.png');
		message.channel.send(disgustingSponge);
	},
};