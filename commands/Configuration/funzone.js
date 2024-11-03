module.exports = {
name: "funzonemenu",
type: 'interaction',
prototype: 'selectMenu',
code: `
$interactionEdit[HI HI;;;;everyone]

$onlyIf[$interactionData[values[0]]==0;]
`
}