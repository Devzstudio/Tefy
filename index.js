#!/usr/bin/env node

const yargs = require('yargs');
const { argv } = yargs;
const fs = require('fs');
const chalk = require('chalk');

yargs
	.usage('Usage: $0 <command> [options]')
	.example(
		'$0 --template="./templatest/sample.tsx"  --output="components/Form/"',
		'Write sample.tsx with strings replaced to output components directory'
	)
	.nargs('template', 1)
	.nargs('output', 1)
	.describe('template', 'Load a template file')
	.describe('output', 'Ouput file location')
	.demandOption(['template', 'output'])
	.help('h')
	.alias('h', 'help')
	.epilog('Powered by Devzstudio').argv;

const startProcess = async () => {
	await fs.readFile(argv.template, 'utf8', async function (err, data) {
		if (err) throw err;

		const ignoreCommandsList = ['template', 'output'];
		let fileContents = await data;

		Object.keys(argv).map((key) => {
			if (!ignoreCommandsList.includes(key)) {
				const slug = `{{${key}}}`;
				const regEx = new RegExp(slug, 'g');
				fileContents = fileContents.replace(regEx, argv[key]);
			}
		});

		await fs.writeFile(argv.output, fileContents, function (err) {
			if (err) {
				return console.log(err);
			}
			chalk.blue('The file was saved!');
		});
	});
};

startProcess();
