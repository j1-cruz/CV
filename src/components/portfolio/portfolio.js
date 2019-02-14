import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
          <h1>Check Out Some of My Works.</h1>
          <div className="row">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="card text-white col">
                  <img src={`${item.imgurl}`} className="card-img img-fluid" alt={item.name} />
                  <div className="card-img-overlay">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              )
            })
          }
          </div>
  </section>
        );
  }
}
