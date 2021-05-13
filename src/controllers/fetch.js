const question_req = new Request('/api/posts', {
	method: "GET",
	headers: {
		'content-type': 'application/json',
	},
	body: JSON.stringify({
		question: this.state.question
	})
})
.then(response => response.json())
.then(response=>{
	return response.return_object.LegalInfo.AnswerInfo;
};