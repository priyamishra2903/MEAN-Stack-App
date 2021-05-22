function AddForm($scope, $uibModal, mainService) {
    var vm = this;
    const value = 'student';
    $scope.getstudentranking=function() {
         console.log('inside clear me');
         mainService.getRankingStudents(value).then(function(response) {        
            vm.students = response.data;  
            console.log('bhhh', vm.students );
        })
    } 

    $scope.getschoolranking=function() {
        console.log('inside clear me');
        mainService.getRankingSchools(value).then(function(response) {        
           vm.students = response.data;  
           console.log('bhhh', vm.students );
       })
   } 

    $scope.getsub1topper=function() {
        console.log('inside clear me');
        mainService.gettopsub1(value).then(function(response) {        
           vm.students = response.data;  
           console.log('bhhh', vm.students );
       })
   } 

   $scope.getsub2topper=function() {
    console.log('inside clear me');
    mainService.gettopsub2(value).then(function(response) {        
       vm.students = response.data;  
       console.log('bhhh', vm.students );
   })

   
 } 

 $scope.gettopper=function() {
    console.log('inside clear me');
    mainService.gettopstudent(value).then(function(response) {        
       vm.students = response.data;  
       console.log('bhhh', vm.students );
   })

   
 } 

$scope.getsubject=function() {
    console.log('inside clear me');
    mainService.gettopsubject(value).then(function(response) {        
       vm.students = response.data;  
       console.log('bhhh', vm.students );
   })   
 } 

$scope.gettopschool=function() {
    console.log('inside clear me');
    mainService.gettopschool(value).then(function(response) {        
       vm.students = response.data;  
       console.log('bhhh', vm.students );
   })   
 } 
   
    
}
 
 app.component('forms',{
     templateUrl: 'components/analytics/forms.html',
     controller: AddForm,
     controllerAs: 'vm',
 })
 


  
 
 