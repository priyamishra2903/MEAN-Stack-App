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

  $scope.msgthreadlists = [];
  $scope.sendmsg=function() {   
    var msg = $scope.msg;
    sock.send(msg);  
    clearData();
  }

  function clearData() {        
    $scope.msg='';
}
  sock.onmessage = function(event){
    console.log(event.data, 'data'); 
     
    document.getElementById("chats").innerHTML += event.data + "<br>";
    $scope.msgthreadlists.push(event.data);
  }

  document.getElementById('chat-section')
    .addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            document.querySelector('form').submit();
        }
    });

}
 app.component('chats',{
     templateUrl: 'components/chats/chats.html',
     controller: Addchat,
     controllerAs: 'pc',
 })
 


 
 