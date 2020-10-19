package com.asheeq.hospital.controller;

import com.asheeq.hospital.model.Doctor;
import com.asheeq.hospital.model.Patient;
import com.asheeq.hospital.service.DoctorService;
import com.asheeq.hospital.service.PatientService;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/signup")
public class SignupController {

    private final DoctorService doctorService;
    private final PatientService patientService;

    public SignupController(DoctorService doctorService, PatientService patientService) {
        this.doctorService = doctorService;
        this.patientService = patientService;
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public String createNewPatient(@Valid Patient patient,
                                BindingResult bindingResult,
                                Model model) {


        if (!bindingResult.hasErrors()) {
            patientService.save(patient);
            model.addAttribute("successMessage", "Please wait for Admin approval.");
            model.addAttribute("patients", new Patient());
        }

        return "/";
    }

    @RequestMapping(value = "/doctor", method = RequestMethod.POST)
    public String createNewDoctor(@Valid Doctor doctor,
                                   BindingResult bindingResult,
                                   Model model) {


        if (!bindingResult.hasErrors()) {
            doctorService.save(doctor);
            model.addAttribute("successMessage", "Please wait for Admin approval.");
            model.addAttribute("doctors", new Doctor());
        }

        return "/registration/doctor";
    }

}
