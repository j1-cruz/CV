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
                <div className="col-6 card">
                <div className="row">
                <div className="col-6 mt-4">
                  <img src={`${item.imgurl}`}  width={200} heigth={200} alt={item.name} />
                </div>
                  <div className="col-6">
                    <h4 className="">{item.name}</h4>
                    <p className="">{item.description}</p>
                    <a href={item.url}>go to see</a>
                  </div>
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
