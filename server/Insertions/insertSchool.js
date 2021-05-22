const Schooldata  = require('../models/School');
console.log('hi'); 

var schools = ([
        {   
         schoolName: "abc",
         location: "ggn"
        },
        {   
            schoolName: "d",
            location: "ggn"
        }, 
        {   
            schoolName: "e",
            location: "ggn"
        },
        {   
            schoolName: "f",
            location: "ggn"
        }, 
        
        {   
            schoolName: "g",
            location: "ggn"
        }, 
        
        {   
            schoolName: "h",
            location: "ggn"
        },
        
        {   
            schoolName: "i",
            location: "ggn"
        }, 

        {   
            schoolName: "j",
            location: "ggn"
        }
    
]);

Schooldata.collections.insert(schools, function(err, docs) {
    if(err){
        return console.log(err);
    }
    else{
        console.log('inserted records');

    }    
})

