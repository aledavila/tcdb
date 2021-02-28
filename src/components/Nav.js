import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav class="nav-bar">
        <div className='nav-bar--title'>
          <div className='nav-bar--title__tech'>T</div>
          <div className='nav-bar--title__can'>C</div>
          <div className='nav-bar--title__bracket'>[<span>D</span>]</div>
          <div className='nav-bar--title__better'>B</div>
        </div>
      </nav>
  )}
}

export default Nav;
