import React from 'react';

function ErrorPage(props) {
      return (
        <div >
          <div >
            <h1 style={{marginTop:'240px'}}>Oops 404!</h1>
            <h3>Looks like the bugs stole that page.</h3>
            <div >
              <div>
                <button
                  onClick={(event) => {
                    event.preventDefault()
                    window.location.href = '/'
                  }}
                  style={{marginBottom:'20px'}}
                >
                  Return home
                </button>
              </div>
              <div>
                <a
                  href="https://github.com/Project3-Team2/ClubQ/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button outlined>Report a bug</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
   
  }
  
  export default ErrorPage;