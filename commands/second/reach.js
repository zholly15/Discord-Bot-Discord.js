const { Command } = require('discord.js-commando');

module.exports = class ReachCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'reach',
			group: 'second',
			memberName: 'reach',
			description: 'Reach Contact Command',
		});
	}

	run(message) {
		return message.say('https://www.youtube.com/watch?v=Q_4i-yOUmXY');
	}

};