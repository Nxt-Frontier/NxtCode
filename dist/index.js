#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const program = new commander_1.Command();
program
    .name("nxtcode")
    .description("Architecture driven code engine")
    .version("0.1.0");
program
    .command("init")
    .description("Initialize NxtCode in a project")
    .action(() => {
    const base = path_1.default.join(process.cwd(), ".nxtcode");
    fs_extra_1.default.ensureDirSync(base);
    fs_extra_1.default.ensureDirSync(path_1.default.join(base, "workflows"));
    fs_extra_1.default.writeFileSync(path_1.default.join(base, "architecture.dsl"), "# Define your architecture here\n");
    fs_extra_1.default.writeFileSync(path_1.default.join(base, "workflows/generate.yml"), "name: generate\non: save\n");
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
