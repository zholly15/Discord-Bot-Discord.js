const Discord = require('discord.js');

module.exports = {
	name: 'normal',
	description: 'Normal Spongebob Meme',
	aliases: ['normie'],
	execute(message) {
		// message.channel.send('https://content.halocdn.com/media/Default/encyclopedia/characters/mendicant-bias/mendicant-bias-542x542-e54a6f625354430abec15aa106247841.jpg');
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Hi, How are you?')
			.setURL('https://www.youtube.com/watch?v=EXbMC-AYqwY')
			.setImage('https://media.discordapp.net/attachments/618503629208289290/739920761250250782/340.png');

		message.channel.send(exampleEmbed);
	},
};