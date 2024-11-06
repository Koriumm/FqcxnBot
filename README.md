<h1 align="center">Fqcxn Bot</h1>
<p align="center">
    <img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js"/>
    <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript"/>
    <img src="https://img.shields.io/badge/-npm-CB3837?style=flat&logo=npm&logoColor=white" alt="npm"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/38287710-1819-48f1-b422-f8a353dde876"></img>
</p>
<p align="center">
    <b>FqcxnBot</b> is an all-in-one (AIO) Discord bot designed for server management. It includes features such as moderation tools, admin utilities, welcoming system, bump system for advertising, and various fun and engaging features. The bot is developed and operates using AOI.Js version 5.5.5, a Node.js string-based package for managing Discord bots.
</p>

## 📖 | Required Dependencies

- [Node.Js 16.6.0](https://nodejs.org/en/download/)

## ➕ | Installation

To get started with FqcxnBot, follow these steps:

1. **Clone the repository**  
Clone the repository to your local machine:
```bash
git clone https://github.com/Koriumm/FqcxnBot.git
```
2. **Install Dependencies**  
Open a new terminal and install dependencies using the package manager.
```bash
npm install
```

3. **Change Token**  
In your index.js file, look for [TOKEN] and replace TOKEN with your Discord bot token. You can obtain your Discord bot token from https://discord.dev/.
```js
const bot = new aoijs.Bot({
    sharding: true,
    shardAmount: 2,
	token: "[TOKEN]",
	prefix: ["."],
	intents: "all"
})
```

4. **Run the Bot**  
Run the bot using this command in your terminal.
```bash
node index.js
```

## 📸 | Screenshots

<img src="https://github.com/user-attachments/assets/45661798-0625-490b-bb03-445c92d33bff"></img> <img src="https://github.com/user-attachments/assets/396dc4bc-4856-4ecc-af52-bd0e8fd3b86c"></img>

## 🆘 | Support
Support for this Discord bot has been stopped. All support will not be available. This bot has shut down due to financial issues.

## ⚠ | Disclaimer
This bot and its functionality does not work with the latest AOI.Js version. Only AOI.Js version 5.5.5 is compatible with this system.

## 🤝 | Contributors

<a href="https://github.com/Koriumm/FqcxnBot/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=Koriumm/FqcxnBot" />
</a>

## License and Copyright
Released under the [MIT](https://mit-license.org/) license.

This project utilizes [Discord API](https://discord.dev/), [Discord.Js](https://discord.js.org/), [AOI.Js](https://aoi.js.org/), [AOI.Js Music](https://github.com/aoijs/aoi.music), [AOI.Js Panel](https://www.npmjs.com/package/@akarui/aoi.panel), and [CanvaCord](https://www.npmjs.com/package/canvacord).

© 2024 Koriumm. All rights reserved.
