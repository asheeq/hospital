package com.asheeq.hospital.model;

import javax.persistence.*;

@Entity
@Table(name = "doctors")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "doctor_id")
    private Long id;

    @Column(name = "doctor_name", nullable = false)
    private String doctorName;

    @Column(name = "doctor_age", nullable = false)
    private Long doctorAge;

    @Column(name = "degree", nullable = false)
    private String degree;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "visiting_time", nullable = false)
    private String visitingTime;

    @Column(name = "approved", nullable = false)
    private boolean approved;

    @ManyToOne
    @JoinColumn(name = "department_id", referencedColumnName = "department_id", nullable = false)
    private Department department;

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDepartmentName() {
        return doctorName;
    }

    public void setDepartmentName(String departmentName) {
        this.doctorName = departmentName;
    }

    public Long getDoctorAge() {
        return doctorAge;
    }

    public void setDoctorAge(Long doctorAge) {
        this.doctorAge = doctorAge;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVisitingTime() {
        return visitingTime;
    }

    public void setVisitingTime(String visitingTime) {
        this.visitingTime = visitingTime;
    }

}
