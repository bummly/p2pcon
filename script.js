 peer = new Peer(null, {
                        debug: 2
                    });
 conn = peer.connect(3245, {
                        reliable: true
                    });

                    conn.on('open', function () {
                        status.innerHTML = "Connected to: " + conn.peer;
                        console.log("Connected to: " + conn.peer);

                        // Check URL params for comamnds that should be sent immediately
                        var command = window.location
                       
                            conn.send(command);
                    );
