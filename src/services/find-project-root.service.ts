import { access, realpath } from "fs-extra";
import { resolve } from "path";

export async function findProjectRoot(): Promise<string | null> {
  const file = await access('aispec.json')
    .then(() => 'aispec.json')
    .catch(() =>
      access('aispec.yml')
        .then(() => 'aispec.yml')
        .catch(() => null),
    );

  if (!file) {
    return null;
  }

  const path = await realpath(file);
  return resolve(path, '..');
}

export default findProjectRoot;