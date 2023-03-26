// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Hello from './Components/Hello'
// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//        <Hello />
//       </div>
//     );
//   }
 
// }

// export default App;


// export default function Todolist()
// {
//   return (
//     <>
//     <h1>Miss Lamarr's Todos</h1>
//     <ul>
//       <li>Invent new traffic lights</li>
//       <li>Rehearse a movie scene</li>
//       <li>Improve the spectrum technology</li>
//     </ul>
//     </>
//   );
// }

// export default function Avatar()
// {
//   const avatar ='https://i.imgur.com/7vQD0fPs.jpg';
//   const description ='Gregorio Y. Zara';
//   return (
//     <img 
//     className="avatar"
//     src={avatar}
//     alt={description}
//     />
//   );
// }

// const today = new Date();
// function formatDate(date){
//   return new Intl.DateTimeFormat(
//     'en-US',
//     {weekday: 'long'}
//   ).format(date);
// }

// export default function TodoList()
// {
//   return(
//     <ul style={
//       {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//     }>
//       <li>Improve the videophone</li>
//       <li>Prepare aeronatics lectures</li>
//       <li>Work on the alcohol-fueled engine</li>
//     </ul>
    
//   );
// }




const person = {
name:'Gregorio Y. Zara',
theme: 
{
  backgroundColor:'black',
  color:'pink'
}
};

export default function TodoList()
{
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img 
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
      <li>Improve the videophone</li>
      <li>Prepare aeronatics lectures</li>
      <li>Work on the alcohol-fueled engine</li>
    </ul>
    </div>
  );
}