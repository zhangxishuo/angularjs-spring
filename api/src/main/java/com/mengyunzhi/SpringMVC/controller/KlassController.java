package com.mengyunzhi.SpringMVC.controller;

import com.mengyunzhi.SpringMVC.repository.Klass;
import com.mengyunzhi.SpringMVC.service.KlassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by zhangxishuo on 2018/1/25
 */

@RestController
@RequestMapping("/Klass")
public class KlassController {

    @Autowired
    KlassService klassService;                        // 班级服务接口

    @PostMapping("/")
    public Klass save(@RequestBody Klass klass) {
        return klassService.save(klass);              // 保存并返回
    }
}
