package com.asheeq.hospital.service.impl;

import com.asheeq.hospital.model.Department;
import com.asheeq.hospital.model.Doctor;
import com.asheeq.hospital.repository.DepartmentRepository;
import com.asheeq.hospital.repository.DoctorRepository;
import com.asheeq.hospital.service.DoctorService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class DoctorServiceImp implements DoctorService {

    private final DoctorRepository doctorRepository;
    private final DepartmentRepository departmentRepository;

    public DoctorServiceImp(DoctorRepository doctorRepository, DepartmentRepository departmentRepository) {
        this.doctorRepository = doctorRepository;
        this.departmentRepository = departmentRepository;

    }

    @Override
    public Optional<Doctor> findByDoctorId(long doctorId) {
        return doctorRepository.findByDoctorId(doctorId);
    }

    @Override
    public List<Doctor> findByDepartment(Department department) {
        return doctorRepository.findByDepartment(department);
    }

    @Override
    public List<Doctor> findAllByApprovedIsFalse() {

        return doctorRepository.findAllByApprovedIsFalse();
    }

    @Override
    public Doctor save(Doctor doctor) {
        return doctorRepository.saveAndFlush(doctor);
    }
}
