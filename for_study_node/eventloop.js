const fs = require('node:fs');

// Promise.resolve('promise').then(console.log)
// setTimeout(() => console.log('setTimeout'), 0);
// setImmediate(() => console.log('setImmediate'));
// process.nextTick(() => console.log('nextTick'));

fs.readFile('./index.html', 'utf-8', () => {
  console.log('readFile------------------------------------------------')
  setTimeout(() => console.log('setTimeout in fs'), 0);
  setImmediate(() => {
    console.log('setImmediate in fs')
    process.exit(0)
  });
  process.nextTick(() => console.log('nextTick in fs'));
})

console.log('top level code')
