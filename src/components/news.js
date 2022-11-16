import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7"
    let data =  await fetch(url)
    let parsedData = await data.json()
    this.setState({
        articles : parsedData.articles
    })
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey-Top Headlines </h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0,44) : "title is none"}
                  description={element.description ? element.description.slice(0,88): " description is null"}
                  imageUrl={element.urlToImage}
                  newsUrl = {element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
