package com.demo.luceneapi.services;

import com.demo.luceneapi.entities.MovieEntity;
import lombok.AllArgsConstructor;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.core.SimpleAnalyzer;
import org.apache.lucene.index.Term;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.WildcardQuery;
import org.hibernate.search.jpa.FullTextEntityManager;
import org.hibernate.search.jpa.FullTextQuery;
import org.hibernate.search.jpa.Search;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class MovieService {

    private EntityManager entityManager;

    public List<MovieEntity> searchMovies(String name) {

         FullTextEntityManager fullTextEntityManager
                = Search.getFullTextEntityManager(entityManager);

         QueryBuilder queryBuilder = fullTextEntityManager.getSearchFactory().
                                    buildQueryBuilder().forEntity(MovieEntity.class).get();

        Query query = null;

        try{
            query =  queryBuilder.keyword().onField("title").matching(name).createQuery();
//            System.out.println(query);
//        Query query = new WildcardQuery(new Term("title", name+"*"));
            FullTextQuery fullTextQuery = fullTextEntityManager.createFullTextQuery(query, MovieEntity.class);
            List<MovieEntity> movies = fullTextQuery.getResultList();

//        System.out.println("Movies : " + movies);
            return  movies;
        } catch (Exception e){
            return Collections.emptyList();
        }
    }

}
