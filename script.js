let peer = new Peer(); 

var conn = peer.connect(3245);
// on open will be launch when you successfully connect to PeerServer
conn.on('open', function(){
  // here you have conn.id
  conn.send('hi!');
});