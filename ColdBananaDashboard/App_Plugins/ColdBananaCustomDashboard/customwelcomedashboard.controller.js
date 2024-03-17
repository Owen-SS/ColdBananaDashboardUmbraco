angular.module("umbraco").controller("CustomWelcomeDashboardController", function ($scope) {
    var vm = this;
    alert("hello world Owen");
});

angular.module("umbraco").controller("CustomWelcomeDashboardController", function ($scope, userService) {
    var vm = this;
    vm.UserName = "guest";

    var user = userService.getCurrentUser().then(function (user) {
        console.log(user);
        vm.UserName = user.name;
    });
});