const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const clean = (str) =>{
	str = str.replace(/[\[\]]+/g, '');
	return str;
} 


module.exports = class UrbanCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'urban',
			group: 'first',
			memberName: 'urban',
			description: 'Returns urban dictionary result',
			args: [
				{
					key: 'word',
					prompt: 'What would you like to search?',
					type: 'string',
				},
			],
		});
	}

	async run(message, { word }) {
		let args = word;
		word = word.replace(/\s+/g, '');

		const query = `term=${word}`;

		let url = `https://api.urbandictionary.com/v0/define?${query}`;

		const { list } = await fetch(url).then(response => response.json());


		const [answer] = list;

		if((!answer)) {
			return message.say(`No results found for ${args}`);
		}

		let emple = "No example found";
		if(answer.example.length){
			emple = answer.example;
		}

		const embed = new MessageEmbed()
			.setColor('EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addFields(
				{ name: 'Definition:', value: clean(answer.definition) },
				{ name: 'Example:', value: clean(emple) },
				{ name: 'Rating:', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
			);
		return message.embed(embed);
	}
};