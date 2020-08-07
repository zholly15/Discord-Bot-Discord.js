const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class disgustingCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'disgusting',
			group: 'first',
			memberName: 'spongebobdisgusting',
			description: 'Disgusting Spongebob Meme',
			aliases: ['yuck', 'ugly'],
		});
	}

	run(message) {
		const disgustingSponge = new MessageEmbed()
			.setColor('#0088gg')
			.setTitle('EWWWW WTF')
			.setURL('https://youtu.be/8Yy-83RbW1w')
			.setImage('https://media.discordapp.net/attachments/618503629208289290/739920791856218182/artworks-000133021540-aug5md-t500x500.png');

		return message.embed(disgustingSponge);
	}
};