package com.mengyunzhi.SpringMVC.service;

import com.mengyunzhi.SpringMVC.repository.Teacher;
import com.mengyunzhi.SpringMVC.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 教师服务接口实现类
 * 张喜硕
 */

@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    TeacherRepository teacherRepository;                              // 教师仓库接口

    public List<Teacher> getAll() {
        List<Teacher> teachers = (List<Teacher>) teacherRepository.findAll();
        return teachers;                                              // 调用findAll方法获取所有教师并返回
    }

    public Teacher getOne(Long id) {
        Teacher teacher = teacherRepository.findOne(id);
        return teacher;                                               // 调用findOne方法获取教师并返回
    }

    public Teacher save(Teacher teacher) {
        return teacherRepository.save(teacher);                       // 调用save方法保存教师并返回
    }
}
