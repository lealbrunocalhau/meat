"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "bruno@gmail.com": new User('bruno@gmail.com', 'Bruno', 'bruno01'),
    "rodrigo@gmail.com": new User('rodrigo@gmail.com', 'Rodrigo', 'rodrigo01')
};
