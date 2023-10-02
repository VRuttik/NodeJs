import chalk from 'chalk';
import validator from 'validator';

//console.log(chalk.green.underline.inverse('Success!!'));

const res = validator.isEmail("vruttik@vruttik.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

