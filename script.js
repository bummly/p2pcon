 const peer = new Peer(null, {
                        debug: 2
                    });

 peer.connect(3245);

peer.on('connection', function (c) {
                        // Disallow incoming connections
                        c.on('open', function() {
                            c.send("Sender does not accept incoming connections");
                            //setTimeout(function() { c.close(); }, 500);
                        });
                    });
