 const peer = new Peer(null, {
                        debug: 2
                    });
 letconn = peer.connect(3245, {
                        reliable: true
                    });

                    conn.on('open', function () {
                        
                       document.write("Connected to: " + conn.peer);

                        // Check URL params for comamnds that should be sent immediately
                       
                       
                            conn.send("Hey");
                    );
