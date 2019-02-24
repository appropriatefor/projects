import React, { Component } from 'react';

import './App.css';
import Searchbar from './components/searchbar/searchbar';
import ArticleList from './components/article-list.js/article-list';

class App extends Component {
  constructor() {
    super();
    this.getArticleData = this.getArticleData.bind(this);
    this.state = {
      searchInput: '',
      pages: [],
    };
  }

  async getArticleData(searchInput) {
    if (searchInput.length > 0) {
      this.setState({ searchInput });
      const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch=${searchInput}&gsrnamespace=0&gsrlimit=20&prop=extracts%7Cpageimages&exchars=200&exlimit=max&explaintext=true&exintro=true&piprop=thumbnail&pithumbsize=800&origin=*`;
      const response = await fetch(url);
      const result = await response.json();
      const pages = result.query.pages;
      const pagesArray = Object.keys(pages).map((key) => {
        return pages[key];
      })

      this.setState({pages: pagesArray});
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="search-title">Wikipedia Search</h1>
        <Searchbar getArticleData={this.getArticleData} />
        <ArticleList pages={this.state.pages} />
      </div>
    );
  }
}

export default App;
