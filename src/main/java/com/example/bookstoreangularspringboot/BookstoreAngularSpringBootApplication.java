package com.example.bookstoreangularspringboot;

import com.example.bookstoreangularspringboot.Repo.BookRepository;
import com.example.bookstoreangularspringboot.Model.Book;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class BookstoreAngularSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookstoreAngularSpringBootApplication.class, args);
	}
	@Bean
	ApplicationRunner init(BookRepository repository) {
		// Save our starter set of books
		return args -> {
			Stream.of(new Book(null, "Horton Hears a Who", "Dr. Seuss"), new Book(null, "A Brief History of Time", "Stephen Hawking"),
					new Book(null, "Brave New World", "Aldous Huxley")).forEach(book -> {
				repository.save(book);
			});
			//retrieve them all, and print so that we see everything is wired up correctly
			repository.findAll().forEach(System.out::println);
		};
	}

}
