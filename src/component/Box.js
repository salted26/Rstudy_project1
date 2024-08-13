import React from 'react'

const Box = (props) => {

  return (
      <>
        <div className="box">
          <div>{props.title}</div>
          <div className="img-box">
            <img src={props.item && props.item.url} alt={props.item?.name} />
          </div>
          <div>{props.item && props.item.name}</div>
        </div>
      </>
  )
}

export default Box;