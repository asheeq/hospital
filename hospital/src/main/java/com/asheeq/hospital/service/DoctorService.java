package com.asheeq.hospital.service;
import java.util.List;
import java.util.Optional;
import com.asheeq.hospital.model.Department;
import com.asheeq.hospital.model.Doctor;

public interface DoctorService {

    Optional<Doctor> findByDoctorId(long doctorId);
    List<Doctor> findByDepartment(Department department);
    List<Doctor> findAllByApprovedIsFalse();
    Doctor save(Doctor doctor);
}
