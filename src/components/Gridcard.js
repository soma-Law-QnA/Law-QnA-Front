import React from 'react';

function Card({ Answer }) {
	return (
		<div class="item">
            <div class="card">
                <article>
                    <h1 class="source">{Answer.source}</h1>
                    <p class="answer"><span>{Answer.answer}</span><span>({(Answer.confidence * 100).toFixed(3)}%)</span></p><br/>
                    <div class="clause-wrapper">
                        <span class="clause">{Answer.clause}</span>
                    </div>
					<div class="more">
                    	<a href={Answer.recommandURL} target='_blank'>상세 법률 보기</a>
					</div>
                </article>
            </div>
        </div>
	);
}
function NotFound(isSearched){
	console.log(isSearched.isSearched)
	return (
	<div class="not_found">
		<articale>
			<h1 class="error" style={{color: "#FFF", visibility: isSearched.isSearched ? 'visible' : 'hidden' }}>No Result Found</h1>
		</articale>
	</div>
	)
}

function Grid({ Answer,isSearched }) {
	console.log("in Grid", {Answer});
	if ({Answer}.Answer === null ||{Answer}.Answer.length == 0) return (<div><NotFound isSearched={isSearched}/></div>);
	else return (
		<div class="grid-card"> 
			{
				{Answer}.Answer.map(res =>
						<Card Answer={res} />
				)
			}
		</div>
	);
}
		
export default Grid;