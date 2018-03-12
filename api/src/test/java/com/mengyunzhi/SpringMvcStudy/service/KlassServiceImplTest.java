package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.ServiceTest;
import com.mengyunzhi.SpringMvcStudy.entity.Klass;
import com.mengyunzhi.SpringMvcStudy.repository.KlassRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * create by zhangxishuo
 */
@Slf4j
public class KlassServiceImplTest extends ServiceTest {

    private static final String name = "classTest";

    @Autowired
    private KlassRepository klassRepository;      // 班级

    @Autowired
    private KlassService klassService;            // 班级

    @Test
    public void getAllTest() {
        log.info("新建班级并保存");
        Klass klass = new Klass();
        klassRepository.save(klass);

        log.info("查询并断言");
        List<Klass> klasses = (List<Klass>) klassService.getAll();
        assertThat(klasses.size()).isNotZero();
    }

    @Test
    public void pageTest() {
        PageRequest pageRequest = new PageRequest(0, 2);
        Page<Klass> klasses = klassService.page(pageRequest);
    }

    @Test
    public void getOneTest() {
        log.info("新建班级并保存");
        Klass klass = new Klass();
        klass.setName(name);
        klassRepository.save(klass);

        log.info("查询并断言");
        Klass newKlass = klassService.getOne(klass.getId());
        assertThat(newKlass.getName()).isEqualTo(name);
    }

    @Test
    public void saveTest() {
        log.info("新建班级");
        Klass klass = new Klass();

        log.info("保存");
        klassService.save(klass);

        log.info("查询并断言");
        Klass newKlass = klassRepository.findOne(klass.getId());
        assertThat(newKlass).isNotNull();
    }

    @Test
    public void updateTest() {
        log.info("新建班级并保存");
        Klass klass = new Klass();
        klassRepository.save(klass);

        log.info("新的班级");
        Klass klass1 = new Klass();
        klass1.setName(name);
        Long id = klass.getId();

        log.info("更新信息");
        klassService.update(id, klass1);

        log.info("断言更新成功");
        Klass newKlass = klassRepository.findOne(id);
        assertThat(newKlass.getName()).isEqualTo(name);
    }

    @Test
    public void deleteTest() {
        log.info("新建班级并保存");
        Klass klass = new Klass();
        klassRepository.save(klass);
        Long id = klass.getId();

        log.info("删除并断言");
        klassService.delete(id);
        Klass newKlass = klassRepository.findOne(id);
        assertThat(newKlass).isNull();
    }
}