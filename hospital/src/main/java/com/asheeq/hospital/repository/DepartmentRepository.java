package com.asheeq.hospital.repository;


import com.asheeq.hospital.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface DepartmentRepository extends JpaRepository<Department, Long> {

    Optional<Department> findByDepartmentName(@Param("department_name") String departmentName);

    Optional<Department> findByDepartmentId(@Param("department_id") long departmentId);

}