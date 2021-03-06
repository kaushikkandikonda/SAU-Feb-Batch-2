package com.au.kafka.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class ConsumerService {

    @KafkaListener(topics = "createOrder")
    public void consumeCreatedOrder(String order) {
        log.info("Consumer taken Created Order = {}", order);
    }

    @KafkaListener(topics = "shipOrder")
    public void consumeShippedOrder(String order) {
        log.info("Consumer taken Shipped Order = {}", order);
    }
}