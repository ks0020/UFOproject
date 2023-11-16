package com.ufo.ufoproject.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/")
public class HomeController {
    @RequestMapping(value = "/",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getHome() {
        ModelAndView modelAndView = new ModelAndView("templates/home/home");
        return modelAndView;
    }

    @RequestMapping(value = "/prize",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getPrize() {
        ModelAndView modelAndView = new ModelAndView("templates/user/prize");
        return modelAndView;
    }

    @RequestMapping(value = "/review",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getReview() {
        ModelAndView modelAndView = new ModelAndView("templates/user/review");
        return modelAndView;
    }

    @RequestMapping(value = "/bookmark",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getBookmark() {
        ModelAndView modelAndView = new ModelAndView("templates/user/bookmark");
        return modelAndView;
    }

    @RequestMapping(value = "/following",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getFollowing() {
        ModelAndView modelAndView = new ModelAndView("templates/user/following");
        return modelAndView;
    }

    @RequestMapping(value = "/follower",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getFollower() {
        ModelAndView modelAndView = new ModelAndView("templates/user/follower");
        return modelAndView;
    }
}
