// const tmi = require("tmi.js");
// const say = require("say");

// let i = 0;

// const options = {
//   options: {
//     debug: true
//   },
//   connection: {
//     cluster: "aws",
//     reconnect: true
//   },
//   identity: {
//     username: "botmarcin1",
//     password: "oauth:jrnlkrai0snu3rtvocpr1ae8kxsh56"
//   },
//   channels: ["h2p_gucio"]
// };

// const client = new tmi.client(options);

// client.connect();

// // client.on("connected", (address, port) => {
// //   client.action("lesnik_jan", "hello");
// // });

// client.on("chat", function(channel, user, message, self) {
//   if (i % 20 === 0) say.speak(message);
//   i++;
// });
