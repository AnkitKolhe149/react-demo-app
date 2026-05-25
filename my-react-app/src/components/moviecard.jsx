function moviecard({title, genre, rating, duartion, img, language}) {
  return (
    <div style={{border:"1px solid black", width:"300px", margin:"10px", padding:"10px", display:"inline-block"}}>
      <img src={img} alt={title} style={{width:"100%", height:"auto"}} />
      <h3>{title}</h3>
      <p>Genre: {genre}</p>
      <p>Rating: {rating}</p>
      <p>Duration: {duartion}</p>
      <p>Language: {language}</p>

    </div>
  )
}

export default moviecard
