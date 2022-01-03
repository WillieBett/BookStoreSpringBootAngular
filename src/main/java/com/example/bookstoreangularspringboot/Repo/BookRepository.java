package com.example.bookstoreangularspringboot.Repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.bookstoreangularspringboot.Model.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
}