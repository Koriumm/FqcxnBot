const {Panel} = require("@akarui/aoi.panel")
const { Voice, LoadCommands, Bot } = require("aoi.js");
const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
    sharding: true,
    shardAmount: 2,
	token: "[TOKEN]",
	prefix: ["."],
	intents: "all"
})

//Panel Code

const panel = new Panel({
    username: ["admin"],
    password: ["admin"],
    secret: require('crypto').randomBytes(16).toString("hex"),
    port: 10032,
    bot: bot,
    mainFile: "index.js",
    commands: "./commands",
    interaction:"./interactions"
})
panel.loadPanel()

panel.onError()

bot.onMessage()

//Bot Ready Command Channel Send Message

bot.readyCommand({
    channel: "1056666615132979230",
    code: `
$title[Bot Online]
$description[
<a:latency:1062937439901077534> Ping: **$ping MS**

<:CPU:1062937180395286608> CPU Usage: **$cpu%**

<:ram:1062941584322211870> Ram: **$truncate[$ram] MB**

<:status:1062927392072548432> Running On **$serverCount** Servers
]
$addTimestamp
$color[#ff0000]
`
})

//Bot Variables

bot.variables({
defaultimage: "https://i.imgur.com/ortcNzg.jpg",
topggvote: "https://top.gg/bot/997744573709287436/vote",
dblvote: "https://discordbotlist.com/bots/fqcxn/upvote",
versionid: "1.7", 
bumps: 0,
bumpdescription: "",
embedcolor: "2f3136",
configfunzone: "no",
})

//Bot Status

bot.status({
	text: "/help",
    type: "PLAYING",
    time: 120,
})

bot.status({
	text: "bot.fqcxn.com",
    type: "PLAYING",
    time: 60,
})

//Command Loaders

const loader = new aoijs.LoadCommands(bot)

const voice = new Voice(
  bot,
  {
    cache: {
      cacheType: "Memory",
      enabled: true,
    },
  },
  false,
);

voice.onTrackStart();

loader.load(bot.cmd,"./commands/")
loader.load(voice.cmd, "./commands/Voice/")
bot.onInteractionCreate()

//Bot Ready Command Slash Command Creator

bot.readyCommand({//Bot Utilities
    channel: "",
    code: `
$createApplicationCommand[1030885679867121735;updatecommands;Command Updater;true]
$createApplicationCommand[global;help;Fqcxn Help Menu;true]
$createApplicationCommand[global;vote;Vote Me!;true]
$createApplicationCommand[global;invite;Invite Me To Your Server!;true]
$createApplicationCommand[global;terms;View Bot Terms Of Service;true]
$createApplicationCommand[global;commands;View All Possible Commands;true]
$createApplicationCommand[global;bot-info;View Bot's Status;true]
$createApplicationCommand[global;configure;Bot Server Configuration;true]
`
})

bot.readyCommand({//Bump System
    channel: "",
    code: `
$createApplicationCommand[global;bump;Bump Your Server;true]

$createApplicationCommand[global;bump-description;Set Bump Description;true;slash;[
{
"name" : "description",
"description" : "description",
"type" : "STRING",
"required" : true
}
]]
`
})
