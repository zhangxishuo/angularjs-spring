package com.mengyunzhi.SpringMvcStudy.repository;

import com.mengyunzhi.SpringMvcStudy.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * create by zhangxishuo
 */
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}
