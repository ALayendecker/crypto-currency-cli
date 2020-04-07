const program = require("commander");

program
  .command("set")
  .description("set API key -- Get at https://nomics.com")
  .action(() => console.log("Hello from set"));

program.parse(process.argv);
