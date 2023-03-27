import { Command, Option } from 'commander';

//type QuestionCollection<T> = {
//  type: 'input',
//  name: string,
//  message: string,
//}

//export const fieldNameQuestion: QuestionCollection<Answers> = {
//  type: 'input',
//  name: 'field_name',
//  message: 'Enter the field name:',
//};

//export const fieldValueQuestion: QuestionCollection<Answers> = {
//  type: 'input',
//  name: 'value',
//  message: 'Enter the value:',
//};

//export const confirmChangeQuestion: QuestionCollection<Answers> = {
//  type: 'confirm',
//  name: 'confirm',
//  message: 'Would you like to change the value?',
//  default: false,
//};

export interface InitAnswers {
  format: string;
}

export interface AddAnswers {
  field: string;
  value: string;
}

export interface SetAnswers {
  field: string;
  value: string;
}

export const formatOption = new Option('-f, --format <format>', 'specify the file format')
  .choices(['json', 'yml', 'yaml']);

export const fieldOption = new Option('-f, --field <field>', 'specify the field name');
export const valueOption = new Option('-v, --value <value>', 'specify the field value');

//export const formatQuestion: Choice[] = [
export const formatQuestion: any[] = [
  { name: 'JSON (.json)', value: 'json' },
  { name: 'YAML (.yml)', value: 'yml' },
  { name: 'YAML (.yaml)', value: 'yaml' },
];

export const fieldNameQuestion: Command = new Command()
  .addOption(fieldOption)
  .description('choose the field to add or set');

export const fieldValueQuestion: Command = new Command()
  .addOption(valueOption)
  .description('choose the value for the field');

export const confirmChangeQuestion: Command = new Command()
  .addOption(new Option('-y, --yes', 'confirm all changes'))
  .description('confirm all changes');
