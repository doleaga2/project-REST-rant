const React = require('react')
const Def = require('../default')

  function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className='inactive'>
        Not Yet Rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += 'â­ï¸'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
      
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>

          </div>
          
        )

      })
    }
    return (
        <Def>
          <main>
            <div className="container mt-5">  
            <div className="row align-items-center"> <div className="col"><img src= {data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
                </div>
            <div className="col"><h1>{data.place.name}</h1><h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        <h5>
          {rating}
        </h5>
            </div>
            
            <h2>Comments</h2>
            {comments} 
{/* implementing the comment form  */}
<form action={`/places/${data.place.id/comment} method= POST`}>

<div className="form-group">
    <label htmlFor="author">author</label>
    <input className="form-control" id="author" name="author" />
  </div>

  <div className="form-group">
    <label htmlFor="content">content</label>
    <input className="form-control" id="content" name="content" />
  </div>

  <div className="form-check">
    <label htmlFor="rant">Rant?</label>
    <input
className='form-check-input'
type='checkbox'
id='rant'
name='rant'
defaultChecked
/>
 
</div>

  <div className='form-group'>
<label htmlFor='stars'>Star Rating</label>
<input
className='form-control'
id='stars'
name='stars'
type='range'
step='0.5'
min='0'
max='5'
/>
</div>
  <input className="btn btn-primary" type="submit" value="Add Comment" />
</form>








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



      