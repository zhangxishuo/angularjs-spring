package com.mengyunzhi.SpringMvcStudy.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * create by zhangxishuo
 * 班级实体
 */
@Entity
@Data
public class Klass {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;                 // id

    private String name;             // 名称

    @ManyToOne
    private Teacher teacher;         // 辅导员

    public Klass() {
    }
}
