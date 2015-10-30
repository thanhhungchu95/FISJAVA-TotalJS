exports.install = function() {
    framework.route('/', view_login);
};

function view_login() {
    var self = this;
    self.view('login');
}