import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import ReactMarkdown from "react-markdown";
import { useStores } from "../utils/contexts";
import { googaxData } from "../googax/index";

import "./googax.scss";
import { delay } from "../utils/promises";

const searchFor = term => {
  if(!term || term.length < 3) { return []; }
  const lTerm = (term || "").toLowerCase();
  const results = googaxData.filter(x =>
    x.content.toLowerCase().includes(lTerm) ||
    x.tags.some(tag => tag.toLowerCase().includes(lTerm)) ||
    x.title.toLowerCase().includes(lTerm)
  );

  return results;
};

export const Googax = observer(props => {
  const { os } = useStores();

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  const term = os.searchTerm;
  const results = searchFor(term);

  const updateResults = async (e) => {
    e.preventDefault();
    
    setIsLoading(true);
    await delay(500);
    setIsLoading(false);
  };

  return (
    <div className="app bg googax">
      <div className="column center-content-top full-y">
        <div className="row">
          <h1>Googax</h1>
        </div>
        <div className="row search-bar">
          <form className="row" onSubmit={updateResults}>
            <input
              type="text"
              className="search"
              value={term}
              onChange={e => os.searchTerm = e.target.value}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <Article article={article} closeArticle={() => setArticle(null)} />
        <Results article={article} results={results} setArticle={setArticle} isLoading={isLoading} />
      </div>
    </div>
  );
});

const Article = ({article, closeArticle}) => {
  if (!article) { return null; }
  return (
    <div className="column full-x article">
      <div className="row header">
        <h2>{article.title}</h2>
        <button className="btn btn-close" onClick={closeArticle}>x</button>
      </div>
      <ReactMarkdown source={article.content} />
    </div>
  );
}

const Results = ({ results, article, setArticle, isLoading }) => {
  if (article) { return null; }
  if (isLoading) {
    return (
      <div className="column full-x results center-content-top">
        <span className="tx-xl tx-heavy tx-center">...</span>
      </div>
    );
  }
  
  return (
    <div className="column full-x results">
      <div className="results-list column">
        {results.length === 0 && <p className="tx-center">No Results Found</p>}
        {results.map(result => (
          <article
            className="result column"
            key={result.id}
            onClick={() => setArticle(result)}
          >
            <div className="title tx-medium tx-l">{result.title}</div>
            <div className="title tx-medium tx-m">{result.category}</div>
            <div className="blurb">
              <ReactMarkdown source={result.blurb} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
