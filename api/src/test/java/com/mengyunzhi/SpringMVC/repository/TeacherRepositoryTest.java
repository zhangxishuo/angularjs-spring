package com.mengyunzhi.SpringMVC.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * 教师仓库单元测试
 * 张喜硕
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherRepositoryTest {
    @Autowired
    TeacherRepository teacherRepository;                        // 教师仓库

    @Test
    public void getAllTest() {
        teacherRepository.findAll();                            // 调用findAll方法, 不报错说明教师仓库接口可用
    }
}