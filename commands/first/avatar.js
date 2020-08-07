const { Command } = require('discord.js-commando');

module.exports = class AvatarCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'avatar',
			aliases: ['icon', 'pfp'],
			group: 'first',
			memberName: 'avatar',
			description: 'Returns users discord avatar',
		});
	}

	run(message) {
		if(!message.mentions.users.size) {
			return message.say(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format:
				'png', dynamic: true })}>`;
		});

		message.say(avatarList);
	}
};

