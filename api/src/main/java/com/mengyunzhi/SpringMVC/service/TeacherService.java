package com.mengyunzhi.SpringMVC.service;

import com.mengyunzhi.SpringMVC.repository.Teacher;

import java.util.List;

/**
 * 教师服务接口
 * 张喜硕
 */

public interface TeacherService {
    /**
     * 获取所有教师
     */
    List<Teacher> getAll();

    Teacher save(Teacher teacher);
}
