package com.demo.luceneapi;

import com.demo.luceneapi.config.LuceneIndexConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan({"com.demo.luceneapi.entities"})
@Import(LuceneIndexConfig.class)
@EnableJpaRepositories(basePackages = {})
public class LuceneApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(LuceneApiApplication.class, args);
	}

}
