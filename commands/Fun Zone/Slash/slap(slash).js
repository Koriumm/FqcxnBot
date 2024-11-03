module.exports = {
name: "slap",
type: 'interaction',
prototype: 'slash',
$if: "v5",
code: `
$interactionReply[;{newEmbed:
{description:**<@$authorID> Slapped <@$message>**}
{image:$randomText[
https://media.tenor.com/Ws6Dm1ZW_vMAAAAC/girl-slap.gif;
https://media.tenor.com/eU5H6GbVjrcAAAAC/slap-jjk.gif;
https://media.tenor.com/mwTjdw-dHg8AAAAC/slap-bet-chisa-iori.gif;
https://media.tenor.com/E3OW-MYYum0AAAAC/no-angry.gif;
https://media.tenor.com/5jBuDXkDsjYAAAAC/slap.gif]}
{color:$getVar[embedcolor]}}
;;;everyone;no]
`
}