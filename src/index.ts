#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs-extra";
import path from "path";

const program = new Command();

program
  .name("nxtcode")
  .description("Architecture driven code engine")
  .version("0.1.0");

program
  .command("init")
  .description("Initialize NxtCode in a project")
  .action(() => {
    const base = path.join(process.cwd(), ".nxtcode");

    fs.ensureDirSync(base);
    fs.ensureDirSync(path.join(base, "workflows"));

    fs.writeFileSync(
      path.join(base, "architecture.dsl"),
      "# Define your architecture here\n",
    );

    fs.writeFileSync(
      path.join(base, "workflows/generate.yml"),
      "name: generate\non: save\n",
    );

    console.log("NxtCode initialized successfully.");
  });

program
  .command("scan")
  .description("Scan project architecture")
  .action(() => {
    console.log("Scanning project...");
  });

program
  .command("generate")
  .description("Generate code from architecture DSL")
  .action(() => {
    console.log("Generating code...");
  });

program.parse(process.argv);
