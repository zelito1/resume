import React from 'react';
import { NavBar } from 'antd-mobile';

import title from '../redux/title';
// import onchange from '../redux/onchange';
import { connect } from 'react-redux';


class Header extends React.Component {

	componentDidMount () {
		const url = window.location.href;
		this.props.onChangeTitle({

			type: url.indexOf('product') !== -1 ? 'PRODUCT' : url.indexOf('add') !== -1 ? 'HOME' : url.indexOf('test') !== -1 ? 'TEXT' : url.indexOf('about') !== -1 ? 'ABOUT' : 'INDEX' 
			
		})
		// console.log(this.props)
	}
	

	render() {
		// console.log(this.props)
		return(
			 <NavBar
			      mode="dark"
			      // onLeftClick={() => console.log('onLeftClick')}
			      // onClick={onadd}
			      // value={store.getState()}
			      // onadd = {()=>store.dispatch({type:'ADD_TODO'})}
			    >{this.props.title}</NavBar>
			)
	}
}

export default connect(
	title().mapStateToProps,
	title().mapDispatchToProps
)(Header);;