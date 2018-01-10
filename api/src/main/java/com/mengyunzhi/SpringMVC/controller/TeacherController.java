package com.mengyunzhi.SpringMVC.controller;

import com.mengyunzhi.SpringMVC.repository.Teacher;
import com.mengyunzhi.SpringMVC.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 教师控制器
 * 张喜硕
 */

@RestController
@RequestMapping("/Teacher")
public class TeacherController {

    @Autowired
    TeacherService teacherService;                              // 教师服务

    @GetMapping("/")
    public List<Teacher> getAll() {
        return teacherService.getAll();                         // 返回教师列表
    }
}
