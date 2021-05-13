import React from "react";
import Grid from './Gridcard'
import axios from 'axios';

const url = "https://qna.cdn.ntruss.com";

class Content extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			data: null,
			isSearched: false
		};
	};
	
	getAnswer = async () => {
		const questionValue = document.querySelector('.search-field').value;
		// API request
		const requestUrl = `${url}/qna?question=${questionValue}`;
		const res = await axios.get(requestUrl);
		const result = res.data;
		if (result.result === -1) {
			this.setState({
				data: null
			})
			return;
		}
		console.log(result);
		await this.setState({
			data: result.return_object.LegalInfo.AnswerInfo,
			isSearched: true
		});
	}

	onClick = () => {
		if (document.querySelector('.search-field').value != "") {
			this.getAnswer()
			// const question = document.querySelector('.search-field').value;
			// document.querySelector('.search-status h2').innerText = `${question}의 검색 결과`;
		}
	}
	
	onKeyPress = (e) => {
		if (e.key === "Enter") {
			this.getAnswer();
			// const question = document.querySelector('.search-field').value;
			// document.querySelector('.search-status h2').innerText = `${question}의 검색 결과`;
		}
	}
	
	render() {
		console.log(this.state.data);
		return (
			<div class="contents">
				<div class="search">
					<div class="search-box">
						<input type="text" class="search-field" placeholder="검색어를 입력해주세요." onKeyPress={this.onKeyPress}/>
						<button class="submit" onClick={this.onClick}><i class="fas fa-search"></i></button>
					</div>
				</div>
				<div class="search-status">
                    <h2></h2>
                </div>
				<div class="grid-wrapper">
					{
						<Grid Answer={this.state.data} isSearched={this.state.isSearched} />
					}
				</div>
			</div>
		);
	}
}

export default Content;
