import React from 'react';
import { List } from 'antd-mobile';

import Header from '../index/header'
import Background from '../images/sky.jpg';
// import title from '../redux/title';
// import {  connect } from 'react-redux'

var bgstyle = {
	background:`url(${Background}) 50% 70%`
} 
const Item = List.Item;
class About extends React.Component {
    render() {
        return (
                <div>
                	<Header />
					<div className="mine_page">
						<div className="mine_header" style={bgstyle}>
							<div>
								<img src={require('../images/3.png')} alt="" />
							</div>
							<p>名字</p>
							<p>略略略</p>
						</div>
						<div className="mine_list">
							<ul>
								<li className="mine_show">
									<p>2年</p>
									<p>开发经验</p>
								</li>
								<li className="mine_download">
									<p>100</p>
									<p>累计项目</p>
								</li>
							</ul>
							<List>
								<Item
						          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
						          onClick={() => {}}
						          arrow="horizontal"
						          style={{marginTop:'1rem',marginBottom:'1rem',paddingTop:'.5rem',paddingBottom:'.5rem'}}
						        >
						          二维码
						        </Item>
						        <Item
						          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
						          arrow="horizontal"
						          onClick={() => {}}
						          style={{marginTop:'1rem',marginBottom:'1rem',paddingTop:'.5rem',paddingBottom:'.5rem'}}
						        >Download</Item>
						        <Item
						          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
						          onClick={() => {}}
						          arrow="horizontal"
						          style={{marginTop:'1rem',marginBottom:'1rem',paddingTop:'.5rem',paddingBottom:'.5rem'}}
						        >
						          Github
						        </Item>
						     </List>
						</div>
					</div>
					<div className="footer"></div>
                </div>
        );
    }
}

export default About;