import yaml from 'js-yaml';
import fs from 'fs-extra';
import findProjectRoot from './services/find-project-root.service';

export const getField = async (fieldName: string, format: 'json' | 'yml' | 'yaml') => {
  const projectRoot = await findProjectRoot();
  const filePath = `${projectRoot}/aispec.${format}`;

  if (!fs.existsSync(filePath)) {
    console.error(`aispec.${format} file not found in the project root.`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const data = format === 'json' ? JSON.parse(content) : yaml.load(content);

  return data[fieldName];
};

export const setField = async (fieldName: string, value: string, format: 'json' | 'yml' | 'yaml') => {
  const projectRoot = await findProjectRoot();
  const filePath = `${projectRoot}/aispec.${format}`;

  if (!fs.existsSync(filePath)) {
    console.error(`aispec.${format} file not found in the project root.`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const data = format === 'json' ? JSON.parse(content) : yaml.load(content);

  data[fieldName] = value;
  const updatedContent = format === 'json' ? JSON.stringify(data, null, 2) : yaml.dump(data);
  fs.writeFileSync(filePath, updatedContent, 'utf-8');
};
