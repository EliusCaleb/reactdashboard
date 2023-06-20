import { AnimateSharedLayout } from 'framer-motion';
import React,{useState} from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
    const [ expand, setExpand] = useState(false)
  return (
    <>
        <AnimateSharedLayout>
          {
            expand ? ('<ExpandCard/>'): <CompactCard   params={props}/>
          }
        </AnimateSharedLayout>
    </>
  )
}


function CompactCard({params}){
      const Png = params.png
    return (
        <div className="compact" style={{background: params.color.backGround, boxShadow: params.color.boxShadow}}>
           <div className="radialBar">
              <CircularProgressbar  value={params.barValue} text={`${params.barValue}%`} />
           </div>
           <div className="details">
            <Png/>
            <span>
                ${params.value}
            </span>
            <span>
                Last seen 24hrs
            </span>
           </div>
        </div>
    )
}

export default Card