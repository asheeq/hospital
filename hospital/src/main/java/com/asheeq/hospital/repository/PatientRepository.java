package com.asheeq.hospital.repository;

import com.asheeq.hospital.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient, Long> {

    Optional<Patient> findByPatientId(@Param("patient_id") long patientId);


    List<Patient> findAllByApprovedIsFalse();
}