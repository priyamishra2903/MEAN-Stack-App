function StudentListController(mainService, $scope, mainFactory) {
    var vm = this;
    const value = 'student'
    mainService.get(value).then(function(response) {
        vm.students = response.data;  
        for (let i = 0; i<vm.students.length; i++) {  
            let marks1 = vm.students[i].sub1;
            let marks2 = vm.students[i].sub2;
            vm.number = mainFactory.getTotal(marks1, marks2);   
            vm.students[i].marks = vm.number;     
      };  
    }) 
    $scope.DeleteData=function(student) {
        let index = student._id;    
        mainService.delete(value, index);
        location.reload();   
    } 
    let Studentarray =[]; 

    $scope.PushStudent=function(student) {             
        Studentarray.push(student);     
        console.log(Studentarray,'1');        
    } 
    
    $scope.DeleteMultiple = function () {    
        console.log('inside delte');       
        for (var i = 0; i<Studentarray.length; i++) {              
            for (var j = 0; j<vm.students.length; j++) {  
                if(vm.students[j].name == Studentarray[i].name){   
                let index = vm.students[j]._id
                console.log(index, 'index');
                mainService.delete(value, index);            
            }
         }
        }   
        location.reload();        
    };

}

app.component('studentsList',{
    templateUrl: 'components/students-list/students-list.html',
    controller: StudentListController,
    controllerAs: 'vm',
})


