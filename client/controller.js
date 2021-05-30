
var app= angular.module("mainApp", ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngSanitize']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
     .state('viewschools', {
        url : '/viewSchools',
        template : '<schools-list></schools-list>'
      })
      .state('addschools', {
        url : '/addSchools',
        template : '<add-schools></add-schools>'
      })
      .state('viewstudents', {
        url : '/viewStudents',
        template : '<students-list></students-list>'
      })
      .state('addstudents', {
        url : '/addStudents',
        template : '<add-students></add-students>'
      })
      .state('analytics', {
        url : '/analytics',
        template : '<forms></forms>'
      })
      .state('chatdata', {
        url : '/chats',
        template : '<chats></chats>'
      })
      .state('signup', {
        url : '/register',
        template : '<register></register>'
      })
      .state('login', {
        url : '/login',
        template : '<login></login>'
      })
      .state('dashboard', {
        url : '/dashboard',
        template : '<dashboard></dashboard>'
      })
})

app.controller("CRUD", function($scope, $uibModal) {

  $scope.isCollapsed = false;
  let pc = this;
  pc.hello ='hello';
  // pc.fruits = ['aa', 'aa', 'dhdh'];
  // pc.open = function (size) {
  //   let modalInstance = $uibModal.open({
  //     animation: true,
  //     ariaLabelledBy: 'modal-title',
  //     ariaDescribedBy: 'modal-body',
      
  //     templateUrl: 'components/login/login.html',
  //     controller: 'ModalInstanceCtrl',
  //     controllerAs: 'pc',
  //     size: size,
  //     resolve: {
  //       data: function () {
  //         return pc.data;
  //       }
  //     }
  //   });

  //   modalInstance.result.then(function () {
  //   });
  // };

})

// app.controller('ModalInstanceCtrl', function ($uibModalInstance, data,  $scope, mainService) {
//   let pc = this;
//   pc.data = data;
//  pc.hello = 'hellooo'

//  $scope.LoginUser=function() {  console.log('iside f login');

//  let user = {           

//      email:$scope.email,
//      password:$scope.password
//   }
//    console.log('user',user);
//    value = 'user/login'
//   mainService.add(value, user); 
//  clearData();
// }

// function clearData() {        
//  $scope.name='';
//  $scope.email='';
//  $scope.password='';
//  $scope.password2='';
// } 

  
//   pc.ok = function () {
//     //{...}
//     $uibModalInstance.close();
//   };

//   pc.cancel = function () {
//     //{...}
//     $uibModalInstance.dismiss('cancel');
//   };
// });

