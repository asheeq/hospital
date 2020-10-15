package com.asheeq.hospital.repository;

import com.asheeq.hospital.model.Appointment;
import com.asheeq.hospital.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    Optional<Appointment> findByAppointmentId(@Param("appointment_id") long appointmentId);
    List<Appointment> findAllByApprovedIsFalse();
}