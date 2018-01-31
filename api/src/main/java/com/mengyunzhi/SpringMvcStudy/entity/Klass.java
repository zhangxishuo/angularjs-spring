package com.mengyunzhi.SpringMvcStudy.entity;

import javax.persistence.*;

/**
 * create by zhangxishuo
 * 班级实体
 */
@Entity
public class Klass {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;                 // id

    private String name;             // 名称

    @ManyToOne
    private Teacher teacher;         // 辅导员

    public Klass() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }
}
