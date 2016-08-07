package com.miya.masa.domain.model.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class User {

  @Id
  @GeneratedValue
  private Long id;

  private String email;

  private String lastName;

  private String firstName;

  public User() {}

}
