const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
const querystring = require('querystring');

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
		const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
		const query = querystring.stringify({ term: word.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

		if (!list.length){
			return message.send(`No results found for **${word.join(' ')}**.`);
		}

		const [answer] = list;

		const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addFields(
				{ name: 'Definition', value: trim(answer.definition, 1024) },
				{ name: 'Example', value: trim(answer.example, 1024) },
				{ name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
			);
		message.embed(embed);
	}
};