package com.asheeq.hospital.controller;

import com.asheeq.hospital.model.Appointment;
import com.asheeq.hospital.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {

    private final AppointmentService appointmentService;

    @Autowired
    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @RequestMapping(name = "/", method = RequestMethod.GET)
    public List appointment(Model model){
        List<Appointment> appointments = appointmentService.findAllByApprovedIsFalse() ;

        if(!appointments.isEmpty()){
            model.addAttribute("appointments", appointments);
            return appointments;
        }
        else {
            return null;
        }
    }

    @RequestMapping(name = "/", method = RequestMethod.POST)
    public String createNewAppointment(@Valid Appointment appointment, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return "Failed to save Appointment";
        } else {
            appointmentService.save(appointment);
            return "Appointment Saved";
        }
    }
}
