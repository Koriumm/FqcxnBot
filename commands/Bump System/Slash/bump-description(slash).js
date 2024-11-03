module.exports = {
name: "bump-description",
type: 'interaction',
prototype: 'slash',
$if: "v5",
code: `
$interactionReply[

$setServerVar[bumpdescription;\`\`\`diff
- $message
\`\`\`]

;
{newEmbed:
{title:Bump Description Set}
{description:You server bump description has been set successfully!
\`\`\`diff
- $message
\`\`\`}
{thumbnail:$serverIcon}
{color:$getVar[embedcolor]}
}
;;;everyone;no]

$onlyPerms[admin;{
"content": "You need the permission Administrator to run this command.",
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