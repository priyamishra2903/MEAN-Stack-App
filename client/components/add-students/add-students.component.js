function AddStudentController(mainService, $scope, Studentfactory) { 
   let value = 'student'
   let studentobj = new Studentfactory();
    $scope.AddStudent=function($http) {               
        let student = {           
            name:$scope.name,
            class:$scope.class,
            sub1:$scope.sub1,
            sub2:$scope.sub2,
            schoolName:$scope.schoolName,
         }

        studentobj.addStudentdata(student); 
        clearData();
     }
     
     function clearData() {        
        $scope.name='';
        $scope.class='';
        $scope.sub1='';
        $scope.sub2='';
        $scope.schoolName='';
    }

}

app.component('addStudents',{
    templateUrl: 'components/add-students/add-students.html',
    controller: AddStudentController,
    controllerAs: 'vm',
})





