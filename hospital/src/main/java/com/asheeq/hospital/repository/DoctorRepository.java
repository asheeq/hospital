package com.asheeq.hospital.repository;

import com.asheeq.hospital.model.Department;
import com.asheeq.hospital.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    Optional<Doctor> findByDoctorId(@Param("doctor_id") long doctorId);

    List<Doctor> findByDepartment(Department department);

    List<Doctor> findAllByApprovedIsFalse();
}