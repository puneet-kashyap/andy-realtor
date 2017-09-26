import React from 'react';

export const Slider = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{'margin':'10px 0px'}}>
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>

      <div className="carousel-inner">

        <div className="item active">
          <a href="/">
            <img src={require('../../Images/slider/img38.jpg')} className="img-responsive" alt="Andy Nagpal Realtor" />
          </a>
        </div>
        <div className="item">
          <a href="/">
            <img src={require('../../Images/slider/img11.jpg')} className="img-responsive" alt="Andy Nagpal Realtor" />
          </a>
        </div>
        <div className="item">
          <a href="/">
            <img src={require('../../Images/slider/img39.jpg')} className="img-responsive" alt="Andy Nagpal Realtor" />
          </a>
        </div>
        <div className="item">
          <a href="/">
           <img src={require('../../Images/slider/img6.jpg')} className="img-responsive" alt="Andy Nagpal Realtor" />
         </a>
        </div>

      </div>

      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}


export const Recommendation = () => {
  return (
    <div className="hidden-xs">
    <div className="row">
        <div className="col-lg-12 text-center">
            <h1>What our Clients say about us?</h1>
            <hr className="star-primary"></hr>
        </div>
    </div>

    <div id="myCarousel" className="carousel slide" style={{'padding':'30px 150px'}}  data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">

        <div className="item">
          <p><i>
            I found Andy Nagpal and his Real Estate Team while looking for investment property on the internet couple of years back. I went and saw him in his office and told him what I was looking for at that time. Then my plans changed since I was expanding my restaurant business and I let Andy know about it and he was very understanding. Andy stayed in touch with me through regular emails and phone. Recently me and my wife decided to sell our home and we called Andy to come and take a look at our home. Andy helped us determine what work needed to be done and what we should not worry about. When the work was done, Andy and his team started their marketing campaign and brought in multiple offers immediately. We were impressed with the research and summary that Andy put into each offer so we could sort all of the details. Andy even Guaranteed to Sell the Buyers Home at 100% of the Asking Price or he would pay the difference, if the Buyers bought our home. With in just a few days on the market, Andy and his team negotiated well for us and in less time than expected, his team Sold our Home. We got over $51,000 (13%) more than our Asking Price. I am very impressed by the overall professionalism, service, and personalized treatment that Andy Nagpal and his team provided &ndash; Mayank &amp; Vineet Sood.
          </i></p>
        </div>
        <div className="item active">
          <p><i>
            My wife and I purchased our home in Brampton through Andy Nagpal. We met with Andy after meeting with several other agents. We chose to work with him because of his knowledge, professionalism, and expertise. He walked us through the process step by step, took the time to learn what we&nbsp; were looking for, explained everything in simple terms, and was honest at all times. He is a man of unquestionable integrity. He remained in constant contact at all times, which was one way that he showed us he cared. It took my wife and I a few months to finally decide on a home and he displayed great patience with us. He really gave my wife and I peace of mind and made the home buying experience smooth and comfortable. Even after we purchased the home, Andy was not done. He offered a great deal of advice on fixing and upgrading certain areas of the home. He even checked up on us in order to see how we were doing every so often. We would recommend Andy Nagpal to anyone that is looking for a professional, honest, hard-working, no games agent that really cares about you and your family&rsquo;s needs; not the money. He is not happy until you are happy. Thanks Andy. - Ashwani &amp; Madhu Aggarwal
          </i></p>
        </div>
        <div className="item">
          <p><i>
            Andy Nagpal sold our home in less than a week for more than our asking price and then helped us buy a home of our dream. We would recommend him to anyone looking to Buy or Sell a home.
          </i></p>
        </div>

      </div>

      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
  )
}
