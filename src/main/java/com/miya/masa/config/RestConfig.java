package com.miya.masa.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JSR310Module;
import com.miya.masa.domain.model.user.User;

@Configuration
public class RestConfig extends RepositoryRestConfigurerAdapter {

  @Override
  public void configureJacksonObjectMapper(ObjectMapper objectMapper) {
    objectMapper.registerModule(new JSR310Module());
  }

  @Override
  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
    config.setBasePath("api");
    config.exposeIdsFor(User.class);
  }


}
