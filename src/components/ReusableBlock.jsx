import React from "react"

function ReusableCard(props) {
  
    return (
      props.isLeftAlign ? <div className="reusableMain" data-aos="fade-up" >

      <div className="head" >
        <h3 className="reusableHeading"> {props.heading}  </h3>
        <hr className="lineBreak" />
      </div>
      <div className="reusableBlock" >

      {
        props.haveLogo ? <div className="reusableHeadingBlock R1">
          <img className="reusableHeadingImage" src={props.imgSrc} alt={props.altText} />
        </div>
        : null
      }
      <div className="reusableCard"> 
        <blockquote className="blockquote" ><p className="quotation" > {props.content}</p>
          <footer> {props.writer}</footer>
        </blockquote>
      </div>

      </div>
      
      </div>

      :   <div className="reusableMain" data-aos="fade-up" >

        <div className="head rightHead" >
        <h3 className="reusableHeading"> {props.heading}  </h3>
        <hr className="lineBreak" />
      </div>

        <div className="reusableBlock" >
      <div className="reusableCard"> 
        <blockquote className="blockquote leftBlock" ><p className="quotation"> {props.content}</p>
          <footer> {props.writer}</footer>
        </blockquote>
      </div>

      {
        props.haveLogo ? 
        <div className="reusableHeadingBlock R2">
          <img className="reusableHeadingImage" src={props.imgSrc} alt={props.altText} />
        </div>
        : null
      }
      </div>
      </div>
    );
}

export default ReusableCard;