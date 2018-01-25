package com.mengyunzhi.SpringMVC.service;

import com.mengyunzhi.SpringMVC.repository.Klass;
import com.mengyunzhi.SpringMVC.repository.KlassRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by zhangxishuo on 2018/1/25
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class KlassServiceImplTest {

    @Autowired
    KlassRepository klassRepository;                 // 班级仓库接口

    @Autowired
    KlassService klassService;                       // 班级服务接口

    @Test
    public void save() {
        Klass klass = new Klass();                   // 新建班级
        klassService.save(klass);                    // 调用Service保存
        Klass newKlass = klassRepository.findOne(klass.getId());  // 查询
        assertThat(newKlass).isNotNull();            // 断言查询到的数据不为空
    }
}