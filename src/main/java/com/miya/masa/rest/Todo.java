package com.miya.masa.rest;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Todo {

  @Id
  @GeneratedValue
  private Long id;

  private String todo;

}
