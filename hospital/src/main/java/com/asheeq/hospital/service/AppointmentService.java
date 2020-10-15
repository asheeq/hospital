package com.asheeq.hospital.service;
import java.util.List;
import java.util.Optional;

import com.asheeq.hospital.model.Appointment;

public interface AppointmentService {

    Optional<Appointment> findByAppointmentId(long appointmentId);
    List<Appointment> findAllByApprovedIsFalse();
    Appointment save(Appointment appointment);

}
