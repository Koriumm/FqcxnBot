module.exports = {
name: "configure",
type: 'interaction',
prototype: 'slash',
code: `
$interactionReply[;
{newEmbed:
{title:Server Configuration}
{description:Set up your server with this configuration panel. You can enable and disable modules.}
{thumbnail:$userAvatar[$clientID]}
{color:$getVar[embedcolor]}
}
;
{actionRow:
{selectMenu:configuremenu::1:1:no:
{selectMenuOptions:Fun Zone:funzoneconfig:Fun Zone Configuration:false}
{selectMenuOptions:ERROR:ERRORID:ERROR:false}
}
}
;;everyone;yes]

$onlyPerms[admin;{
"content": "You Are Not An Administrator.",
"options": {
"interaction": true
}
}]
`
}