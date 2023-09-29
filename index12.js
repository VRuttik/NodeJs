// Events Module 
// Node.js has a built-in module, called "Events",
// where you can create, fire, and listen for - your own events.

// Example 1-Registratig for the event to be fired only one time using o.

// Example 2-Create an event emitter instance and register a couple of 

// Example 3-Registrating for the event with callback parameters

/* 1.
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Your name is Vruttik");
});

event.emit("sayMyName");
*/

/* 2
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Your name is Vruttik");
});

event.on("sayMyName", () => {
    console.log("Your name is Ruttik");
});

event.on("sayMyName", () => {
    console.log("Your name is Hrittik");
});

event.emit("sayMyName");
*/

const EventEmitter = require("events");
const event = new EventEmitter();

event.on('checkPage', (sc, msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");
