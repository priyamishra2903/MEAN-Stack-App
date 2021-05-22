function ModalInstanceCtrl(data, $uibModalInstance) {

    let pc = this;
    pc.data = data;    
    pc.ok = function () {
      //{...}
      $uibModalInstance.close();
    };
  
    pc.cancel = function () {
      //{...}
      $uibModalInstance.dismiss('cancel');
    };

  
}
 
 app.component('logindata',{
     templateUrl: 'components/login/login.html',
     controller: ModalInstanceCtrl,
     controllerAs: 'pc',
 })
 


 
 