#!/usr/bin/env node
import { Command } from 'commander';
import initCommand from './commands/init.command';

const program = new Command();

program
  .version('0.1.0')
  .description('A command line tool for managing AI project specifications.');

program.addCommand(initCommand);
//program.addCommand(addCommand);
//program.addCommand(setCommand);

program.parse(process.argv);
