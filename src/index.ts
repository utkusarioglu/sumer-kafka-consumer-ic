require("dotenv").config();
import { Kafka } from "kafkajs";
import { HOSTNAME, KAFKA_BROKERS, KAFKA_TOPIC } from "./__config";

const kafka = new Kafka({
  clientId: HOSTNAME,
  brokers: KAFKA_BROKERS,
});

const consumer = kafka.consumer({ groupId: "kafka-consumer-ic" });

consumer
  .subscribe({ topic: KAFKA_TOPIC })
  .then(() => {
    console.log("Init container running normally, will quit in 5000.");
    setTimeout(() => {
      console.log("Exiting Init Container");
      process.exit(0);
    }, 5000);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
