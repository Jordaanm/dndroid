const io = require('socket.io')();
const port = 8000;

let heroes = [];
let clients = {};

io.on('connection', (client) => {
    heroes.push({id: client.id, name: 'Client', user: 'Anonymous'});
    clients[client.id] = client;
    console.log("Heroes", heroes.map(x => x.name).join(", "));

    client.on('disconnect', () => {
        const i = heroes.findIndex(x => x.id === client.id);
        console.log(`${heroes[i].name} disconnected`);
        heroes.splice(i, 1);
        delete clients[client.id];
    });

    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });

    client.on('selectedHero', (heroName, userName) => {
        const myHero = heroes.find(x => x.id === client.id);
        myHero.name = heroName;
        myHero.user = userName;
        // setTimeout(() => {
        //     client.emit('speak', `Welcome back, ${userName} the ${myHero.name}`);
        // }, 3000);
    });

    client.on('dmGetPlayers', () => {
        console.log("GET PLAYERS", heroes);
        client.emit('dmReceivePlayers', heroes);
    });

    client.on('dmForceSpeak', (quote, id) => {
        const theClient = clients[id];
        if(theClient) {
            theClient.emit('speak', quote);
        } 
    });

    client.on('dmUnlockApp', (appName, id) => {
        const theClient = clients[id];
        if(theClient) {
            console.log("Unlocking App for the ", heroes.find(x => x.id === id).name);
            theClient.emit('unlockApp', appName);
        } 
    });
});

io.listen(port);

console.log("Socket.IO listening on port", port);