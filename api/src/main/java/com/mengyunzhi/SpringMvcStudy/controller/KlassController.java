package com.mengyunzhi.SpringMvcStudy.controller;

import com.mengyunzhi.SpringMvcStudy.entity.Klass;
import com.mengyunzhi.SpringMvcStudy.service.KlassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * create by zhangxishuo
 */
@RestController
@RequestMapping("/Klass")
public class KlassController {

    private final KlassService klassService;         // 班级

    @Autowired
    public KlassController(KlassService klassService) {
        this.klassService = klassService;
    }

    @GetMapping("/")
    public Iterable<Klass> getAll() {
        return klassService.getAll();
    }

    @GetMapping("/{id}")
    public Klass getOne(@PathVariable Long id) {
        return klassService.getOne(id);
    }

    @PostMapping("/")
    public Klass save(@RequestBody Klass klass) {
        return klassService.save(klass);
    }

    @PutMapping("/{id}")
    public Klass update(@PathVariable Long id, @RequestBody Klass klass) {
        return klassService.update(id, klass);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        klassService.delete(id);
    }
}
