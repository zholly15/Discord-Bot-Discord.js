const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class CraigCommandss extends Command {
	constructor(client) {
		super(client, {
			name: 'craig',
			group: 'first',
			memberName: 'craig',
			description: 'Information on Craig',
			aliases: ['brute'],
		});
	}

	run(message) {

		const craigEmbed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('The Best Brute')
			.setURL('https://www.youtube.com/watch?v=-zOVlSljEbo')
			.setDescription('He was a brute, of the faction Banished')
			.setThumbnail('https://i1.wp.com/assets.vg247.com/current/2020/07/craig-the-brute.png?resize=503%2C526&ssl=1')
			.addFields(
				{ name: 'Current Location Installation 07', value: 'Ouch that hurt.' },

			)
			.addField('Hostility Violent', 'Engage and destroy', true)
			.setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F876%2F044%2F065.gif&f=1&nofb=1')
			.setFooter('Last Updated 7/29/2020');

		return message.embed(craigEmbed);
	}
};