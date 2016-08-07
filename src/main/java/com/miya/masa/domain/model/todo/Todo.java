package com.miya.masa.domain.model.todo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.miya.masa.domain.model.user.User;

import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Todo {

  @Id
  @GeneratedValue
  private Long id;

  private String todo;

  @OneToOne
  private User user;

  public Todo() {

  }

}
