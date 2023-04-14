import * as core from "@actions/core";
import fetch from "node-fetch";

async function run(): Promise<void> {
  try {
    const url: string = core.getInput("url");
    core.info(url);
    const response = await fetch(url);
    const text = await response.text();
    core.info("-------" + text);
    core.setOutput("time", new Date().toTimeString());
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
