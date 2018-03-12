package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.entity.Klass;
import com.mengyunzhi.SpringMvcStudy.repository.KlassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * create by zhangxishuo
 */
@Service
public class KlassServiceImpl implements KlassService {

    private final KlassRepository klassRepository;          // 班级

    @Autowired
    public KlassServiceImpl(KlassRepository klassRepository) {
        this.klassRepository = klassRepository;
    }

    @Override
    public Iterable<Klass> getAll() {
        return klassRepository.findAll();
    }

    @Override
    public Klass getOne(Long id) {
        return klassRepository.findOne(id);
    }

    @Override
    public Klass save(Klass klass) {
        return klassRepository.save(klass);
    }

    @Override
    public Klass update(Long id, Klass klass) {
        Klass oldKlass = klassRepository.findOne(id);
        oldKlass.setName(klass.getName());
        oldKlass.setTeacher(klass.getTeacher());
        return klassRepository.save(oldKlass);
    }

    @Override
    public void delete(Long id) {
        klassRepository.delete(id);
    }
}
