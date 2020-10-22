package com.asheeq.hospital.controller;

import com.asheeq.hospital.model.Department;
import com.asheeq.hospital.model.Doctor;
import com.asheeq.hospital.service.DepartmentService;
import com.asheeq.hospital.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/department")
public class DepartmentController {

    private final DepartmentService departmentService;
    private final DoctorService doctorService;

    @Autowired
    public DepartmentController(DepartmentService departmentService, DoctorService doctorService){
        this.departmentService = departmentService;
        this.doctorService = doctorService;
    }

    @RequestMapping(name = "/", method = RequestMethod.GET)
    public List<Department> department(Model model){
        List<Department> departments = departmentService.findAll() ;

        if(!departments.isEmpty()){
            model.addAttribute("departments", departments);
            return departments;
        }
        else {
            return null;
        }
    }

    @RequestMapping(name = "/", method = RequestMethod.POST)
    public String createNewDepartment(@Valid Department department, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return "Failed to save Department";
        } else {
            departmentService.save(department);
            System.out.println(department.getDepartmentId()+" "+ department.getDepartmentName());
            return "redirect:/";
        }
    }

    @RequestMapping(value = "/{departmentName}", method = RequestMethod.GET)
    public List<Doctor> getDoctors(@PathVariable String departmentName,
                                  Model model) {

        Optional<Department> optionalDepartment = departmentService.findByDepartmentName(departmentName);

        if (optionalDepartment.isPresent()) {
            Department department = optionalDepartment.get();
            List<Doctor> doctors = doctorService.findByDepartment(department);

            if (!doctors.isEmpty()) {
                model.addAttribute("doctors", doctors);
                return doctors;
            }
        }
        return null;
    }
}
