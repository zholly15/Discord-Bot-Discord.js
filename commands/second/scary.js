const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class scaryCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'scary',
			group: 'second',
			memberName: 'scary',
			description: 'Replies with a scary image',
			examples: ['scary'],
		});
	}
	run(message) {
		const scaryEmbed = new MessageEmbed()
			.setColor('#0088gg')
			.setTitle('I SEE YOU')
			.setURL('https://twitter.com/liverofacat')
			.setImage('https://media.discordapp.net/attachments/618503629208289290/739920827239366686/340.png');
		return message.embed(scaryEmbed);
	}

};