import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name: 'rock',
    url: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
  },
  scissors: {
    name: 'scissors',
    url: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png"
  },
  paper: {
    name: 'paper',
    url: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
  }
}

// box 2개
// 1. 가위 바위 보 버튼
// 2. 게임 진행
// 3. 컴퓨터는 랜덤하게 가위바위보 아이템을 선택한다.
// 4. 승패 결과를 알려준다. 
// 5. 승패 결과에 따라 테두리의 색이 바뀐다. (detail / 빨강, 초록, 검정)
function App() {

  const [select, setSelect] = useState('');
  const [comSelect, setComSelect] = useState('');
  const [userResult, setUserResult] = useState('');

  const play = (userSelect) => {
    setSelect(choice[userSelect]);
    let comChoice = random();
    setComSelect(comChoice);
    setUserResult(judgement(userSelect, comChoice))
  }

  const random = () => {
    let itemArray = Object.keys(choice); // 객체에 있는 key값만 추출해서 Array로 만들어줌
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  const judgement = (user, computer) => {
    if (user === computer.name) {
      return 'DEFEAT'
    } else if (user === 'scissors') {
      return (computer.name === 'rock' ? 'LOSE' : 'WIN');
    } else if (user === 'rock') {
      return (computer.name === 'paper' ? 'LOSE' : 'WIN')
    } else if (user === 'paper') {
      return (computer.name === 'scissors' ? 'LOSE' : 'WIN')
    }
  }


  return (
    <>
      <div className='main'>
        <Box title="YOU" item={select} result={userResult} />
        <Box title="COMPUTER" item={comSelect} result={userResult} />
      </div>
      <div className='main'>
        <button onClick={() => play('scissors')} className='btn'>가위</button>
        <button onClick={() => play('rock')} className='btn'>바위</button>
        <button onClick={() => play('paper')} className='btn'>보</button>
      </div>
    </>
  );
}

export default App;
