var User = require('./User');//
var Teacher = require('./Teacher');

var user = new User(1, 'Leo', 25);
user.enter();

var teacher = new Teacher(2, 'Leo.Chen', 25);
teacher.enter();
teacher.teach();