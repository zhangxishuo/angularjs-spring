package com.mengyunzhi.SpringMvcStudy.controller;

import com.google.gson.Gson;
import com.mengyunzhi.SpringMvcStudy.entity.Teacher;
import com.mengyunzhi.SpringMvcStudy.repository.TeacherRepository;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * create by zhangxishuo
 */
public class TeacherControllerTest extends ControllerTest {

    private static final String url = "/Teacher/";

    private static final String name = "张三";

    private static final Logger logger = Logger.getLogger(TeacherControllerTest.class.getName());

    @Autowired
    private MockMvc mockMvc;            // 模拟请求

    @Autowired
    private TeacherRepository teacherRepository;     // 教师

    @Test
    public void getAllTest() throws Exception {
        this.mockMvc
                .perform(MockMvcRequestBuilders.get(url))
                .andExpect(status().isOk());
    }

    @Test
    public void getOneTest() throws Exception {
        logger.info("新建教师并保存");
        Teacher teacher = new Teacher();
        teacher.setName(name);
        teacherRepository.save(teacher);

        this.mockMvc
                .perform(MockMvcRequestBuilders.get(url + teacher.getId().toString()))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value(name));
    }

    @Test
    public void saveTest() throws Exception {
        this.mockMvc
                .perform(MockMvcRequestBuilders.post(url)
                        .content("{}")
                        .header("content-type", MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());
    }

    @Test
    public void updateTest() throws Exception {
        logger.info("新建教师并保存");
        Teacher teacher = new Teacher();
        teacherRepository.save(teacher);
        Long id = teacher.getId();

        logger.info("新建教师字符串");
        Teacher teacher1 = new Teacher();
        teacher1.setName(name);
        Gson gson = new Gson();
        String json = gson.toJson(teacher1);

        this.mockMvc
                .perform(MockMvcRequestBuilders.put(url + id)
                        .content(json)
                        .header("content-type", MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        logger.info("查询并断言");
        Teacher newTeacher = teacherRepository.findOne(id);
        assertThat(newTeacher.getName()).isEqualTo(name);
    }

    @Test
    public void deleteTest() throws Exception {
        logger.info("新建教师并保存");
        Teacher teacher = new Teacher();
        teacherRepository.save(teacher);
        Long id = teacher.getId();

        this.mockMvc
                .perform(MockMvcRequestBuilders.delete(url + id))
                .andExpect(status().isOk());

        logger.info("查询并断言");
        Teacher newTeacher = teacherRepository.findOne(id);
        assertThat(newTeacher).isNull();
    }
}