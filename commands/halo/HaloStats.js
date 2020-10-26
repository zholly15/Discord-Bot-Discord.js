const HaloAPI = require('haloapi');
const { haloAPIKey } = require('../../config.json');
const { Command } = require('discord.js-commando');

module.exports = class HaloStatsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'stats',
			group: 'halo',
			memberName: 'stats',
			description: 'Replies with halo 5 stats',
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
		// h5.metadata.seasons().then(console.log);
		h5.stats.serviceRecordArena(user).then(data => {
			console.log(data.Result.ArenaStats);
		});
	}
};