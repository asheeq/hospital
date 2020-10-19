package com.asheeq.hospital.controller;

import com.asheeq.hospital.model.Appointment;
import com.asheeq.hospital.model.Doctor;
import com.asheeq.hospital.model.Patient;
import com.asheeq.hospital.service.AppointmentService;
import com.asheeq.hospital.service.DoctorService;
import com.asheeq.hospital.service.PatientService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final PatientService patientService;
    private final DoctorService doctorService;
    private final AppointmentService appointmentService;

    public AdminController(PatientService patientService, DoctorService doctorService, AppointmentService appointmentService) {
        this.patientService = patientService;
        this.doctorService = doctorService;
        this.appointmentService = appointmentService;
    }

    @RequestMapping(value = "/doctor-approval", method = RequestMethod.GET)
    public List unapprovedDoctor(Model model) {

        List<Doctor> doctor = doctorService.findAllByApprovedIsFalse() ;

        if(!doctor.isEmpty()){
            model.addAttribute("doctors", doctor);
            return doctor;
        }
        else {
            return null;
        }
    }

    @RequestMapping(value = "/patient-approval", method = RequestMethod.GET)
    public List unapprovedPatient(Model model) {

        List<Patient> patient = patientService.findAllByApprovedIsFalse() ;

        if(!patient.isEmpty()){
            model.addAttribute("patients", patient);
            return patient;
        }
        else {
            return null;
        }
    }

    @RequestMapping(value = "/appointment-approval", method = RequestMethod.GET)
    public List unapprovedAppointment(Model model) {

        List<Appointment> appointment = appointmentService.findAllByApprovedIsFalse() ;

        if(!appointment.isEmpty()){
            model.addAttribute("appointments", appointment);
            return appointment;
        }
        else {
            return null;
        }
    }
}
