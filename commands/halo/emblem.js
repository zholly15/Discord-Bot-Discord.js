const HaloAPI = require('haloapi');
const { haloAPIKey } = require('../../config.json');
const { Command } = require('discord.js-commando');

module.exports = class SpartanEmblemCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'emblem',
			group: 'halo',
			memberName: 'emblem',
			description: 'Replies halo 5 emblem',
			throttling: {
				usages: 2,
				duration: 10,
			},
			args: [
				{
					key:'user',
					prompt:'Who would like to search?',
					type: 'string',
					validate: user => user.length < 50,
				},
			],
		});
	}

	run(message, { user }) {
		const h5 = new HaloAPI(haloAPIKey);
		h5.profile.emblemImage(user).then(function(url) {
			message.channel.send(url);
		});
	}
};