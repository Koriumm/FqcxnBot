module.exports = {
name: "invite",
type: 'interaction',
prototype: 'slash',
$if: "v5",
code: `
$interactionReply[;
{newEmbed:
{title:Add Fqcxn To Your Server!}
{description:
> Want to invite me to your server?
> Click The Button Below To Add Me!
}
{footer:Thank You For Inviting Me!}
{thumbnail:$userAvatar[$clientID]}
{color:$getVar[embedcolor]}
}
;
{actionRow:
{button:Invite Me!:5:https\\://discord.com/api/oauth2/authorize?client_id=997744573709287436&permissions=414464724033&scope=bot%20applications.commands}
}
;;everyone;no]
`
}