import React from 'react';
import { SearchBar } from 'antd-mobile';

import Header from '../index/header'
// import title from '../redux/title';
// import {  connect } from 'react-redux'

class Home extends React.Component {
	state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    value:'123',
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['1', '2', '3'],
      });
    }, 100);
  }

    render() {
        return (
                <div>
                	<Header />
                	<div className="home_search">
						 <SearchBar
					        placeholder="Search"
					        onSubmit={value => console.log(value, 'onSubmit')}
					        onClear={value => console.log(value, 'onClear')}
					        onFocus={() => console.log('onFocus')}
					        onBlur={() => console.log('onBlur')}
					        showCancelButton
					        onChange={this.onChange}
					      />
                	</div>
                	<div>
                		<p className="home_list_p">近期热门</p>
						<div className="home_list">
							<div className="home_list_div">
								<ul>
									<li>
										<img src={require('../images/3.png')} alt="" />
										<span>react</span>
									</li>
									<li>
										<img src={require('../images/2.png')} alt="" />
										<span>react</span>
									</li>
									<li>
										<img src={require('../images/1.png')} alt="" />
										<span>react</span>
									</li>
								</ul>
							</div>
							<div className="home_list_div">
								<ul className="ul_two">
									<li>
										<img src={require('../images/sky1.jpg')} alt="" />
										<span>react</span>
									</li>
									<li>
										<img src={require('../images/sun.jpg')} alt="" />
										<span>react</span>
									</li>
									<li>
										<img src={require('../images/sky.jpg')} alt="" />
										<span>react</span>
									</li>
								</ul>
							</div>
						</div>
						<p className="home_list_p">常用框架</p>
						<div className="list_ul">
							<ul>
								<li>
									<div className="list_ul_img">
										<img src={require('../images/sun.jpg')} alt="" />
									</div>
									<span className="list_ul_span">Angular</span>
								</li>
								<li>
									<div className="list_ul_img">
										<img src={require('../images/sky.jpg')} alt="" />
									</div>
									<span className="list_ul_span">React</span>
								</li>
								<li>
									<div className="list_ul_img">
										<img src={require('../images/sky1.jpg')} alt="" />
									</div>
									<span className="list_ul_span">Vue</span>
								</li>
							</ul>
						</div>
						<p className="home_list_p">函数封装</p>
						<div className="list_ul_four">
							<ul className="clearfix">
								<li>
									<div className="list_ul_img_four">
										<img src={require('../images/sky.jpg')} alt="" />
										<p>基础函数封装</p>
									</div>
								</li>
								<li>
									<div className="list_ul_img_four">
										<img src={require('../images/sun.jpg')} alt="" />
										<p>轮播图及动画封装</p>
									</div>
								</li>
								<li>
									<div className="list_ul_img_four">
										<img src={require('../images/sky1.jpg')} alt="" />
										<p>身份证验证封装</p>
									</div>
								</li>
								<li>
									<div className="list_ul_img_four">
										<img src={require('../images/1.png')} alt="" />
										<p>倒计时函数封装</p>
									</div>
								</li>
							</ul>
						</div>
                	</div>
                	<div className="footer"></div>
                </div>
        );
    }
}

export default Home;