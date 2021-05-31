function LoginCtrl( $scope, mainService) {
let vm = this;


 $scope.LoginUser=function() {  console.log('iside f login');

 let user = {           
     email:$scope.email,
     password:$scope.password
  }
   console.log('user',user);
   value = 'user/login'
   mainService.add(value, user).then(function(response) {   
    // vm.login = response.data;  
    if(response!=undefined){
        document.getElementById("loginmsg").innerHTML = 'Login Successfull';  
        $scope.a = true;
    }
    else{
    $scope.a = false;   
    document.getElementById("loginmsg").innerHTML = 'Invalid email id or password';  
    }
     
   })  

  clearData();
}

$scope.check = function(event){
    document.getElementById("loginmsg").innerHTML += 'hi';
}

function clearData() {        
 $scope.name='';
 $scope.email='';
 $scope.password='';
 $scope.password2='';
} 

}

 app.component('login',{
     templateUrl: 'components/login/login.html',
     controller: LoginCtrl,
     controllerAs: 'vm',
 })
 


 
 