module.exports = {
name: "kill",
$if: "v4",
code: `
$if[$authorID!=$botOwnerID]

$else

$killClient

$endif
`
}