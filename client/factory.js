
app.factory('mainFactory', function() {
    let factoryObject = {};
    factoryObject.getTotal = function(marks1, marks2) { 
        const number = (parseInt(marks1) + parseInt(marks2));
        return number;
    };
    return factoryObject;
});

app.factory('Schoolfactory', function(mainService) {
    function Schoolfactory(schoolName, location){
      let self = this;
      self.schoolName = schoolName;
      self.location = location;   
    }  
    let value ='school';
    Schoolfactory.prototype = {
      addSchooldata : function(school){
        mainService.add(value, school)
      }, 
      deleteSchooldata : function(index){
        mainService.delete(value, index)
      }        
    }
    return (Schoolfactory);    
});

app.factory('Studentfactory', function(mainService) {
    function Studentfactory(name, className, sub1, sub2, schoolName){
      let self = this;
      self.name = name;
      self.className = className;   
      self.sub1 = sub1;
      self.sub2 = sub2;  
      self.schoolName = schoolName;
    }  
    let value ='student';
    Studentfactory.prototype = {
      addStudentdata : function(student){
        mainService.add(value, student)
      }, 
      deleteStudentdata : function(index){
        mainService.delete(value, index)
      }        
    }
    return (Studentfactory);    
});




// app.factory('Schoolfactory', function(mainService, $q) {

//     function Schoolfactory(schoolName, location){
//       let self = this;
//       self.schoolName = schoolName;
//       self.location = location;   
//     }  
//     Schoolfactory.prototype = {
//       addSchooldata : function(school){
//         return $q(function(resolve, reject) {
//             if (school.length === 0) {
//               return reject("Cannot add data")
//             } else {
//                 let value ='school';
//                 return resolve (mainService.add(value, school))
//             }
//           });
      
//       }
//     }
//     return (Schoolfactory);    
// });

