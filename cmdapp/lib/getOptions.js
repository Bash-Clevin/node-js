import { program } from "commander";
export default (levelDefault = 2, amountDefault = 4) => {
  program
    .version("1.0.0")
    .option(
      "-l, --level <n>",
      "Difficulty level of tasks (1-3)",
      parseInt,
      levelDefault
    )
    .option("-a, --amount <n>", "Number of tasks", parseInt, amountDefault)
    .parse(process.argv);

  const options = program.opts();

  return {
    level: options.level,
    amount: options.amount,
  };
};

// function getOption(optionName) {
//   return process.argv.find((element) => element.includes(optionName));
// }

// function getOptionValue(option, defaultValue) {
//   if (option) {
//     const [, value] = option.split("=");
//     return parseInt(value, 10);
//   }
//   return defaultValue;
// }
