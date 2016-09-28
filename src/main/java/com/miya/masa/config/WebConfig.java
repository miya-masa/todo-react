package com.miya.masa.config;

import java.util.concurrent.TimeUnit;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class WebConfig {

  @Bean
  public ServletRequestListener servletRequestListener() {

    return new ServletRequestListener() {

      @Override
      public void requestInitialized(ServletRequestEvent sre) {
        log.info("Sleep Thread");
        try {
          TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException e) {
          throw new RuntimeException(e);
        }
        log.info("Resume Thread");

      }

      @Override
      public void requestDestroyed(ServletRequestEvent sre) {

      }
    };

  }


}
