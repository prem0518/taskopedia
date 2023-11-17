import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader(){
  return(<h1>React Course</h1>)
}

function SubHeader(){
  return(<p>This will be a exciting course</p>)
}

function Header(){
  return(
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  )
}

function MainBody(){
  return (
    <div>
      <p>In this course we are building TaskoPedia</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to walmart</li>
      </ul>
    </div>
  );
}

function Footer(){
  return(<p>Happy Coding</p>)
}
root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);


