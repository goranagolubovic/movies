package com.demo.luceneapi.entities;

import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
@Indexed
@Table(name = "movie", schema = "movies", catalog = "")
public class MovieEntity {
    @Id@Column(name = "movie_id")
    private Integer movieId;
    @Basic@Column(name = "title")

    private String title;
    @Basic@Column(name = "budget")
    private Integer budget;
    @Basic@Column(name = "homepage")
    private String homepage;
    @Basic@Column(name = "overview")
    private String overview;
    @Basic@Column(name = "popularity")
    private BigDecimal popularity;
    @Basic@Column(name = "release_date")
    private Date releaseDate;
    @Basic@Column(name = "revenue")
    private Long revenue;
    @Basic@Column(name = "runtime")
    private Integer runtime;
    @Basic@Column(name = "movie_status")
    private String movieStatus;
    @Basic@Column(name = "tagline")
    private String tagline;
    @Basic@Column(name = "vote_average")
    private BigDecimal voteAverage;
    @Basic@Column(name = "vote_count")
    private Integer voteCount;

    public MovieEntity(Integer movieId, String title, Integer budget, String homepage, String overview, BigDecimal popularity, Date releaseDate, Long revenue, Integer runtime, String movieStatus, String tagline, BigDecimal voteAverage, Integer voteCount) {
        this.movieId = movieId;
        this.title = title;
        this.budget = budget;
        this.homepage = homepage;
        this.overview = overview;
        this.popularity = popularity;
        this.releaseDate = releaseDate;
        this.revenue = revenue;
        this.runtime = runtime;
        this.movieStatus = movieStatus;
        this.tagline = tagline;
        this.voteAverage = voteAverage;
        this.voteCount = voteCount;
    }

    public MovieEntity() {
    }

    public Integer getMovieId() {
        return this.movieId;
    }

    @Field
    public String getTitle() {
        return this.title;
    }

    public Integer getBudget() {
        return this.budget;
    }

    public String getHomepage() {
        return this.homepage;
    }

    public String getOverview() {
        return this.overview;
    }

    public BigDecimal getPopularity() {
        return this.popularity;
    }

    public Date getReleaseDate() {
        return this.releaseDate;
    }

    public Long getRevenue() {
        return this.revenue;
    }

    public Integer getRuntime() {
        return this.runtime;
    }

    public String getMovieStatus() {
        return this.movieStatus;
    }

    public String getTagline() {
        return this.tagline;
    }

    public BigDecimal getVoteAverage() {
        return this.voteAverage;
    }

    public Integer getVoteCount() {
        return this.voteCount;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setBudget(Integer budget) {
        this.budget = budget;
    }

    public void setHomepage(String homepage) {
        this.homepage = homepage;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public void setPopularity(BigDecimal popularity) {
        this.popularity = popularity;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public void setRevenue(Long revenue) {
        this.revenue = revenue;
    }

    public void setRuntime(Integer runtime) {
        this.runtime = runtime;
    }

    public void setMovieStatus(String movieStatus) {
        this.movieStatus = movieStatus;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public void setVoteAverage(BigDecimal voteAverage) {
        this.voteAverage = voteAverage;
    }

    public void setVoteCount(Integer voteCount) {
        this.voteCount = voteCount;
    }

    public boolean equals(final Object o) {
        if (o == this) return true;
        if (!(o instanceof MovieEntity)) return false;
        final MovieEntity other = (MovieEntity) o;
        if (!other.canEqual((Object) this)) return false;
        final Object this$movieId = this.getMovieId();
        final Object other$movieId = other.getMovieId();
        if (this$movieId == null ? other$movieId != null : !this$movieId.equals(other$movieId)) return false;
        final Object this$title = this.getTitle();
        final Object other$title = other.getTitle();
        if (this$title == null ? other$title != null : !this$title.equals(other$title)) return false;
        final Object this$budget = this.getBudget();
        final Object other$budget = other.getBudget();
        if (this$budget == null ? other$budget != null : !this$budget.equals(other$budget)) return false;
        final Object this$homepage = this.getHomepage();
        final Object other$homepage = other.getHomepage();
        if (this$homepage == null ? other$homepage != null : !this$homepage.equals(other$homepage)) return false;
        final Object this$overview = this.getOverview();
        final Object other$overview = other.getOverview();
        if (this$overview == null ? other$overview != null : !this$overview.equals(other$overview)) return false;
        final Object this$popularity = this.getPopularity();
        final Object other$popularity = other.getPopularity();
        if (this$popularity == null ? other$popularity != null : !this$popularity.equals(other$popularity))
            return false;
        final Object this$releaseDate = this.getReleaseDate();
        final Object other$releaseDate = other.getReleaseDate();
        if (this$releaseDate == null ? other$releaseDate != null : !this$releaseDate.equals(other$releaseDate))
            return false;
        final Object this$revenue = this.getRevenue();
        final Object other$revenue = other.getRevenue();
        if (this$revenue == null ? other$revenue != null : !this$revenue.equals(other$revenue)) return false;
        final Object this$runtime = this.getRuntime();
        final Object other$runtime = other.getRuntime();
        if (this$runtime == null ? other$runtime != null : !this$runtime.equals(other$runtime)) return false;
        final Object this$movieStatus = this.getMovieStatus();
        final Object other$movieStatus = other.getMovieStatus();
        if (this$movieStatus == null ? other$movieStatus != null : !this$movieStatus.equals(other$movieStatus))
            return false;
        final Object this$tagline = this.getTagline();
        final Object other$tagline = other.getTagline();
        if (this$tagline == null ? other$tagline != null : !this$tagline.equals(other$tagline)) return false;
        final Object this$voteAverage = this.getVoteAverage();
        final Object other$voteAverage = other.getVoteAverage();
        if (this$voteAverage == null ? other$voteAverage != null : !this$voteAverage.equals(other$voteAverage))
            return false;
        final Object this$voteCount = this.getVoteCount();
        final Object other$voteCount = other.getVoteCount();
        if (this$voteCount == null ? other$voteCount != null : !this$voteCount.equals(other$voteCount)) return false;
        return true;
    }

    protected boolean canEqual(final Object other) {
        return other instanceof MovieEntity;
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        final Object $movieId = this.getMovieId();
        result = result * PRIME + ($movieId == null ? 43 : $movieId.hashCode());
        final Object $title = this.getTitle();
        result = result * PRIME + ($title == null ? 43 : $title.hashCode());
        final Object $budget = this.getBudget();
        result = result * PRIME + ($budget == null ? 43 : $budget.hashCode());
        final Object $homepage = this.getHomepage();
        result = result * PRIME + ($homepage == null ? 43 : $homepage.hashCode());
        final Object $overview = this.getOverview();
        result = result * PRIME + ($overview == null ? 43 : $overview.hashCode());
        final Object $popularity = this.getPopularity();
        result = result * PRIME + ($popularity == null ? 43 : $popularity.hashCode());
        final Object $releaseDate = this.getReleaseDate();
        result = result * PRIME + ($releaseDate == null ? 43 : $releaseDate.hashCode());
        final Object $revenue = this.getRevenue();
        result = result * PRIME + ($revenue == null ? 43 : $revenue.hashCode());
        final Object $runtime = this.getRuntime();
        result = result * PRIME + ($runtime == null ? 43 : $runtime.hashCode());
        final Object $movieStatus = this.getMovieStatus();
        result = result * PRIME + ($movieStatus == null ? 43 : $movieStatus.hashCode());
        final Object $tagline = this.getTagline();
        result = result * PRIME + ($tagline == null ? 43 : $tagline.hashCode());
        final Object $voteAverage = this.getVoteAverage();
        result = result * PRIME + ($voteAverage == null ? 43 : $voteAverage.hashCode());
        final Object $voteCount = this.getVoteCount();
        result = result * PRIME + ($voteCount == null ? 43 : $voteCount.hashCode());
        return result;
    }

    public String toString() {
        return "MovieEntity(movieId=" + this.getMovieId() + ", title=" + this.getTitle() + ", budget=" + this.getBudget() + ", homepage=" + this.getHomepage() + ", overview=" + this.getOverview() + ", popularity=" + this.getPopularity() + ", releaseDate=" + this.getReleaseDate() + ", revenue=" + this.getRevenue() + ", runtime=" + this.getRuntime() + ", movieStatus=" + this.getMovieStatus() + ", tagline=" + this.getTagline() + ", voteAverage=" + this.getVoteAverage() + ", voteCount=" + this.getVoteCount() + ")";
    }
}
