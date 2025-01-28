// import React ,{useState}from 'react';

// function Mycoponent() {
// const [name,setName] = useState("GUEST");
// const [age, setage] = useState(0);
// const updateName =() => {
//     setName("LEKHAN");
// }
//  const updateAge = () => {
//     setage (age + 10000000000)
//  }
// return (

//     <>
//     <div>
//         <p>
//             Name: {name}
//         </p>
//         <button onClick={updateName}>SET NAME </button>
//         <p>
//             age: {age}
//         </p>
//         <button onClick={updateAge}>SET age </button>
//     </div>
    
//     </>
// )
    
// }

// export default Mycoponent





import React ,{useState}from 'react'
import  chandra from './assets/Chandrachooda.mp3'
function Counter() {

  let body=document.querySelector("body");
  var audio2=new Audio(chandra)
  body.addEventListener("mouseenter",()=>{
    audio2.play()

})

  
  let [increment ,setIncrement] = useState(0);




let increse = () => {
    setIncrement ( increment+ 1);
     }
     let decress = () => {
        setIncrement ( increment- 1 );
         }
let clear =() =>{
    setIncrement ( increment=0);
}
     
  return (

  <>   
    <div>
        <p className="display">
          💚
         {increment}
         💛
        </p>
        <button className="increment"  onClick={increse}>INCREMENT ⬆</button> 
            <button className="decrement" onClick={decress}> DECREMENT⬇ </button>
            <button className="reset" onClick ={clear}>RESET♻</button>
       
    </div>

    </>
  )
}

export default Counter




