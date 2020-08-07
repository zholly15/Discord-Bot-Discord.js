const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class dizzyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'dizzy',
			group: 'first',
			memberName: 'spongebobdizzy',
			description: 'Mr.Krabs dizzy image',
			aliases: ['drunk', 'confused', 'krabs'],
		});
	}

	run(message) {
		const dizzyKrabs = new MessageEmbed()
			.setColor('#0088gg')
			.setTitle('Too much alcohal, me boy spongebob')
			.setURL('https://www.youtube.com/watch?v=k238XpMMn38')
			.setImage('https://media.discordapp.net/attachments/618503629208289290/739921395298861206/krabs.png');


		return message.embed(dizzyKrabs);

	}
};