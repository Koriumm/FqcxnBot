module.exports = {
name: "eval",
$if: "v4",
code: `
$if[$authorID!=$botOwnerID]

$else

$eval[$message]

$endif
`
}