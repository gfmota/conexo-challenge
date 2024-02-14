package com.conexochallenge.conexochallengeservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class ConexoChallengeServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConexoChallengeServiceApplication.class, args);
	}

}
