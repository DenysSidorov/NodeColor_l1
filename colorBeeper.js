var colout = require('colout');
var beep = require('beepbeep');


beep(3);

colout.set('error', 'red')
    .set('warning', 'yellow')
    .set('ok', 'green')
    .set('myMethod', 'cyan');

colout.error('HELLO NODE JS').endl();
colout.warning('THIS IS VERY COOL LANGUAGE').endl();
colout.ok('VERY SIMPLE SERVER').endl();
colout.myMethod('USE JS ON SERVER SIDE').endl();