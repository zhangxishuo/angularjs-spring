package com.mengyunzhi.SpringMVC.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by zhangxishuo on 2018/1/25
 */

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class KlassControllerTest {

    @Autowired
    MockMvc mockMvc;                             // 模拟请求

    @Test
    public void saveTest() throws Exception {
        String url = "/Klass/";                  // 定义url
        this.mockMvc
                .perform(post(url)               // 模拟用post方法访问
                        .content("{}")           // 内容为空对象
                        .contentType(MediaType.APPLICATION_JSON_UTF8))  // 类型为utf-8
                .andDo(print())                  // 打印
                .andExpect(status().is(201));     // 期待状态为Ok
    }
}