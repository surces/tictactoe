
import React, { useState, useRef } from 'react';


import circle_icon from '../src/circle.png'
import cross_icon from '../src/cross.png'


let data =  ["","","","","","","","","",];


const Tictactoe = () => {

let [count,setCount] = useState(0);
let [lock,setLock] = useState(false);
let titleRef = useRef(null);
let Box1 = useRef(null);
let Box2 = useRef(null);
let Box3 = useRef(null);
let Box4 = useRef(null);
let Box5 = useRef(null);
let Box6 = useRef(null);
let Box7 = useRef(null);
let Box8 = useRef(null);
let Box9 = useRef(null);

let Box_array = [Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8,Box9,];




const toggle = (e,num) =>{
    if(lock){
        return 0
    }
    if(count%2===0)
    {
        e.target.innerHTML = `<img src='${cross_icon}'>`;
        data[num]="x";
        setCount(++count);

    }
   
    else{
        e.target.innerHTML = `<img src='${circle_icon}'>`;
        data[num]="o";
        setCount(++count);
    }

    checkWin();
}

const checkWin = () => {
    if(data[0]===data[1] && data [1]=== data[2] && data[2]!=="")
    {
       won(data[2]);
    }
    else if(data[3]===data[4] && data [4]=== data[5] && data[5]!=="")

    {
        won(data[5]);
    }
    else if(data[6]===data[7] && data [7]=== data[8] && data[8]!=="")

    {
        won(data[8]);
    }
    else if(data[0]===data[3] && data [3]=== data[6] && data[6]!=="")

    {
        won(data[6]);
    }

    else if(data[2]===data[5] && data [5]=== data[8] && data[8]!=="")

    {
        won(data[7]);
    }
    else if(data[0]===data[4] && data [4]=== data[8] && data[8]!=="")

    {
        won(data[8]);
    }
    else if(data[0]===data[1] && data [1]=== data[2] && data[2]!=="")

    {
        won(data[8]);
    }
    else if(data[2]===data[4] && data [4]=== data[6] && data[6]!=="")

    {
        won(data[6]);
    }
}


const won = (winner) => {
    setLock(true);
    if (winner === 'x') {
      titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> wins`;
    }
  };

  
const reset = () => {
    setLock(false)
    data =  ["","","","","","","","","",];
    titleRef.current.innerHTML = 'Tic Tac Toe in <span>React</span>'
    Box_array.map((e)=>
    e.current.innerHTML = ''
    )

}

  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe In  <span>React</span></h1>
        <div className="board">
       <div className='row1'>
        <div className='boxes' ref={Box1} onClick={(e)=>{toggle(e,0)}}></div>
        <div className='boxes' ref={Box2} onClick={(e)=>{toggle(e,1)}}></div>
        <div className='boxes' ref={Box3} onClick={(e)=>{toggle(e,2)}}></div>
       </div>
       <div className='row2'>
        <div className='boxes' ref={Box4} onClick={(e)=>{toggle(e,3)}}></div>
        <div className='boxes' ref={Box5} onClick={(e)=>{toggle(e,4)}}></div>
        <div className='boxes' ref={Box6} onClick={(e)=>{toggle(e,5)}}></div>
       </div>
       <div className='row3'>
        <div className='boxes' ref={Box7} onClick={(e)=>{toggle(e,6)}}></div>
        <div className='boxes' ref={Box8} onClick={(e)=>{toggle(e,7)}}></div>
        <div className='boxes' ref={Box9} onClick={(e)=>{toggle(e,8)}}></div>
       </div>
      
    </div>
    <button className='reset'onClick={()=>{reset()}}>Reset</button>
    </div>
         
  );
};

export default Tictactoe;
