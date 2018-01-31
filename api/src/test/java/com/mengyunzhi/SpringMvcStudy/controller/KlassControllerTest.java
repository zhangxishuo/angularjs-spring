package com.mengyunzhi.SpringMvcStudy.controller;

import com.google.gson.Gson;
import com.mengyunzhi.SpringMvcStudy.entity.Klass;
import com.mengyunzhi.SpringMvcStudy.repository.KlassRepository;
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
public class KlassControllerTest extends ControllerTest {

    private static final Logger logger = Logger.getLogger(KlassControllerTest.class.getName());

    private static final String url = "/Klass/";

    private static final String name = "classTest";

    @Autowired
    private KlassRepository klassRepository;       // 班级

    @Autowired
    private MockMvc mockMvc;                       // 模拟请求

    @Test
    public void getAll() throws Exception {
        this.mockMvc
                .perform(MockMvcRequestBuilders.get(url))
                .andExpect(status().isOk());
    }

    @Test
    public void getOne() throws Exception {
        logger.info("新建班级并保存");
        Klass klass = new Klass();
        klass.setName(name);
        klassRepository.save(klass);

        this.mockMvc
                .perform(MockMvcRequestBuilders.get(url + klass.getId()))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value(name));
    }

    @Test
    public void save() throws Exception {
        this.mockMvc
                .perform(MockMvcRequestBuilders.post(url)
                        .content("{}")
                        .header("content-type", MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());
    }

    @Test
    public void update() throws Exception {
        logger.info("新建班级并保存");
        Klass klass = new Klass();
        klassRepository.save(klass);

        logger.info("新建新班级字符串");
        Klass klass1 = new Klass();;
        klass1.setName(name);
        Gson gson = new Gson();
        String json = gson.toJson(klass1);

        this.mockMvc
                .perform(MockMvcRequestBuilders.put(url + klass.getId())
                        .content(json)
                        .header("content-type", MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        Klass newKlass = klassRepository.findOne(klass.getId());
        assertThat(newKlass.getName()).isEqualTo(name);
    }

    @Test
    public void delete() throws Exception {
        logger.info("新建班级并保存");
        Klass klass = new Klass();
        klassRepository.save(klass);

        this.mockMvc
                .perform(MockMvcRequestBuilders.delete(url + klass.getId()))
                .andExpect(status().isOk());

        Klass newKlass = klassRepository.findOne(klass.getId());
        assertThat(newKlass).isNull();
    }
}