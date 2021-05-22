function SchoolListController(mainService, $scope, Schoolfactory) {
    var vm = this;  
    let value1 = 'school'
    let value2 =  'student'
    let schoolobj = new Schoolfactory();
    mainService.get(value1).then(function(response) {        
        vm.schools = response.data;              
    })   

    mainService.get(value2).then(function(response) {
        vm.students = response.data;          
    })   
    $scope.Delete=function(school) {
        console.log(school);
        let index = school._id;       
        let l = vm.students;
        console.log(vm.students.length);
        for(let i = 0; i< vm.students.length; i++){
            if(vm.students[i].schoolName == school.schoolName){
                let studentid = vm.students[i]._id;
                mainService.delete(value2, studentid);    
            }
        }               
        schoolobj.deleteSchooldata(index);     
        location.reload();       
    }    
    $scope.check=function() {    
        mainFactory.checkFactory();   
        console.log('inside check');
    }
}

app.component('schoolsList',{
    templateUrl: 'components/schools-list/schools-list.html',
    controller: SchoolListController,
    controllerAs: 'vm',
})



