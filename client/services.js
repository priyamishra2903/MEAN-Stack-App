
app.service('mainService', function($http, $q, AuthFactory) {
  const baseUrl = 'http://localhost:3000/api/'
    this.get = function(value){     
      return $q(function(resolve, reject) { 
        let token=  AuthFactory.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}                 
        if(value.length!=0) {
            console.log(baseUrl + value);
            resolve($http.get(baseUrl + value, {'headers':headers}));  
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
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}     
            if(value.length!=0 && data.length!=0) {
              console.log(baseUrl + value);
               resolve($http.post(baseUrl + value , data, {'headers':headers}));                 
            } 
            else     
                reject('There is an ERROR');
        })             
        .catch(err =>{
              return err
        });            
     }; 
    
    this.delete = function(value , index){
        return $q(function(resolve, reject) { 
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
            if(value.length!=0) {               
               resolve($http.delete(baseUrl + value +'/' + index, {'headers':headers}));                 
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
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/ranklist', {'headers':headers}));  
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
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/schoolranklist', {'headers':headers}));  
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
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topsub1', {'headers':headers}));  
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
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topsub2', {'headers':headers}));  
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
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topper', {'headers':headers}));  
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
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topsubject', {'headers':headers}));  
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
          let token=  AuthFactory.authToken();
          const headers = { 'content-type': 'application/json', 'Authorization':token}    
          if(value.length!=0) {
              resolve($http.get(baseUrl  + value + '/analytics/topschool', {'headers':headers}));  
          } 
          else     
              reject('There is an ERROR');
        })
        .catch(err =>{
          console.log(reject, err);
        });                   
      };            
})


