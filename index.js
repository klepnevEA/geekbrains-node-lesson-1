const ansi = require('ansi');

const cursor = ansi(process.stdout);
cursor.red().bg.green().write('Hello!').reset().bg.reset().write('\n');
cursor.grey().bg.hex('#ff00ff').write('World!').reset().bg.reset().write('\n');
