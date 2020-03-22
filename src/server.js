const io = require('socket.io')();
const port = 8000;

let heroes = [];

io.on('connection', (client) => {
    heroes.push({id: client.id, name: 'Client'});
    console.log("Heroes", heroes.map(x => x.name).join(", "));

    client.on('disconnect', () => {
        const i = heroes.findIndex(x => x.id === client.id);
        console.log(`${heroes[i].name} disconnected`);
        heroes.splice(i, 1);
    });

    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });

    client.on('selectedHero', (heroName) => {
        const myHero = heroes.find(x => x.id === client.id);
        myHero.name = heroName;
        setTimeout(() => {
            client.emit('speak', `Welcome back, ${myHero.name}`);
        }, 3000);
    })
});

io.listen(port);

console.log("Socket.IO listening on port", port);