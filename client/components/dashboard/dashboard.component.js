function DashboardCtrl($scope) {

     $scope.check=function($http) {       
         console.log('jfjjjjjj');        
      }
  
}
 
 app.component('dashboard',{
     templateUrl: 'components/dashboard/dashboard.html',
     controller: DashboardCtrl,
     controllerAs: 'vm',
 })
 


 
 