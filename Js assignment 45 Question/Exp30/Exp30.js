let userNames = ["bilal","Admin","asad"];

for (let i = 0; i < userNames.length; i++) {
  if (userNames[i] == "Admin") {
    console.log(`Hello ${userNames[i]}, see status report`);
  } else {
    console.log(`Hello ${userNames[i]}, Thank you for Logging`);
  }
}