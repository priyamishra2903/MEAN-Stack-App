const baseUrl = 'http://localhost:3000/api/'
const headers = { 'content-type': 'application/json'}  

app.service('mainService', function($http, $q) {
    this.get = function(value){     
      return $q(function(resolve, reject) { 
        if(value.length!=0) {
            console.log(baseUrl + value);
            resolve($http.get(baseUrl + value));  
        } 
        else     
            reject('There is an ERROR');
      })
      .catch(err =>{
        console.log(err, 'ERROR');
      });                   
    };  

    this.add= function(value, data){       
       console.log('infhhf');   
        return $q(function(resolve, reject) { 
          
            if(value.length!=0 && data.length!=0) {
              console.log(baseUrl + value);
               resolve($http.post(baseUrl + value , data, {'headers':headers}));                 
            } 
            else     
                reject('There is an ERROR');
        })             
        .catch(err =>{
              console.log('ERROR');
        });            
     }; 
    
    this.delete = function(value , index){
        return $q(function(resolve, reject) { 
            if(value.length!=0) {
               
               resolve($http.delete(baseUrl + value +'/' + index));                 
            } 
            else     
                reject('There is an ERROR');
        })             
        .catch(err =>{
              console.log(err);
        });      
    }; 

    this.getRankingStudents = function(value){     
        return $q(function(resolve, reject) { 
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/ranklist'));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      }; 
 
    this.getRankingSchools = function(value){     
        return $q(function(resolve, reject) { 
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/schoolranklist'));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };      
    this.gettopsub1 = function(value){     
        return $q(function(resolve, reject) { 
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topsub1'));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };    
    
    this.gettopsub2 = function(value){     
        return $q(function(resolve, reject) { 
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topsub2'));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };    


    this.gettopstudent = function(value){     
        return $q(function(resolve, reject) { 
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topper'));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };    

    this.gettopsubject = function(value){     
        return $q(function(resolve, reject) { 
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topsubject'));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };  

    this.gettopschool = function(value){     
        return $q(function(resolve, reject) { 
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topschool'));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };            
})


