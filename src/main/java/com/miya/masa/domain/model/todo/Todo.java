package com.miya.masa.domain.model.todo;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.TableGenerator;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import com.miya.masa.domain.model.user.User;
import com.miya.masa.util.CodeSource;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Todo implements CodeSource {

  @Id
  @GeneratedValue(strategy = GenerationType.TABLE,
      generator = "sequence")
  @TableGenerator(
      valueColumnName = "SEQUENCE_NO",
      pkColumnName = "TABLE_NAME",
      pkColumnValue = "TODO",
      table = "SEQUENCE",
      name = "sequence")
  private Long id;

  @Column(name = "CODE", nullable = false, unique = true)
  private String code;

  @Column(name = "TODO")
  private String todo;

  @Column(name = "COMPLETE", nullable = false)
  private Boolean complete;

  @Column(name = "LIMIT_DATE")
  private LocalDateTime limitDate;

  @ManyToOne
  private User user;

  @CreatedDate
  private LocalDateTime createDate;

  @LastModifiedDate
  private LocalDateTime updateTime;

  @Override
  public String getSource() {
    return id.toString();
  }

}
