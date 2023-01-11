const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="container mt-5">  
            <div className="row align-items-center"> <div className="col"><img src= {data.place.pic} alt={data.place.name} />
                </div>
            <div className="col"><h1>{data.place.name}</h1><h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <p>Located in {data.place.city},{data.place.state} and serving {data.place.cuisines}</p></div>
            
            <h2>Comments</h2>
            <p>No comments yet!</p> 

            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     

<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
   



        </div> 
           </div>
           
           
          </main>
        </Def>
    )
}

module.exports = show