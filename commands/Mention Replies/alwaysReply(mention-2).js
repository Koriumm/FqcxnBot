module.exports = {
name: "$alwaysExecute",
code:`
$reply
$title[<:question:1062943322773127238> Fqcxn Help Menu]
$description[
<:globalwhite:1062946477225299978> Website:
**https://fqcxnbot.tk/ **

<:utilitywhite:1062946482900176976> Support Server:
**https://discord.gg/JvBHNChCBk **]
$thumbnail[$userAvatar[$clientID]]
$color[$getVar[embedcolor]]

$onlyIfMessageContains[$message;<@!$clientID>;]
`
}