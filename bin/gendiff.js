#!/usr/bin/env node
import { Command } from 'commander';
import getDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(getDiff(filepath1, filepath2));
  });

program.parse();
