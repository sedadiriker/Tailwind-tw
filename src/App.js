import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <div>
          <div>
            

            <div>
              <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div>
              <a href="#solutions"> Solutions </a>
              <a href="#industries"> Industries </a>
              <a href="#fees"> Fees </a>
              <a href="#About"> About Rareblocks </a>
            </div>

            <div>
              <a href="#login"> Sign in </a>
              <a href="#register" rel="noopener noreferrer" role="button">
                Create free account
              </a>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div>
          <div>
            <div>
              <h1>A special credit card made for Developers.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
              <form action="#" method="POST">
                <div>
                  <input type="email" placeholder="Enter email address" required />
                  <div>
                    <button type="submit">Get Free Card</button>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <div>
                <p>2943</p>
                <p>Cards<br />Delivered</p>
              </div>
              <div>
                <svg width={16} height={39} viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975" />
                  <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398" />
                  <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                  <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                  <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
                </svg>
              </div>
              <div>
                <p>$1M+</p>
                <p>Transaction<br />Completed</p>
              </div>
            </div>
          </div>
          <div>
            <img src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png" alt="images" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
