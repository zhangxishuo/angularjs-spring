package com.mengyunzhi.SpringMvcStudy.repository;

import com.mengyunzhi.SpringMvcStudy.SpringMvcStudyApplicationTests;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.Assert.*;

/**
 * create by zhangxishuo
 */
public class KlassRepositoryTest extends SpringMvcStudyApplicationTests {

    @Autowired
    KlassRepository klassRepository;               // 班级

    @Test
    public void test() {
        klassRepository.findAll();
    }
}