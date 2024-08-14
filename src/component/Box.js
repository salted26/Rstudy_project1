import React from 'react'

const Box = (props) => {

    const imageUrl = () => {
        console.log(props.item);
        if(props.item !== '') {
            return (
                <img src={props.item && props.item.url} alt={props.item?.name} className="content"/>
            )
        } else {
            return (
                <div className="content"> 가위 바위 보를 선택하세요 </div>
            )
        }
    }

    return (
      <>
        <div className="box">
          <div>{props.title}</div>
          <div className="img-box">
              {imageUrl()}
          </div>
          <div>{props.item && props.item.name}</div>
        </div>
      </>
    )
}

export default Box;