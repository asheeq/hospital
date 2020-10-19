package com.asheeq.hospital.service.impl;

import com.asheeq.hospital.model.Patient;
import com.asheeq.hospital.repository.PatientRepository;
import com.asheeq.hospital.service.PatientService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class PatientServiceImp implements PatientService {

    private final PatientRepository patientRepository;

    public PatientServiceImp(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public Optional<Patient> findByPatientId(long patientId) {
        return patientRepository.findByPatientId(patientId);
    }

    @Override
    public List<Patient> findAllByApprovedIsFalse() {
        return patientRepository.findAllByApprovedIsFalse();
    }

    @Override
    public Patient save(Patient patient) {
        return patientRepository.saveAndFlush(patient);
    }
}
