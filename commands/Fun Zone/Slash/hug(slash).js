module.exports = {
name: "hug",
type: 'interaction',
prototype: 'slash',
$if: "v5",
code: `
$interactionReply[;{newEmbed:
{description:**<@$authorID> Hugged <@$message>**}
{image:$randomText[
https://media.tenor.com/J7eGDvGeP9IAAAAC/enage-kiss-anime-hug.gif;
https://media.tenor.com/G_IvONY8EFgAAAAC/aharen-san-anime-hug.gif;
https://media.tenor.com/hacbVpDut3sAAAAC/hug.gif;
https://media.tenor.com/rTKIBe2qtxsAAAAC/anime-couples.gif;
https://media.tenor.com/m_bbfF_KS-UAAAAC/engage-kiss-anime-hug.gif]}
{color:$getVar[embedcolor]}}
;;;everyone;no]
`
}