package com.mengyunzhi.SpringMvcStudy.service;

import com.mengyunzhi.SpringMvcStudy.entity.Klass;

/**
 * create by zhangxishuo
 */
public interface KlassService {
    /**
     * 获取班级列表
     */
    Iterable<Klass> getAll();

    /**
     * 根据id获取班级
     */
    Klass getOne(Long id);

    /**
     * 保存班级
     */
    Klass save(Klass klass);

    /**
     * 更新班级
     */
    Klass update(Long id, Klass klass);

    /**
     * 删除班级
     */
    void delete(Long id);
}
