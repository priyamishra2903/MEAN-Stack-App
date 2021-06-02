

function RegisterUser($scope, $uibModal, mainService) {
    let vm = this;

    $scope.RegisterUser=function() {  console.log('indhfhf');

        let user = {           
            name:$scope.name,
            email:$scope.email,
            password:$scope.password,
            password2:$scope.password2
         }
          console.log('user',user);
          value = 'user/register'
         mainService.add(value, user).then(function(response) {   
            vm.login = response.data;  
            if(response.data.length!=null){
                document.getElementById("rgistermsg").innerHTML = 'User Registered Successfull';             
            }
            else{
               console.log(response.data, 'error');

            $scope.a = false;   
            document.getElementById("rgistermsg").innerHTML = response.data.error;  
           }
             
           })  
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
 
