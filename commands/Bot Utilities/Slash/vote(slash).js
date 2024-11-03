module.exports = {
name: "vote",
type: 'interaction',
prototype: 'slash',
$if: "v5",
code: `
$interactionReply[;
{newEmbed:
{title:Vote Me!}
{description:
Vote the bot! Voting the bot lets us know who uses our bot the most. Voting will get you rewarded with some sweet perks!

__**Rewards**__
> Access To Voter Commands
> 
> More To Be Added:tm:
}
{footer:Thank You For Voting Me!}
{thumbnail:$userAvatar[$clientID]}
{color:$getVar[embedcolor]}
}
;
{actionRow:
{button:TOPGG:5:$getVar[topggvote]}
{button:DiscordBotList:5:$getVar[dblvote]}
}
;;everyone;no]
`
}