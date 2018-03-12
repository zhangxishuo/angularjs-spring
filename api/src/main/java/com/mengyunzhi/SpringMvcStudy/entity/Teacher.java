package com.mengyunzhi.SpringMvcStudy.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * create by zhangxishuo
 * 教师实体
 */
@Entity
@Data
@NoArgsConstructor
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;                 // id

    private String name;             // 姓名
    private String username;         // 用户名
    private String email;            // 邮箱
    private boolean sex;             // 性别
}
