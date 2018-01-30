package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.entity.Teacher;

/**
 * create by zhangxishuo
 */
public interface TeacherService {
    /**
     * 获取教师列表
     */
    Iterable<Teacher> getAll();

    /**
     * 根据id获取教师
     */
    Teacher getOne(Long id);

    /**
     * 保存教师
     */
    Teacher save(Teacher teacher);

    /**
     * 更新教师
     */
    Teacher update(Long id, Teacher teacher);

    /**
     * 根据id删除教师
     */
    void delete(Long id);
}
