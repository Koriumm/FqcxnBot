module.exports = {
name: "updatecommands",
type: 'interaction',
prototype: 'slash',
$if: "v4",
code: `
$if[$authorID!=$botOwnerID]

$interactionReply[Nope.]

$else
$interactionReply[;{newEmbed:
{title:Commands Updated}
{description:> Commands updated.
> Commands should be up to date.}
{footer:Developer - $authorID}
{color:FF0000}
}
;;;everyone;no]

$updateCommands

$endif
`
}