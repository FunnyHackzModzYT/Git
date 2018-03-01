var respawn = require('respawn')

var monitor = respawn(['index.js'], {
name: 'test', // 
env: {ENV_VAR:'test'},
cwd: '.', // 
maxRestarts:-1, // how many restarts are allowed within 60s // or -1 for infinite restarts 
sleep:1000, // time to sleep between restarts, 
kill:3000, // wait 30s before force killing after stopping 
//stdio: [...], 
fork: true  
}) 
monitor.start() 