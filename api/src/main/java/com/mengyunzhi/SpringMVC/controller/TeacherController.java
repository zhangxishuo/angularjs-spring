package com.mengyunzhi.SpringMVC.controller;

import com.mengyunzhi.SpringMVC.repository.Teacher;
import com.mengyunzhi.SpringMVC.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public Teacher getOne(@PathVariable Long id) {
        return teacherService.getOne(id);                       // 根据id获取教师并返回
    }

    @PostMapping("/")
    public Teacher save(@RequestBody Teacher teacher) {
        return teacherService.save(teacher);                    // 保存并返回教师
    }

    @PutMapping("/{id}")
    public Teacher update(@PathVariable Long id, @RequestBody Teacher teacher) {
        return teacherService.update(id, teacher);              // 更新数据并返回
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        teacherService.delete(id);
        return;
    }
}
