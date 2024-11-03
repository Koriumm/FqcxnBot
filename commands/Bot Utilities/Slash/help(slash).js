module.exports = {
name: "help",
type: 'interaction',
prototype: 'slash',
$if: "v5",
code: `
$interactionReply[;
{newEmbed:
{title:<:question:1062943322773127238> Fqcxn Help Menu}
{description:
<:globalwhite:1062946477225299978> Website:
**https://fqcxnbot.tk/ **

<:utilitywhite:1062946482900176976> Support Server:
**https://discord.gg/JvBHNChCBk **
}
{thumbnail:$userAvatar[$clientID]}
{color:$getVar[embedcolor]}
};
{actionRow:
{button:Vote:1:vote:no:<:up:1062945153712672808>}
{button:Invite Me:1:invite:no:🔗}
{button:Terms Of Service:1:terms:no:<:policy:1062945956087218229>}
}
;;everyone;no]
`
}