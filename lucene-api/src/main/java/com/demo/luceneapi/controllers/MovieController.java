package com.demo.luceneapi.controllers;

import com.demo.luceneapi.entities.MovieEntity;
import com.demo.luceneapi.services.MovieService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class MovieController {

    @Autowired
    private MovieService movieService;


    @GetMapping("/api/movies/{name}")
    public ResponseEntity<List<MovieEntity>> searchMovies(@PathVariable("name") String name){
//        System.out.println(name);
        List<MovieEntity> result = movieService.searchMovies(name);

        if(result== null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(result);
    }
}
