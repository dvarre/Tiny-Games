import React, {useRef, useEffect, useState} from "react";
import type {ReactNode} from "react";
import Icon from "./Icon";
import "./carousel.css";

const CARDS = 5; // images des jeux à la une
const MAX_VISIBILITY = 3;

const Carousel = ({children}:{children:ReactNode[]}) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
    return (
        <section className="flex items-center justify-around perspective-normal transform-3d min-h-75 mx-auto">
            {active > 0 && (
                <button className='top-[43%] absolute cursor-pointer z-2 lg:left-[25%] sm:left-[10%]' onClick={()=>
                    setActive((i) => i-1)
                }>
                <Icon name="chevronLeft"/>
                </button>
            )}
            {React.Children.map(children,(child,i) =>(
                <div className='card-container absolute min-w-full min-h-full' style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointerEvents': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                  }as React.CSSProperties}>
                 {child}
                 </div> 
            ))}
           {active < count - 1 && <button className='top-[43%] absolute cursor-pointer z-2 lg:right-[25%] sm:right-[10%]' onClick={() => 
           setActive(i => i + 1)}> <Icon name="chevronRight"/>  </button>}
            
        </section>
    );
};

export default Carousel; 