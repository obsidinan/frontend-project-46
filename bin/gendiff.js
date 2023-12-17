#!/usr/bin/env node
import { Command } from 'commander';
import * as index from '../src/index';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(index.getPath(filepath1));
    console.log(index.getPath(filepath2));
  });

program.parse();
