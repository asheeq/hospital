package com.asheeq.hospital.service.impl;

import com.asheeq.hospital.model.Appointment;
import com.asheeq.hospital.repository.AppointmentRepository;
import com.asheeq.hospital.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentServiceImp implements AppointmentService {

    private final AppointmentRepository appointmentRepository;

    @Autowired
    public AppointmentServiceImp(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    @Override
    public Optional<Appointment> findByAppointmentId(long appointmentId) {
        return appointmentRepository.findByAppointmentId(appointmentId);
    }

    @Override
    public List<Appointment> findAllByApprovedIsFalse() {
        return appointmentRepository.findAllByApprovedIsFalse();
    }

    @Override
    public Appointment save(Appointment appointment) {
        return appointmentRepository.saveAndFlush(appointment);
    }
}
