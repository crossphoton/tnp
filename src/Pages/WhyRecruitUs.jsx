import React from 'react'
import ReusableCard from '../components/ReusableBlock'
import { WhyUs } from '../Content/Home';

const whyRecruitUs = React.forwardRef((props, ref)=>{

    return (
        <div >
        
        {WhyUs.map((item, id)=>{
                return (
                    <ReusableCard
                        key={id}
                        isLeftAlign={item.isLeftAlign}
                        haveLogo={item.haveLogo}
                        heading={item.heading}
                        // writer={item.writer}
                        content={item.content}
                        // imgSrc={item.imgSrc}
                        // altText={item.altText}
                    />
                );
            })}

            <div id="recruit3" ></div>
        </div>
    )
});


export default whyRecruitUs;