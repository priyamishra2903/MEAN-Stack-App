function AddSchoolController(mainService, $scope, Schoolfactory) { 

    let value = 'school'
    $scope.AddData=function() {                      
       let school = {
        schoolName:$scope.schoolName,
        location:$scope.location,
       }
       let schoolobj = new Schoolfactory();
       schoolobj.addSchooldata(school);
       clearData();

    }
    function clearData() {
        $scope.schoolName='';
        $scope.location='';
    }
}

app.component('addSchools',{
    templateUrl: 'components/add-schools/add-schools.html',
    controller: AddSchoolController,
    controllerAs: 'vm',
})





