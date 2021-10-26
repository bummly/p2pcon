let peer = new Peer(); 

 peer.connect(3245);
// on open will be launch when you successfully connect to PeerServer

peer.on('open', function(){
  // here you have conn.id
 document.write("Open")
});

peer.on('connection', function(){
  // here you have conn.id
  document.write("Open")
  peer.send('hi!');
});
