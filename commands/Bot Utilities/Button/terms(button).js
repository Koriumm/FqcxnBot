module.exports = {
name: "terms",
type: 'interaction',
prototype: 'button',
$if: "v5",
code: `
$interactionReply[;
{newEmbed:
{title:Fqcxn Terms Of Service}
{description:
We Have Our Terms Of Service On Our Website
}
{thumbnail:$userAvatar[$clientID]}
{color:$getVar[embedcolor]}
}
;
{actionRow:
{button:Website:5:https\\://fqcxnbot.tk/pages/termsandprivacy}
}
;;everyone;yes]
`
}