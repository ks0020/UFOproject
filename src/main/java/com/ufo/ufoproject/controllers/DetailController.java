package com.ufo.ufoproject.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/")
public class DetailController {
    @RequestMapping(value = "/detail",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getDetail() {
        ModelAndView modelAndView = new ModelAndView("templates/detail/detail");
        return modelAndView;
    }
}