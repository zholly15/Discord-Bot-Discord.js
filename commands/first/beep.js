const { Command } = require('discord.js-commando');

module.exports = class BeepCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'beep',
			group: 'first',
			memberName: 'beep',
			description: 'Replies with boop',
		});
	}

	run(message) {
		return message.say('boop');
	}
};