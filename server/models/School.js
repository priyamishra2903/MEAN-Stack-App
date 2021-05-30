const mongoose = require('mongoose');

const school = new mongoose.Schema({

  schoolName: {
    type: String, 
    required: true
  },
  location: {
    type: String,
    required: true
  }
}
);


School = mongoose.model('school', school);


// School.insertMany([
//   {   
//     schoolName: "abc",
//     location: "ggn"
//    },
//    {   
//        schoolName: "d",
//        location: "ggn"
//    }, 
//    {   
//        schoolName: "e",
//        location: "ggn"
//    },
//    {   
//        schoolName: "f",
//        location: "ggn"
//    }, 
   
//    {   
//        schoolName: "g",
//        location: "ggn"
//    }, 
   
//    {   
//        schoolName: "h",
//        location: "ggn"
//    },
   
//    {   
//        schoolName: "i",
//        location: "ggn"
//    }, 

//    {   
//        schoolName: "j",
//        location: "ggn"
//    }
// ]).then(function(){
//   console.log("Data inserted")  // Success
// }).catch(function(error){
//   console.log(error)      // Failure
// });

module.exports = School;