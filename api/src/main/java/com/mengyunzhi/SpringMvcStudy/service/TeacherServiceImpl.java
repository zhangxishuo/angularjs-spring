package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.entity.Teacher;
import com.mengyunzhi.SpringMvcStudy.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * create by zhangxishuo
 */
@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;      // 教师

    @Override
    public Iterable<Teacher> getAll() {
        return teacherRepository.findAll();           // 调用findAll获取所有教师
    }

    @Override
    public Teacher getOne(Long id) {
        return teacherRepository.findOne(id);         // 调用findOne获取教师
    }

    @Override
    public Teacher save(Teacher teacher) {
        return teacherRepository.save(teacher);       // 调用save保存教师
    }

    @Override
    public Teacher update(Long id, Teacher teacher) {
        Teacher oldTeacher = teacherRepository.findOne(id);    // 获取教师
        oldTeacher.setName(teacher.getName());
        oldTeacher.setUsername(teacher.getUsername());
        oldTeacher.setEmail(teacher.getEmail());
        oldTeacher.setSex(teacher.isSex());           // 更新属性
        return teacherRepository.save(teacher);       // 保存教师
    }

    @Override
    public void delete(Long id) {
        teacherRepository.delete(id);                 // 调用delete删除教师
        return;
    }
}
