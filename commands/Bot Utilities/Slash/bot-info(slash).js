module.exports = {
name: "bot-info",
type: 'interaction',
prototype: 'slash',
code: `
$interactionReply[;
{newEmbed:
{title:<:information:1062943783773294592> Bot Info}
{description:<:user:1062937576647950387> Users: **$allMembersCount**

<:status:1062927392072548432> Servers: **$serverCount**

<:CPU:1062937180395286608> CPU Usage: **$cpu%**

<:ram:1062941584322211870> Ram: **$truncate[$ram] MB**

<a:latency:1062937439901077534> Ping: **$ping MS**

<:clock:1062942551700688988> Uptime: **$uptime**

<:verified:1062942232740626482> Version ID: **$getVar[versionid]**}
{thumbnail:$userAvatar[$clientID]}
{color:$getVar[embedcolor]}
}
;;;everyone;no]
`
}