import React from 'react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {useRef} from 'react'

const ServicesNav =()=> {
        const birthplanning = useRef(null);
        const birthdoula = useRef(null);
        const birthafterloss = useRef(null);
        const postpartum = useRef(null);
        const bereavement = useRef(null);
        const virtual = useRef(null);

    const gotobirthplanning = () => window.scrollTo({
        top:birthplanning.current,
        behavior:'smooth'
    });
    const gotobirthdoulasupport = () => window.scrollTo({
        top:birthdoula.current,
        behavior:'smooth'
    });
    const gotobirthafterloss = () => window.scrollTo({
        top:birthafterloss.current,
        behavior:'smooth'
    });
    const gotopostpartum = () => window.scrollTo({
        top:postpartum.current,
        behavior:'smooth'
    });
    const gotobereavement = () => window.scrollTo({
        top:bereavement.current,
        behavior:'smooth'
    });
    const gotovirtual = () => window.scrollTo({
        top:virtual.current,
        behavior:'smooth'
    });
        
        return(
            <div id='servicesnav'>
                <ul>
                    <Link to='birthplanning' onClick={gotobirthplanning}>
                    <li><a>Birth Planning Only</a></li>
                    </Link>
                    <Link to='birthdoula'  onClick={gotobirthdoulasupport}>
                    <li><a>Birth Doula Support</a></li>
                    </Link>
                    <Link to='birthafterloss'  onClick={gotobirthafterloss}>
                    <li><a>Birth After Loss Support</a></li>
                    </Link>
                    <Link to='postpartum'  onClick={gotopostpartum}>
                    <li><a>PostPartum Doula Support</a></li>
                    </Link>
                    <Link to='bereavement'  onClick={gotobereavement}>
                    <li><a>Bereavement Doula Support</a></li>
                    </Link>
                    <Link to='virtual'  onClick={gotovirtual}>
                    <li><a>Virtual Doula Support</a></li>
                    </Link>   

                </ul>
            </div>
        )
    }


export default ServicesNav;