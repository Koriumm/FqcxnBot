module.exports = {
name: "bump",
type: 'interaction',
prototype: 'slash',
$if: "v4",
code: `
$interactionReply[

$channelSendMessage[1059233342953898095;
$get[invite]
$let[invite;https://$get[b].$get[a]/$replaceText[$replaceText[$get[ok];';]; ;]]
$let[a;gg]
$let[b;discord]
$let[ok;$advancedTextSplit[$get[inv];:;3;,;1]]
$let[inv;$djsEval[message.channel.createInvite({maxAge:0,maxUses:0});yes]]
{newEmbed:
{title:$serverName Just Bumped!}
{description:$getServerVar[bumpdescription]
Owner: **$userTag[$ownerID]**
Members: **$membersCount**
Created At: **$creationDate[$guildID;date]**}
{thumbnail:$serverIcon}
{image:$getVar[defaultimage]}
{color:ff0000}
;no]

$setServerVar[bumps;$math[$getServerVar[bumps]+1]]

;{newEmbed:
{title:Server Bumped!}
{description:
The Server **$serverName** Has Been Bumped!

Bumps: **$math[$getServerVar[bumps]+1]**
}
{thumbnail:$serverIcon}
{color:$getVar[embedcolor]}
}

;
{actionRow:
{button:Invite:5:https\\://discord.com/api/oauth2/authorize?client_id=997744573709287436&permissions=414464724033&scope=bot%20applications.commands}
{button:See Bumps:5:https\\://discord.gg/VCY44QYWAV}
}
;;everyone;no]

$if[$authorID!=$botOwnerID]

$serverCooldown[30m;{
"content": "You already have bumped this server. Please check back in **%time%** to bump the server again.",
"options": {
"interaction": true
}
}]

$else

$endif

$onlyBotPerms[createinvite;{
"content": "Error. The bot doesn't have the permission **CREATEINVITE**. Please give the bot the permission to create the invite for this command to work.",
"options": {
"interaction": true
}
}]

$suppressErrors[{
"content": "An unexpected error has occured. Please contact support team.",
"options": {
"interaction": true
}
}]

$onlyIf[$guildID!=;{
"content": "This Command Can Only Be Executed In Servers.",
"options": {
"interaction": true
}
}]
`
}