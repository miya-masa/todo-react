package com.miya.masa.rest;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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

  private String user;

  public Todo() {

  }

}
