import React, { Component } from 'react';
import Contents from './components/Contents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="description">
                <h1>법알못 가이드</h1>
			  	<h2>이렇게 질문해보세요!</h2>
                <div class="example">
                    <div class="line">대법원장의 임기는 몇년인가?</div>
                    <div class="line">공인중개사법에서 중개의 의미는?</div>
                    <div class="line">공무원이 선거에 나가려면 언제까지 공무원 직을 사퇴해야 하나요?</div>
                    <div class="line">국무총리가 사고로 직무를 수행할 수 없는 경우 정부조직법상 누가 직무를 대행하나요?</div>
                </div>
          </div>
        </header>
		<Contents />
      </div>
    );
  }
}

export default App;
 