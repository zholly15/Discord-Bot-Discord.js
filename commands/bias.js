const Discord = require('discord.js');

module.exports = {
	name: 'bias',
	description: 'Location Unknown. Contact High Command upon any sighting',
	aliases: ['mendicant', 'zeta'],
	execute(message) {
		// message.channel.send('https://content.halocdn.com/media/Default/encyclopedia/characters/mendicant-bias/mendicant-bias-542x542-e54a6f625354430abec15aa106247841.jpg');
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Former Monitor of Zeta Halo')
			.setURL('https://halo.fandom.com/wiki/032_Mendicant_Bias')
			// .setAuthor('ONI Case Worker zh-15')
			.setDescription('05-032 Mendicant Bias was a Contender-class Ancilla.')
			.setThumbnail('https://vignette.wikia.nocookie.net/halo/images/7/77/Mendicant_Bias_Origins.png/revision/latest?cb=20200615094505')
			.addFields(
				{ name: 'Current Location Installation 00', value: 'And so here at the end of my life, I do once again betray a former master. The path ahead is fraught with peril. But I will do all I can to keep it stable - keep you safe. I\'m not so foolish to think this will absolve me of my sins. One life hardly balances billions.' },

			)
			.addField('Hostility Unknown', 'Do not interact with AI unless cleared by High Command', true)
			.setImage('https://content.halocdn.com/media/Default/encyclopedia/characters/mendicant-bias/mendicant-bias-542x542-e54a6f625354430abec15aa106247841.jpg')
			.setFooter('Last Updated 7/29/2020');

		message.channel.send(exampleEmbed);
	},
};