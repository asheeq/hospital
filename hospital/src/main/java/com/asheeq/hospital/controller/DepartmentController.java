package com.asheeq.hospital.controller;

import com.asheeq.hospital.model.Department;
import com.asheeq.hospital.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
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
    public String department(Model model){
        List<Department> departments = departmentService.findAll() ;

        if(!departments.isEmpty()){
            model.addAttribute("departments", departments);
            return "Department Found.";
        }
        else {
            return "No Department Found.";
        }
    }

}
