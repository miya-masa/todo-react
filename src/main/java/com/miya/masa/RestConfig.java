package com.miya.masa;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JSR310Module;

@Configuration
public class RestConfig extends RepositoryRestConfigurerAdapter {

  @Override
  public void configureJacksonObjectMapper(ObjectMapper objectMapper) {
    objectMapper.registerModule(new JSR310Module());
  }

}
