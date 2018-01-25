package com.mengyunzhi.SpringMVC.service;

import com.mengyunzhi.SpringMVC.repository.Klass;
import com.mengyunzhi.SpringMVC.repository.KlassRepository;
import org.apache.log4j.Logger;
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

    private final static Logger logger = Logger.getLogger(KlassServiceImplTest.class.getName());

    @Autowired
    KlassRepository klassRepository;                  // 班级仓库接口

    @Autowired
    KlassService klassService;                        // 班级服务接口

    @Test
    public void saveTest() {
        logger.info("新建班级");
        Klass klass = new Klass();

        logger.info("调用保存方法");
        klassService.save(klass);

        logger.info("去数据表中查询");
        Klass newKlass = klassRepository.findOne(klass.getId());

        logger.info("断言查询到的数据不为空");
        assertThat(newKlass).isNotNull();
    }
}