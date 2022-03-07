import React from 'react'

const ImagesList = ({imageURL}) => {
  return (
    <div className="list_files_section">
      {/* className="images_container" */}
      {imageURL.map((obj)=>{
      return (
        <div className="flip-card">
          {/* <div className="flip-card-inner"> */}
              <div className='image_container'>
              <img 
              alt=""
              src={obj.images.imageURL} 
              className="image_card"
              />
              </div>
          </div>
        )
      })}
    
</div>
  )
}

export default ImagesList