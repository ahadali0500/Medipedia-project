import React from 'react'

function steps(props) {
  return (
    <>
    <div className="container mt-5">
    <p><strong>{props.description}</strong></p>
    <div className="row ">
        <div className="col-md-11">
            <img src={`${props.imgUrl}`}></img>
        </div>
    </div>
</div>
<br />
    </>
  )
}

export default steps
