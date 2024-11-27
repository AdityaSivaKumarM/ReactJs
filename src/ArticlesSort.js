import React, { useState } from "react";
import Articles from "./components/Articles";
import ButtonGroup from "react-bootstrap/ButtonGroup"; 
import Button from "react-bootstrap/Button"; 

const title = "React Sorting articles";

function ArticlesSorting({articles}) {
  const [articlesList, setArticlesList] = useState(articles);

  const sortByUpvotes = () => {
    var newArticles = [];
    Object.assign(newArticles, articlesList);
    newArticles.sort((a, b) => {
      if (a.upvotes > b.upvotes) {
        return -1;
      }
      if (a.upvotes < b.upvotes) {
        return 1;
      }
      return 0;
    });

    setArticlesList(newArticles);
  };

  const sortByDates = () => {
    var newArticles = [];
    Object.assign(newArticles, articlesList);
    newArticles.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate > bDate) {
        return -1;
      }
      if (aDate < bDate) {
        return 1;
      }
      return 0;
    });

    setArticlesList(newArticles);
  };

  return (
    <div className="App">
      <h1> {title} </h1>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <Button
          data-testid="most-upvoted-link"
          className="small" variant="success"
          onClick={() => sortByUpvotes()}
        >
          Most Upvoted
        </Button>
        <Button
          data-testid="most-recent-link"
          className="small" variant="success"
          onClick={() => sortByDates()}
        >
          Most Recent
        </Button>
      </div>
      <Articles articles={articlesList} />
    </div>
  );
}

export default ArticlesSorting;