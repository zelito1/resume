import React from 'react';
import { Grid } from 'antd-mobile';
import Background from '../images/sky.jpg';

import Header from '../index/header'

const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: `${Background}`,
}));

class Product extends React.Component {

    render() {
    	// console.log(this.props)
        return (
        	<div>
        		<Header />
                  <Grid data={data}
                      columnNum={2}
                      renderItem={dataItem => (
                        <div style={{ padding: '12.5px' }}>
                          <img src={dataItem.icon} style={{ width: '100%', height: '100%' }} alt="" />
                          <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                            <span>略略略略略略</span>
                          </div>
                        </div>
                      )}
                    />
                <div className="footer"></div>
            </div>
        );
    }
}

export default Product;