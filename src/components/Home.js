import React from 'react';
import equityImage from '../images/achieveing_equity_v1.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className='homepage'>
        <div className='homepage--banner'>
          Tech Can
          <div className='homepage--brackets'>[<span>DO</span>]</div>
          Better.
        </div>

        <p className='homepage--mission'>
          We’re seeking equitable, measurable, and enforceable policy changes across the tech industry that directly affects present and future Black employees. 
        </p>

        <div className='homepage--list'>
          <div className='list'>
            <h6 className='list--number'>01</h6>
            <p className='list--statement'>
              <span>Equitable hiring, promotions and compensation.</span> Companies should be equitable in dealing with current and future employees.
            </p>
          </div>
          <div className='list'>
            <h6 className='list--number'>02</h6>
            <p className='list--statement'>
              <span>Investment in social equity.</span> Companies should be equitable in what they create and how they do business.
            </p>
          </div>
          <div className='list'>
            <h6 className='list--number'>03</h6>
            <p className='list--statement'>
              <span>Advocacy for equitable legislation.</span> Companies should only engage in the politcs if to advocate for eqitable policy.
            </p>
          </div>
        </div>

        <div className='homepage--download'>
          <img src={equityImage} alt={'achieving equity fist'} />
          <div className='download--message'>
            <span>Achieving Equity In Tech.</span> A practical starting place for what success looks like.
            <button className='download--button'>Download version 1.0</button>
          </div>
        </div>

        <div className='homepage--pledge'>
          <h6>We can’t do this alone.</h6>
          <p>Whether you’re a tech leader of a Fortune 500 company, or middle manager at a growing start-up, we’ll need your help in navigating the complexities of your role, sector, and geography. Systemic change requires the collective efforts of many, and there’s no contribution too small when done in conjunction with others.</p>

          {/* <div className='homepage--contact-us'>
            If you agree, we’d love to hear from you.
            <form className='contact-us--form'>
              <input placeholder='Name' />
              <input placeholder='Email' />
              <button>></button>
            </form>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;