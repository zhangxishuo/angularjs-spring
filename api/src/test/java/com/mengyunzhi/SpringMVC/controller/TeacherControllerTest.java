package com.mengyunzhi.SpringMVC.controller;

import com.mengyunzhi.SpringMVC.repository.Teacher;
import com.mengyunzhi.SpringMVC.repository.TeacherRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * 教师控制器单元测试
 * 张喜硕
 */

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class TeacherControllerTest {

    @Autowired
    MockMvc mockMvc;                                                // 模拟请求

    @Test
    public void getAll() throws Exception {
        String url = "/Teacher/";                                   // 定义url
        this.mockMvc
                .perform(get(url))                                  // 模拟用get方法访问url
                .andDo(print())                                     // 打印数据
                .andExpect(status().isOk());                        // 期待状态为Ok
    }
}