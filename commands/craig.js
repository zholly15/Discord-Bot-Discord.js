const Discord = require('discord.js');

module.exports = {
	name: 'craig',
	description: 'Location Zeta Halo.',
	aliases: ['brute'],
	execute(message) {
		// message.channel.send('https://content.halocdn.com/media/Default/encyclopedia/characters/mendicant-bias/mendicant-bias-542x542-e54a6f625354430abec15aa106247841.jpg');
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('The Best Brute')
			.setURL('https://www.youtube.com/watch?v=-zOVlSljEbo')
			// .setAuthor('ONI Case Worker zh-15')
			.setDescription('He was a brute, of the faction Banished')
			.setThumbnail('https://i1.wp.com/assets.vg247.com/current/2020/07/craig-the-brute.png?resize=503%2C526&ssl=1')
			.addFields(
				{ name: 'Current Location Installation 07', value: 'Ouch that hurt.' },

			)
			.addField('Hostility Violent', 'Engage and destroy', true)
			.setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F876%2F044%2F065.gif&f=1&nofb=1')
			.setFooter('Last Updated 7/29/2020');

		message.channel.send(exampleEmbed);
	},
};