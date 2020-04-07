const KeyManager = require("../lib/KeyManager");
const inquirer = require("inquirer");
const colors = require("colors");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key".green + "https://nomics.com",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("API Key Set".blue);
    }

    //console.log("Hello from set");
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      console.log("Current API Key: ", key.yellow);
      return key;
    } catch (err) {
      console.error(err.message.red);
    }
    //console.log("Hello from show");
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.deleteKey();
      console.log("Key has been removed".red);
      return key;
    } catch (err) {
      console.error(err.message.red);
    }
    //console.log("Hello from remove");
  },
};

module.exports = key;
