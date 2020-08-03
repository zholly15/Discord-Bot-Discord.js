const Discord = require('discord.js');

module.exports = {
	name: 'dizzy',
	description: 'A special meme for my friendo',
	aliases: ['drunk', 'confused', 'krabs'],
	execute(message) {
		const dizzyKrabs = new Discord.MessageEmbed()
			.setColor('#0088gg')
			.setTitle('Too much alcohal, me boy spongebob')
			.setURL('https://www.youtube.com/watch?v=k238XpMMn38')
			.setImage('https://media.discordapp.net/attachments/618503629208289290/739921395298861206/krabs.png');
		message.channel.send(dizzyKrabs);
	},
};