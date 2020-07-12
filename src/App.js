import React from "react";
import "./App.css";

function BlackDog(){
  this.name = '흰둥이';
  return{
    name:'검둥이',
    bark:function(){
      console.log(this.name + ': 멍멍!');
    }
  }
}

const blackDog = new BlackDog();
blackDog.bark(); // 검둥이: 멍멍!

function WhitDog(){
  this.name = '흰둥이';
  return{
    name:'검둥이',
    bark: () => {console.log(this.name + ': 멍멍!');}
  }
}

const whiteDog = new WhitDog();
whiteDog.bark(); // 흰둥이 : 멍멍!

const App = () => {
  const name = "리액트";

  return <div className="react">{name}</div>;

};

// 일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.

export default App;
