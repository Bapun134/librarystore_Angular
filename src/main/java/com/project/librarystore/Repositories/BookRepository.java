package com.project.librarystore.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.librarystore.Entities.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
