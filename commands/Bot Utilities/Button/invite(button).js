module.exports = {
name: "invite",
type: 'interaction',
prototype: 'button',
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
{button:Invite Me!:5:$getBotInvite[admin]}
}
;;everyone;yes]
`
}