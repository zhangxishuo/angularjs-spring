package com.mengyunzhi.SpringMVC.service;

import com.mengyunzhi.SpringMVC.repository.Teacher;

import java.util.List;

/**
 * 教师服务接口
 * 张喜硕
 */

public interface TeacherService {

    List<Teacher> getAll();

    Teacher getOne(Long id);

    Teacher save(Teacher teacher);

    Teacher update(Long id, Teacher teacher);

    void delete(Long id);
}
