import React from 'react';
import ReactDOM from 'react-dom/client';


// const heading=React.createElement('h1',{id:'heading'},'test react');
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
// console.log(heading)


// const parent= React.createElement('div',{
//     id:'parent'
// },React.createElement("div",{id:'child'}),[
// React.createElement('h1',{},'im in h1 tag'),
// React.createElement('h2',{},'im in h2 tag')]

// )
const jsxheading= <h1 id='heading'> KARTHIK RoCKS IN JSX</h1>
console.log(jsxheading)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxheading)