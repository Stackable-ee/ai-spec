import { Command } from 'commander';
import { pathExists } from 'fs-extra';
import { join } from 'path';
import createSpecFile from '../services/create-spec-file.service';

// TODO: Filename by version
const SPEC_FILE_NAME_BY_VERSION = {
  '0.1.0': 'ai-spec',
  // TODO: TBI
  '0.2.0': 'aispec',
} as const

const initCommand = new Command()
  .command('init')
  .description('Create an AI spec in the given project.')
  .option('-f, --format <format>', 'Choose the file format: json | yml | yaml', 'json')
  .option('-p, --path <path>', 'Path to the directory where the AI spec will be created', process.cwd())
  .action(async (options) => {
    const { path: specPath, format } = options;
    const fileName = [SPEC_FILE_NAME_BY_VERSION['0.1.0'], format].join('.');
    const specFilePath = join(specPath, fileName);

    if (await pathExists(specFilePath)) {
      console.log(`File ${specFilePath} already exists.`);
      return;
    }

    await createSpecFile(specFilePath, format);

    console.log(`Created AI spec file: ${specFilePath}`);
  });

export default initCommand;