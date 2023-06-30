package com.demo.luceneapi.services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.hibernate.search.jpa.FullTextEntityManager;
import org.hibernate.search.jpa.Search;

import javax.persistence.EntityManagerFactory;

@NoArgsConstructor
@AllArgsConstructor
public class LuceneIndexServiceBean {

    private FullTextEntityManager fullTextEntityManager;

    public LuceneIndexServiceBean(EntityManagerFactory entityManagerFactory){
        fullTextEntityManager = Search.getFullTextEntityManager(entityManagerFactory.createEntityManager());
    }

    public void triggerIndexing(){
        try{
            fullTextEntityManager.createIndexer().startAndWait();
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
