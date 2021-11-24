declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOSTNAME?: string;
      KAFKA_BROKERS?: string;
    }
  }
}

export {};
