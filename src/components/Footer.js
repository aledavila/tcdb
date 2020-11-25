import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='social'>
          <button className='twitter'>T</button>
          <button className='instagram'>I</button>
          <button className='facebook'>F</button>
        </div>

        <h6 className='copywrite'>© 2020 Tech Can [Do] Better</h6>
      </footer>
    );
  }
}

export default Footer;