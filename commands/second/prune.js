const { Command } = require('discord.js-commando');

module.exports = class PruneCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'prune',
			group: 'second',
			memberName: 'prune',
			description: 'Prune up to 99 messages',
			examples: ['prune 2'],
			args: [
				{
					key: 'numberToPrune',
					prompt: 'How many messages do you want to prune?',
					type: 'integer',
				},
			],
		});
	}

	run(message, { numberToPrune }) {
		if(isNaN(numberToPrune)) {
			return message.say('That is not a valid number.');
		}
		else if (numberToPrune < 2 || numberToPrune > 100) {
			return message.say('Input number between 2 and 100');
		}

		message.channel.bulkDelete(numberToPrune, true).catch(err=> {
			console.error(err);
			message.channel.send('there was an error deleting messages!');
		});

	}
};