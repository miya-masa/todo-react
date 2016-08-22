package com.miya.masa.domain.model.todo;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import com.miya.masa.domain.model.user.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Todo {

  @Id
  @GeneratedValue
  private Long id;

  @Column(name = "COMPLETE")
  private boolean complete;

  @Column(name = "LIMIT_DATE")
  private LocalDateTime limitDate;

  @ManyToOne
  private User user;

  @Column(name = "TODO")
  private String todo;

  @CreatedDate
  private LocalDateTime createDate;

  @LastModifiedDate
  private LocalDateTime updateTime;

}
