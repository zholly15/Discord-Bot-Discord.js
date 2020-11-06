const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
const { haloAPIKey } = require('../../config.json');


const haloRequestURL = 'https://www.haloapi.com/profile/h5/profiles/';

const header = {
	// 'GET https' :'//www.haloapi.com/profile/h5/profiles/zholly15/spartan HTTP/1.1',
	// 'Host' : 'www.haloapi.com',
	'Ocp-Apim-Subscription-Key': haloAPIKey,
};


module.exports = class SpartanImageCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'halo5spartan',
			group: 'first',
			memberName: 'halo5spartan',
			description: 'Returns Image of Halo 5 spartan',
			args: [
				{
					key: 'tag',
					prompt: 'Enter a gamertag to see their Halo 5 spartan',
					type: 'string',
				},
			],
		});
	}


	async run(msg, { tag }) {

		const query = `${tag}/spartan`;
        const targetURL = haloRequestURL + query;
        
        const imageURL = await fetch(targetURL, { headers: header }).then(response => response.url );

		return msg.say(imageURL);

	}
};
