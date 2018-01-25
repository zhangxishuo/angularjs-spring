package com.mengyunzhi.SpringMVC.service;

import com.mengyunzhi.SpringMVC.repository.Klass;
import com.mengyunzhi.SpringMVC.repository.KlassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by zhangxishuo on 2018/1/25
 */
@Service
public class KlassServiceImpl implements KlassService {
    @Autowired
    KlassRepository klassRepository;                   // 班级仓库接口

    public Klass save(Klass klass) {
        return klassRepository.save(klass);            // 保存并返回
    }
}
