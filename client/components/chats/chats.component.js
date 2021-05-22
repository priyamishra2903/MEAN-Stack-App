function Addchat($scope, $uibModal) {

  // var sock = new WebSocket("wss://echo.websocket.org");
  var sock = new WebSocket("ws://localhost:5001");

  sock.onopen = function(event){
    console.log('conneted through socket', event);
    // alert("successfull connection");
    setTimeout(function(){
      // sock.send("hi there");
    }, 100);
  }

  // var text = document.getElementByIdById('text').value;
  $scope.msgthreadlists = [];
  $scope.sendmsg=function() {   
    var msg = $scope.msg;
    sock.send(msg);  
    // $scope.msgthreadlists.push(msg);
    // console.log(msgthreadlists, 'message threadlist');
    clearData();
  }

  $scope.htmlStr = "hellooo"

  function clearData() {        
    $scope.msg='';
}

  sock.onmessage = function(event){
    console.log(event.data, 'data');   
    $scope.msgthreadlists.push(event.data);
  }

}
 
 app.component('chats',{
     templateUrl: 'components/chats/chats.html',
     controller: Addchat,
     controllerAs: 'pc',
 })
 


 
 