const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
 name: "owner",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "Modified by Shahadat",
 description: "Display bot owner's information",
 commandCategory: "Info",
 usages: "",
 cooldowns: 5,
 dependencies: {
 request: "",
 "fs-extra": "",
 axios: ""
 }
};

module.exports.run = async function ({ api, event }) {
 const imageUrl = "https://www.facebook.com/farhad018898?mibextid=ZbWKwL";
 const path = __dirname + "/cache/owner.png";

 request(imageUrl)
 .pipe(fs.createWriteStream(path))
 .on("close", () => {
 api.sendMessage({
 body:
`🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟

👑 𝗡𝗮𝗺𝗲: 𝐅𝐚𝐫𝐡𝐚𝐝 𝐔𝐝𝐝𝐢𝐧😘
😻 𝗔𝗱𝗱𝗿𝗲𝘀𝘀: মেয়েদের মনে🙈
💼 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻: মেয়েদের মন জয় করা😍

🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸  : Md 𝐅𝐚𝐫𝐡𝐚𝐝 𝐔𝐝𝐝𝐢𝐧
💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿: https://m.me/farhad018898?source=qr_link_share
📺 𝗬𝗼𝘂𝗧𝘂𝗯𝗲: farhad.vai2.0
📸 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺: Farhad_vai2.0
📱 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽: 01848019304
🎵 𝗧𝗶𝗸𝗧𝗼𝗸: Farhad vai2.0
👻 𝗦𝗻𝗮𝗽𝗰𝗵𝗮𝘁: তোদের মতো কালা নাকি ফিল্টার লাগামু🤭

🤖 𝗕𝗢𝗧 𝗕𝗬: —͟͟͞͞𝐕𝐨𝐢𝐜𝐞 𝐒𝐭𝐚𝐭𝐢𝐨𝐧 𝐁𝐨𝐭
`,
 attachment: fs.createReadStream(path)
 }, event.threadID, () => fs.unlinkSync(path));
 });
};
