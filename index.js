const eventNames = ['start', 'createLog', 'message'];

eventNames.forEach((eventName) => {
  const eventHandler = require(`./events/${eventName}.js`);
  eventHandler.run();
});
