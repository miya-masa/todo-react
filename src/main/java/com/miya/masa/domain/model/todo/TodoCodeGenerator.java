package com.miya.masa.domain.model.todo;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.miya.masa.util.CodeGenerator;
import com.miya.masa.util.SequenceReferrence;

@Service
public class TodoCodeGenerator implements CodeGenerator {

  private SequenceReferrence ref;

  @Override
  public String generate() {
    Long currentSequence = ref.current(Todo.class.getSimpleName().toUpperCase());
    return StringUtils.leftPad("TODO_" + currentSequence.toString(), 4, '0');
  }

}
