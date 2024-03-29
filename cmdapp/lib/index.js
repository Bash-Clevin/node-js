import createTask from "./task.js";
import { createInterface } from "readline";
import chalk from "chalk";
import promisedQuestion from "./promisedQuestion.js";
import getOptions from "./getOptions.js";
import summary from "./summary.js";
import handleCancel from "./handleCancel.js";

const { amount, level } = getOptions();
const operations = ["+", "-", "*", "/"];
const tasks = [];

operations.forEach((operation) => {
  for (let i = 0; i < amount; i++) {
    tasks.push(createTask(operation, level));
  }
});

const rl = createInterface({ input: process.stdin, output: process.stdout });

handleCancel(rl, tasks);

async function question(index) {
  const result = await promisedQuestion(`${tasks[index].task}`, rl);

  tasks[index].input = parseInt(result);

  if (tasks[index].input === tasks[index].result) {
    console.log(chalk.bold.green(`Correct!`));
  } else {
    console.log(chalk.bold.red("Wrong"));
  }
  if (++index < tasks.length) {
    question(index);
  } else {
    console.log(summary(tasks));
    rl.close();
  }
}

question(0);
