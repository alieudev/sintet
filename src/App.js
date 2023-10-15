import './App.css';

function App() {
  return (
    <div className='homepage'>
      <h1>ALIEU BALDEH</h1>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>

    <div className='midPage'>
      <div className="banner">
          <img src="https://alieu.s3.amazonaws.com/profile_pic.jpg" alt="alieu with glasses" />
        </div>

        <div className="intro">
          <h1>ALIEU BALDEH</h1>
          <a href="/">View My Work</a>
          <p>Hey, I'm Alieu! I'm a Software Engineer based in the greater NYC area. I have a passion for solving problems. Coding is like art, it is the medium which I can use to connect with the rest of the world. When I code, I feel like I have superpowers because I can make something out of nothing.</p>
        </div>
      </div>
    </div>
      
  );
}

export default App;
