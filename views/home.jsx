const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
              {/* dont do views/places/index.jsx because you're just trying to have browser go to /places its not how it is for html links  */}
              <a href="/places"> 
    <button className="btn-primary">Places Page</button>
  </a>
          </main>
      </Def>
    )
  }

module.exports = home
