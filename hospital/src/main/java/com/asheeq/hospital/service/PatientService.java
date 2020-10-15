package com.asheeq.hospital.service;
import java.util.List;
import java.util.Optional;
import com.asheeq.hospital.model.Patient;

public interface PatientService {

    Optional<Patient> findByPatientId(long patientId);
    List<Patient> findAllByApprovedIsFalse();
    Patient save(Patient patient);

}
