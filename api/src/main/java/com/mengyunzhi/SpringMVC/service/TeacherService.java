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

    /**
     * 根据id获取教师
     * @param id
     * @return
     */
    Teacher getOne(Long id);

    /**
     * 保存教师
     * @param teacher
     * @return
     */
    Teacher save(Teacher teacher);

    /**
     * 更新教师
     * @param id
     * @param teacher
     * @return
     */
    Teacher update(Long id, Teacher teacher);

    /**
     * 删除教师
     * @param id
     */
    void delete(Long id);
}
