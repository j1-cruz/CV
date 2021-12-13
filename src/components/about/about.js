import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
     <section id="about">
      <div>
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">About</div>
                <p>Hi! I'am  Juan Cruz Membrilla. Developer web front end.</p>
                <p>{resumeData.roleDescription}.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">Personal information</div>
                <div className="row">
                  <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                  <div className="col-sm-8">30</div>
                </div>
                <div className="row">
                  <div className="col-sm-4"><strong className="text-uppercase">DNI:</strong></div>
                  <div className="col-sm-8">35.869.078</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                  <div className="col-sm-8">mebrillajc@gmail.com</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4"><strong className="text-uppercase">Mobile: </strong></div>
                  <div className="col-sm-8">2494-481402</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4"><strong className="text-uppercase">English:</strong></div>
                  <div className="col-sm-8">Basic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
