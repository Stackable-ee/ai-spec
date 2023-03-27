import { access, readFile, writeFile } from "fs-extra";
import { dump, load } from "js-yaml";
import { resolve } from "path";
import findProjectRoot from "./find-project-root.service";


export async function createOrUpdateSpec(format: 'json' | 'yml' | 'yaml'): Promise<void> {
  const rootDir = await findProjectRoot();
  if (!rootDir) {
    throw new Error('Unable to find project root directory.');
  }

  const specPath = resolve(rootDir, `aispec.${format}`);
  const specExists = await access(specPath).then(() => true).catch(() => false);

  let spec: any = {};
  if (specExists) {
    const specFile = await readFile(specPath, 'utf-8');
    if (format === 'json') {
      spec = JSON.parse(specFile);
    } else {
      spec = load(specFile);
    }
  }

  // Prompt user for fields to add/update

  // Write updated spec to file
  let specFileContents = '';
  if (format === 'json') {
    specFileContents = JSON.stringify(spec, null, 2);
  } else {
    specFileContents = dump(spec);
  }
  await writeFile(specPath, specFileContents);
}

export default createOrUpdateSpec;
