package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.entity.Klass;
import com.mengyunzhi.SpringMvcStudy.repository.KlassRepository;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * create by zhangxishuo
 */
public class KlassServiceImplTest extends ServiceTest {

    private static final Logger logger = Logger.getLogger(KlassServiceImplTest.class.getName());

    private static final String name = "classTest";

    @Autowired
    private KlassRepository klassRepository;      // 班级

    @Autowired
    private KlassService klassService;            // 班级

    @Test
    public void getAllTest() {
        logger.info("新建班级并保存");
        Klass klass = new Klass();
        klassRepository.save(klass);

        logger.info("查询并断言");
        List<Klass> klasses = (List<Klass>) klassService.getAll();
        assertThat(klasses.size()).isNotZero();
    }

    @Test
    public void getOneTest() {
        logger.info("新建班级并保存");
        Klass klass = new Klass();
        klass.setName(name);
        klassRepository.save(klass);

        logger.info("查询并断言");
        Klass newKlass = klassService.getOne(klass.getId());
        assertThat(newKlass.getName()).isEqualTo(name);
    }

    @Test
    public void saveTest() {
        logger.info("新建班级");
        Klass klass = new Klass();

        logger.info("保存");
        klassService.save(klass);

        logger.info("查询并断言");
        Klass newKlass = klassRepository.findOne(klass.getId());
        assertThat(newKlass).isNotNull();
    }

    @Test
    public void updateTest() {
        logger.info("新建班级并保存");
        Klass klass = new Klass();
        klassRepository.save(klass);

        logger.info("新的班级");
        Klass klass1 = new Klass();
        klass1.setName(name);
        Long id = klass.getId();

        logger.info("更新信息");
        klassService.update(id, klass1);

        logger.info("断言更新成功");
        Klass newKlass = klassRepository.findOne(id);
        assertThat(newKlass.getName()).isEqualTo(name);
    }

    @Test
    public void deleteTest() {
        logger.info("新建班级并保存");
        Klass klass = new Klass();
        klassRepository.save(klass);
        Long id = klass.getId();

        logger.info("删除并断言");
        klassService.delete(id);
        Klass newKlass = klassRepository.findOne(id);
        assertThat(newKlass).isNull();
    }
}