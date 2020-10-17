package com.asheeq.hospital.controller;

import com.asheeq.hospital.model.Department;
import com.asheeq.hospital.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class DepartmentController {

    private final DepartmentService departmentService;

    @Autowired
    public DepartmentController(DepartmentService departmentService){
        this.departmentService = departmentService;
    }

    @GetMapping("/department")
    public String department(Model model){
        List<Department> departments = departmentService.findAll() ;

        if(!departments.isEmpty()){
            model.addAttribute("departments", departments);
            return "/department";
        }
        else {
            return "/error";
        }
    }

}
