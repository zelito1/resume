import React from 'react';
import { Accordion, List } from 'antd-mobile';

import Header from '../index/header'

class Test extends React.Component {
    render() {
        return (
                <div>
                	<Header />
                	<div className="test">
						<div className="top clearfix">
							<div className="top_div_left">
								<h3>
									<img src={require('../images/3.png')} alt="" />
								</h3>
							</div>
							<div className="top_div_right">
								<p> name: <span>1234</span></p>
								<p> birth: <span>1994/03/16</span></p>
								<p> tech: <span>技术</span></p>
								<p> tel: <span>12345678901</span></p>
								<p> email: <span>zelito@qq.com</span></p>
							</div>
	                	</div>
	                	<div className="technology_list">
	                		<div>
		                		<p>react</p>
							    <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
						            <Accordion.Panel header="Title 1">
						                <List className="my-list">
						              	<List.Item>content 1</List.Item>
						              	<List.Item>content 2</List.Item>
						              	<List.Item>content 3</List.Item>
						            </List>
						        </Accordion.Panel>
						        <Accordion.Panel header="Title 2" className="pad">this is panel content2 or otherthis is panel content2 or otherthis is panel content2 or otherthis is panel content2 or otherthis is panel content2 or otherthis is panel content2 or otherthis is panel content2 or otherthis is panel content2 or other</Accordion.Panel>
						        <Accordion.Panel header="Title 3" className="pad">
						            text text text text text text text text text text text text text text text
						        </Accordion.Panel>
						        </Accordion>
							</div>
							<div>
								<p>redux</p>
								<Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
						            <Accordion.Panel header="Title 1">
						                <List className="my-list">
							              	<List.Item>content 1</List.Item>
							              	<List.Item>content 2</List.Item>
							              	<List.Item>content 3</List.Item>
						            	</List>
						        	</Accordion.Panel>
						        </Accordion>
							</div>
						    <div>
								<p>ant-design</p>
								<Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
						            <Accordion.Panel header="Title 1">
						                <List className="my-list">
							              	<List.Item>content 1</List.Item>
							              	<List.Item>content 2</List.Item>
							              	<List.Item>content 3</List.Item>
						            	</List>
						        	</Accordion.Panel>
						        </Accordion>
							</div> 
	                	</div>
                	</div>
                	<div className="footer"></div>
                </div>
        );
    }
}

export default Test;