const kafka = require("kafka-node");

const client = new kafka.Client("localhost:2181");
const producer = new kafka.Producer(client, { requireAcks: 1 });
const topic = "test";

producer.on("ready", () => {
  const message = "a message";
  const keyedMessage = new kafka.KeyedMessage("keyed", "a keyed message");

  producer.send(
    [
      {
        topic,
        messages: [message, keyedMessage]
      }
    ],
    (err, result) => {
      console.log(err || result);
      process.exit();
    }
  );
});

process.on("error", err => {
  console.log("error", err);
});
