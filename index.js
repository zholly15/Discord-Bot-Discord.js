const { prefix, token, idToken } = require('./config.json');
const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');

// music Queue
Structures.extend('Guild', Guild => {
	class MusicGuild extends Guild {
		constructor(client, data) {
			super(client, data);
			// musicData should be here if you followed my play command tutorial, don't copy it if you haven't
			this.musicData = {
				queue: [],
				isPlaying: false,
				nowPlaying: null,
				songDispatcher: null,
			};
			this.triviaData = {
				isTriviaRunning: false,
				wasTriviaEndCalled: false,
				triviaQueue: [],
				triviaScore: new Map(),
			};
		}
	}
	return MusicGuild;
});

const client = new CommandoClient({
	commandPrefix: prefix,
	owner: idToken,
	disableEveryone: true,
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['first', 'Your First Command Group'],
		['second', 'The Second Command Group'],
		['music', 'The music command Group'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));


client.once('ready', ()=> {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id}`);
	client.user.setActivity('All of the Sol System', { type: 'WATCHING' });
});

client.on('error', console.error);


client.login(token);