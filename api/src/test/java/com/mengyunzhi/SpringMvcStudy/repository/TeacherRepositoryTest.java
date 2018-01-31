package com.mengyunzhi.SpringMvcStudy.repository;

import com.mengyunzhi.SpringMvcStudy.SpringMvcStudyApplicationTests;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * create by zhangxishuo
 */
public class TeacherRepositoryTest extends SpringMvcStudyApplicationTests {

    @Autowired
    private TeacherRepository teacherRepository;         // 教师

    @Test
    public void test() {
        teacherRepository.findAll();
    }
}