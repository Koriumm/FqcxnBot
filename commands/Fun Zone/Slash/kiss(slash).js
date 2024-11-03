module.exports = {
name: "kiss",
type: 'interaction',
prototype: 'slash',
$if: "v5",
code: `
$interactionReply[;{newEmbed:
{description:**<@$authorID> Kissed <@$message>**}
{image:$randomText[
https://media.tenor.com/jnndDmOm5wMAAAAC/kiss.gif;
https://media.tenor.com/dn_KuOESmUYAAAAC/engage-kiss-anime-kiss.gif;
https://media.tenor.com/vtOmnXkckscAAAAC/kiss.gif;
https://media.tenor.com/mNPxG38pPV0AAAAC/kiss-love.gif;
https://media.tenor.com/Bw0OLA1NefUAAAAC/anime-chuunibyou.gif]}
{color:$getVar[embedcolor]}}
;;;everyone;no]
`
}