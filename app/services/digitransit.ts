import mqtt from 'mqtt';

const client = mqtt.connect('mqtts://mqtt.hsl.fi:8883/', {
  rejectUnauthorized: false,
});

console.log(client.eventNames());
client.on('connect', () => {
  client.subscribe('/hfp/v2/journey/+/vp/#', (err, granted) => {
    console.log('Subscribed to /hfp/v2/journey/+/vp/#');
    console.log(granted);
  });
});

client.on('error', (error) => {
  console.error(error);
});

client.on('message', (topic, message) => {
  console.log(topic, message.toString());
});
