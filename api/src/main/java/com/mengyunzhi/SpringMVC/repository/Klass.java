package com.mengyunzhi.SpringMVC.repository;

import javax.persistence.*;

/**
 * Created by zhangxishuo on 2018/1/24
 */
@Entity
public class Klass {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;                                    // 主键 id

    private String name;                                // 名称

    @ManyToOne
    private Teacher teacher;                            // 教师

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
