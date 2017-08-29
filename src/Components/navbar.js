import React from 'react';
import SubNav from './subnav'

const Navbar = () => {
    return (
        <div>
          <nav className="hidden-xs navbar navbar-custom">
              <img src='https://andynagpal.com/assets/uploads/theme/FWHEADER_FWHEADER_Andy%20Banner%201%20-%20Copy%20(2).jpg'
              className="img-responsive img-rounded" alt="Andy Banner" />
          </nav>
          <SubNav />
        </div>
    );
}
export default Navbar;
