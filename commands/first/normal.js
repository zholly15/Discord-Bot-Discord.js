const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class normalCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'normal',
			group: 'first',
			memberName: 'spongebobnormal',
			description: 'Normal Spongebob Meme',
			aliases: ['normie'],
		});
	}


	run(message) {
		const NormalEmbed = new	MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Hi, How are you?')
			.setURL('https://www.youtube.com/watch?v=EXbMC-AYqwY')
			.setImage('https://media.discordapp.net/attachments/618503629208289290/739920761250250782/340.png');

		return message.embed(NormalEmbed);
	}
};