package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.ServiceTest;
import com.mengyunzhi.SpringMvcStudy.entity.Teacher;
import com.mengyunzhi.SpringMvcStudy.repository.TeacherRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


/**
 * create by zhangxishuo
 */
@Slf4j
public class TeacherServiceImplTest extends ServiceTest {

    @Autowired
    private TeacherRepository teacherRepository;            // 教师

    @Autowired
    private TeacherService teacherService;                  // 教师

    @Test
    public void getAllTest() {
        log.info("新建教师");
        Teacher teacher = new Teacher();

        log.info("保存教师");
        teacherRepository.save(teacher);

        log.info("获取所有教师");
        List<Teacher> teacherList = (List<Teacher>) teacherService.getAll();

        log.info("断言");
        assertThat(teacherList.size()).isNotZero();
    }

    @Test
    public void getOneTest() {
        log.info("新建教师并持久化");
        String name = "张三";
        Teacher teacher = new Teacher();
        teacher.setName(name);
        teacherRepository.save(teacher);

        log.info("查询该教师");
        Teacher teacher1 = teacherService.getOne(teacher.getId());

        log.info("断言");
        assertThat(teacher1.getName()).isEqualTo(name);
    }

    @Test
    public void saveTest() {
        log.info("新建教师");
        Teacher teacher = new Teacher();

        log.info("保存教师");
        teacherService.save(teacher);

        log.info("查询并断言");
        Teacher teacher1 = teacherRepository.findOne(teacher.getId());
        assertThat(teacher1).isNotNull();
    }

    @Test
    public void updateTest() {
        log.info("旧教师新建并持久化");
        Teacher zhangsanTeacher = new Teacher();
        zhangsanTeacher.setName("张三");
        zhangsanTeacher.setUsername("zhangsan");
        zhangsanTeacher.setEmail("zhangsan@yunzhiclub.com");
        zhangsanTeacher.setSex(true);
        teacherRepository.save(zhangsanTeacher);

        log.info("新教师新建");
        Teacher lisiTeacher = new Teacher();
        lisiTeacher.setName("李四");
        lisiTeacher.setUsername("lisi");
        lisiTeacher.setEmail("lisi@yunzhiclub.com");
        lisiTeacher.setSex(false);

        log.info("更新信息");
        Long id = zhangsanTeacher.getId();
        teacherService.update(id, lisiTeacher);

        log.info("查询并断言");
        Teacher newTeacher = teacherRepository.findOne(id);
        assertThat(newTeacher.getName()).isEqualTo(lisiTeacher.getName());
        assertThat(newTeacher.getUsername()).isEqualTo(lisiTeacher.getUsername());
        assertThat(newTeacher.getEmail()).isEqualTo(lisiTeacher.getEmail());
        assertThat(newTeacher.isSex()).isEqualTo(lisiTeacher.isSex());
    }

    @Test
    public void deleteTest() {
        log.info("新建教师并保存");
        Teacher teacher = new Teacher();
        teacherRepository.save(teacher);

        log.info("删除");
        Long id = teacher.getId();
        teacherService.delete(id);

        log.info("查询并断言");
        Teacher newTeacher = teacherRepository.findOne(id);
        assertThat(newTeacher).isNull();
    }
}