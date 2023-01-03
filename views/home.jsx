const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/penne-pasta.jpg" alt="Penne Pasta" />
                <div>
                  Photo By <a href="https://unsplash.com/@bleiplays33">Ben Lei</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>

              {/* dont do views/places/index.jsx because you're just trying to have browser go to /places its not how it is for html links  */}
              <a href="/places"> 
    <button className="btn-primary">Places Page</button>
  </a>
          </main>
      </Def>
    )
  }

module.exports = home
