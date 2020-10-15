package com.asheeq.hospital.service;
import java.util.Optional;
import com.asheeq.hospital.model.Department;

public interface DepartmentService {

    Optional<Department> findByDepartmentName(String departmentName);
    Optional<Department> findByDepartmentId(long departmentId);
    Department save(Department department);
}
