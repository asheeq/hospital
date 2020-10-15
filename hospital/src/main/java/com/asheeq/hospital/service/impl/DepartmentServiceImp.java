package com.asheeq.hospital.service.impl;

import com.asheeq.hospital.model.Department;
import com.asheeq.hospital.repository.DepartmentRepository;
import com.asheeq.hospital.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class DepartmentServiceImp implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    @Autowired
    public DepartmentServiceImp(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @Override
    public Optional<Department> findByDepartmentName(String departmentName) {
        return departmentRepository.findByDepartmentName(departmentName);
    }

    @Override
    public Optional<Department> findByDepartmentId(long departmentId) {
        return departmentRepository.findByDepartmentId(departmentId);
    }

    @Override
    public Department save(Department department) {
        return departmentRepository.saveAndFlush(department);
    }

}

