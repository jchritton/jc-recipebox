package com.recipebox.jcrecipebox;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecipeController {
    @RequestMapping("/")
    public String home() {
        return "Hello Docker World";
    }

    @RequestMapping("/api")
    public Recipe apiTest() {
        return new Recipe(333);
    }
}