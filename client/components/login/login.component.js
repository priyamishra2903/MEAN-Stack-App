function LoginCtrl( $scope, mainService) {


$scope.LoginUser=function() {  console.log('iside f login');
 $scope.LoginUser=function() {  console.log('iside f login');

 let user = {           

     email:$scope.email,
     password:$scope.password
  }
   console.log('user',user);
   value = 'user/login'
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




  
}
 
 app.component('login',{
     templateUrl: 'components/login/login.html',
     controller: LoginCtrl,
     controllerAs: 'vm',
 })
 


 
 