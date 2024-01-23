package com.project.librarystore.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.librarystore.Entities.AdminLogin;

@Repository
public interface AdminLoginRepository extends JpaRepository<AdminLogin, Long>{

	AdminLogin findAdminByEmail(String email);
}
