const kafka = require("kafka-node");

const topic = "test";

const client = new kafka.Client("localhost:2181");
const topics = [{ topic }];
const options = {
  autoCommit: false,
  fetchMaxWaitMs: 1000,
  fetchMaxBytes: 1024 * 1024
};

const consumer = new kafka.Consumer(client, topics, options);
const offset = new kafka.Offset(client);

consumer.on("message", message => {
  console.log(message);
});

consumer.on("error", err => {
  console.log("error: ", err);
});

consumer.on("offsetOutOfRange", topic => {
  topic.maxNum = 1;
  offset.fetch([topic], (err, offsets) => {
    if (err) {
      return console.log(err);
    }
    const min = Math.min.apply(null, offsets[topic.topic][topic.partition]);
    consumer.setOffset(topic.topic, topic.partition, min);
  });
});
