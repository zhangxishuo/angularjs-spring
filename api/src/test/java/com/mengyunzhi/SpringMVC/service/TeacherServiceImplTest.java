package com.mengyunzhi.SpringMVC.service;

import com.mengyunzhi.SpringMVC.repository.Teacher;
import com.mengyunzhi.SpringMVC.repository.TeacherRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * 教师服务单元测试
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherServiceImplTest {

    @Autowired
    TeacherRepository teacherRepository;                            // 教师仓库

    @Autowired
    TeacherService teacherService;                                  // 教师服务

    @Test
    public void getAllTest() {
        Teacher teacher = new Teacher();                            // 新建教师
        teacherRepository.save(teacher);                            // 保存教师
        Iterable<Teacher> teachers = teacherService.getAll();       // 调用教师服务中getAll方法获取数据
        assertThat(teachers).isNotNull();                           // 断言获取到的数据不为空
    }

    @Test
    public void getOneTest() {
        Teacher teacher = new Teacher();                            // 新建教师
        teacherRepository.save(teacher);                            // 保存教师
        Teacher newTeacher = teacherService.getOne(teacher.getId());   // 调用教师服务中的getOne方法获取数据
        assertThat(newTeacher).isNotNull();                         // 断言获取到的数据不为空
    }

    @Test
    public void saveTest() {
        Teacher teacher = new Teacher();                            // 新建教师
        teacherService.save(teacher);                               // 调用教师服务中的save方法保存教师
        Teacher newTeacher = teacherRepository.findOne(teacher.getId());   // 查询该教师
        assertThat(newTeacher).isNotNull();                         // 断言查询到的数据不为空
    }
}