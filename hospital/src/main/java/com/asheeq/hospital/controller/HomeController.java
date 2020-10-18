package com.asheeq.hospital.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class HomeController
{
    @RequestMapping(name = "/", method= RequestMethod.GET)
    public String hello()
    {
        return "/";
    }
}
