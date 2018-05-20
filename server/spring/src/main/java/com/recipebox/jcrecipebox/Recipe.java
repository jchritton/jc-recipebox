package com.recipebox.jcrecipebox;

public class Recipe {
    private final long id;
    private String description;
    private long authorId;
    private float avgRating;
    private long usersSaved;
    private long usersMade;

    public Recipe(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }
}