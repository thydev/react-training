window.onload = () => {
    console.log('ready?')
    const h1clock = document.createElement("h1");
    h1clock.innerHTML = 'The clock starting in 1 second...';
    document.body.appendChild(h1clock);
    setInterval(() => {
        h1clock.innerHTML = (new Date()).toLocaleTimeString('en-US');
    }, 1000);

    const myButton = React.createElement('button', null, 'Click Me');
    console.log(JSON.stringify(myButton));
    /*
    	Prints the following:
    	{
    	"type":"button",
    	"key":null,
    	"ref":null,
    	"props": {
    	"children":"Click Me!"
    	},
    	"_owner":null,
    	"_store":{}
    	}
    */
    // ReactDOM.render(myButton, document.getElementById('app'));
    let clock2 = React.createElement('h1', null, 'clock');
    clock2.innerHTML = 'clock2';
    ReactDOM.render(clock2, document.getElementById('app'));
    setInterval(() => {
        // clock2.innerHTML = (new Date()).toLocaleTimeString();
        clock2 = React.createElement('h1', null, (new Date()).toLocaleTimeString());
        ReactDOM.render(clock2, document.getElementById('app'));
    }, 1000);

};