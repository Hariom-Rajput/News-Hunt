import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1c25900aad354330872451929eb0f4f6";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({articles : parseData.articles})
    }

    render() {
        return (
            <div className="container my-3">
                <h1>News-Hunt Top Headlines</h1>
                <div className="row" >
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url} >
                            < NewsItem title={element.title? element.title:" "} description={element.description ?element.description:" "} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div >
        )
    }
}

export default News

/*
loop of articles array-->
{this.state.articles.map((element) => {



*/