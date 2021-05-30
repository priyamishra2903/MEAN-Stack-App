function RegisterUser($scope, $uibModal, mainService) {

    $scope.RegisterUser=function() {  console.log('indhfhf');

        let user = {           
            name:$scope.name,
            email:$scope.email,
            password:$scope.password,
            password2:$scope.password2
         }
          console.log('user',user);
          value = 'user/register'
         mainService.add(value, user); 
        clearData();
    }
    function clearData() {        
        $scope.name='';
        $scope.email='';
        $scope.password='';
        $scope.password2='';
    } 
}
 
 app.component('register',{
     templateUrl: 'components/register/register.html',
     controller: RegisterUser,
     controllerAs: 'pc',
 })
 
