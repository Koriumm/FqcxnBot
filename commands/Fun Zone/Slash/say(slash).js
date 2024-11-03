module.exports = {
name: "say",
type: 'interaction',
prototype: 'slash',
$if: "v4",
code: `
$sendMessage[$message]

$interactionReply[I Have Announced \`$message\`;;;;everyone;yes]

$if[$authorID==$botOwnerID]

$else

$onlyPerms[managemessages;{
"content": "You need \`manage-messages\` permission to use this command.",
"options": {
"interaction": true
}
}]

$endif
`
}