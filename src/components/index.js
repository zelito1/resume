import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel, WingBlank, PullToRefresh, ListView} from 'antd-mobile';

import Header from '../index/header'

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'redux入门--阮一峰',
    des: 'react-redux入门教学，阮一峰个人博客',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'react官方API',
    des: 'react官网',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '小程序应用',
    des: '张小龙',
  },
];

// const data1 = Array.from(new Array(9)).map((i) => ({
//   icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
//   text: `name${i}`,
// }));

const NUM_ROWS = 20;
let pageIndex = 0;

const time = new Date();
const m = time.getMonth() + 1; 
const t = time.getFullYear() + "-" + m + "-"     
+ time.getDate()

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`${(pIndex * NUM_ROWS) + i}`);
  }
  return dataArr;
}


class Index extends React.Component {
	constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    // console.log(this.props)
    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
      data: ['1', '2', '3'],
	  imgHeight: 176,
	  time:t,
    };
  }
	
	componentDidMount() {
	  // simulate img loading
	  setTimeout(() => {
	    this.setState({
	      data: ['1', '2', '3'],
	    });
	  }, 100);

	  const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

	    setTimeout(() => {
	      this.rData = genData();
	      this.setState({
	        dataSource: this.state.dataSource.cloneWithRows(genData()),
	        height: hei,
	        refreshing: false,
	        isLoading: false,
	      });
	    }, 1500);
	}


	 onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        isLoading: false,
      });
    }, 600);
  };

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    // console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(++pageIndex)];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };

    render() {
    	// const {value, onadd} = this.props;
    	// const title = this.state.title;
    	 const separator = (sectionID, rowID) => (
	      <div
	        key={`${sectionID}-${rowID}`}
	        style={{
	          backgroundColor: '#F5F5F9',
	          height: 8,
	          borderTop: '1px solid #ECECED',
	          borderBottom: '1px solid #ECECED',
	        }}
	      />
	    );
	    let index = data.length - 1;
	    const row = (rowData, sectionID, rowID) => {
	      if (index < 0) {
	        index = data.length - 1;
	      }
	      const obj = data[index--];
	      return (
	        <div key={rowID}
	          style={{
	            padding: '0 15px',
	            backgroundColor: 'white',
	          }}
	        >
	          <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
	            {obj.title}
	          </div>
	          <div style={{ display: 'flex', padding: '15px' }}>
	            <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt="" />
	            <div style={{ display: 'inline-block' }}>
	              <div style={{ marginBottom: '14px',marginTop:'8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{obj.des}-{rowData}</div>
	              <div style={{ fontSize: '16px' }}>{this.state.time}</div>
	            </div>
	          </div>
	        </div>
	      );
	      };
        return (

                <div className="index">
	            	 <Header />
					
					<WingBlank>
				        <Carousel
				          autoplay={true}
				          autoplayInterval={2500}
				          infinite
				          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
				          // afterChange={index => console.log('slide to', index)}
				        >
				          {this.state.data.map(val => (
				            <a
				              key={val}
				              href={val===1?"http://www.baidu.com":val===2?"http://www.jd.com":"http://www.sina.com"}
				              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
				            >
				              <img
				                src={require(`./../images/${val}.png`)}
				                alt=""
				                style={{ width: '100%', height:'100%', verticalAlign: 'top' }}
				                onLoad={() => {
				                  // fire window resize event to change height
				                  window.dispatchEvent(new Event('resize'));
				                  this.setState({ imgHeight: 'auto' });
				                }}
				              />
				            </a>
				          ))}
				        </Carousel>
				      </WingBlank>
				      
				      <ListView
				        key={this.state.useBodyScroll ? '0' : '1'}
				        ref={el => this.lv = el}
				        dataSource={this.state.dataSource}
				        // renderHeader={() => <span>Pull to refresh</span>}
				        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
				          {this.state.isLoading ? 'Loading...' : 'Loaded'}
				        </div>)}
				        renderRow={row}
				        renderSeparator={separator}
				        useBodyScroll={this.state.useBodyScroll}
				        style={this.state.useBodyScroll ? {} : {
				          height: this.state.height,
				          border: '1px solid #ddd',
				          margin: '5px 0',
				        }}
				        pullToRefresh={<PullToRefresh
				          refreshing={this.state.refreshing}
				          onRefresh={this.onRefresh}
				        />}
				        onEndReached={this.onEndReached}
				        pageSize={5}
				      />

				      <div className="footer"></div>
                </div>
        );
    }
}

export default Index;