package com.miya.masa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/todo")
public class TodoController {

  @RequestMapping
  public String index() {
    return "index";
  }

}
