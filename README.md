# Sumer Kafka Consumer InitContainer

This repo builds an init container that listens to whether the kafka brokers
are available for connection. If they are, the container exits with 0 in 
5000ms, allowing the pod containers to run. 

This is a good init container to have with all pods that communicate with kafka.
