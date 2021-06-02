function DashboardCtrl($scope,AuthFactory) {
    let vm =this;
    vm.token=  AuthFactory.authToken();
    console.log(vm.token, 'inside dashboard');
    if(vm.token!=undefined){
        $scope.a = true;
        console.log($scope.a, 'true condition');
    }
    else{
        $scope.a = false;   
        console.log($scope.a, 'false condition');
    }   
     $scope.logout=function($http) {     
        let token = null;   
        AuthFactory.getToken(token);    
        location.reload();    
      } 
}
 
 app.component('dashboard',{
     templateUrl: 'components/dashboard/dashboard.html',
     controller: DashboardCtrl,
     controllerAs: 'vm',
 })
 


 
 