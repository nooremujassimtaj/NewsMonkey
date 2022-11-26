import React, { Component } from 'react';

class NewsItem extends Component {

    render() {
        let { title, description , imageUrl, newsUrl} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl ? "https://i2-prod.manchestereveningnews.co.uk/incoming/article24308693.ece/ALTERNATES/s615/2_bbcnewsJPG.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel ="norefferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">read more</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
