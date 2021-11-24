import { strict as assert } from 'assert';

assert(process.env.HOSTNAME, '.env.HOSTNAME is required');
assert(process.env.KAFKA_BROKERS, '.env.KAFKA_BROKERS is required');

export const HOSTNAME = process.env.HOSTNAME;
export const KAFKA_BROKERS = process.env.KAFKA_BROKERS.split(',');
