import React from 'react';
import './navSecondary.styles.scss';
import { Link } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';


const NavSecondary = () => {
  return (
    <div className='global-banner'>
      <div className='global-utility'>
        <div className='global-utility-region'>
          <ReactFlagsSelect
            defaultCountry="PH" 
            countries={["US", "PH"]}
            customLabels={{"US": "US", "PH" : "PH"}}
          />
        </div>
        <div className='menu-utility-user'>
          <Link to='/stores'>Stores</Link>
          <Link to='/login'>Log in</Link>
        </div>
      </div>
      <div className='global-promo-wrapper'>
        <div 
          className="global-promo" 
          id="global-promo" 
          data-aligned="center" 
          style={{
            paddingLeft: '219px',
            paddingRight: '229px'
          }}
          >
            <p style={{textAlign: 'center'}}>
              <strong>
                <a 
                  href="https://www.underarmour.com.ph/en-ph/outlet/"
                  style={{
                    textDecoration: 'none'
                  }}
                >
                  <span className="promo-deal">
                    <font color="white">END OF SEASON SALE </font>
                  </span>
                    <font color="white">UP TO 40% OFF</font>
                </a>
              </strong>
            </p>
            {/*<style type="text/css">.global-utility { position: absolute; right: 0; }</style>*/}
        </div>      
      </div>
    </div>
  );
};

export default NavSecondary;