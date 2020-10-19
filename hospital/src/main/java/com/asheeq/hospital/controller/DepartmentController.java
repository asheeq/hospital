package com.asheeq.hospital.controller;

import com.asheeq.hospital.model.Department;
import com.asheeq.hospital.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/department")
public class DepartmentController {

    private final DepartmentService departmentService;

    @Autowired
    public DepartmentController(DepartmentService departmentService){
        this.departmentService = departmentService;
    }

    @RequestMapping(name = "/", method = RequestMethod.GET)
    public List department(Model model){
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
}
