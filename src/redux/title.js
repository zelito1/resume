import { createStore } from 'redux'

export default () => {
	//映射 Redux states 到components props
	let mapStateToProps = (state) => {
		return{
			title: state.title
		}
	}

	//映射 Redux actions 到 components props
	let mapDispatchToProps =(dispatch) => {
		return{
			onChangeTitle:(action) => dispatch(action)
		}
	}

	//reducer
	let changer = (state = {title:'略略略'}, action) => {
		switch (action.type) {
			case 'INDEX':
			return{
				title: '略略'
			}
			case 'PRODUCT':
			return{
				title: '生产'
			}
			case 'HOME':
			return{
				title: 'home'
			}
			case 'TEXT':
			return{
				title: '测试'
			}
			case 'ABOUT':
				return{
					title: '关于'
				}
			default: 
				return state
		}
	}

	//create store
	const title = createStore(changer);

	return{
		mapStateToProps,
		mapDispatchToProps,
		title
	}
}