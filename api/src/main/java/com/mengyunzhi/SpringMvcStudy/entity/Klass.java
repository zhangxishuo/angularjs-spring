package com.mengyunzhi.SpringMvcStudy.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * create by zhangxishuo
 * 班级实体
 */
@Entity
@Data
@NoArgsConstructor
public class Klass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;                 // id

    private String name;             // 名称

    @ManyToOne
    private Teacher teacher;         // 辅导员
}
