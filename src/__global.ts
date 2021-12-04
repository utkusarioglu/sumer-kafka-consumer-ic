declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOSTNAME?: string;
      KAFKA_BROKERS?: string;
      KAFKA_TOPIC?: string;
    }
  }
}

export {};
