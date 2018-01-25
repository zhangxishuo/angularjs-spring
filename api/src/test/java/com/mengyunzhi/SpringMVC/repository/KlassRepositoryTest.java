package com.mengyunzhi.SpringMVC.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

/**
 * 班级仓库单元测试
 * Created by zhangxishuo on 2018/1/25
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class KlassRepositoryTest {
    @Autowired
    KlassRepository klassRepository;                      // 班级仓库

    @Test
    public void getAllTest() {
        klassRepository.findAll();
    }
}