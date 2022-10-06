import React from 'react';
import "./Partenaires.css"
import agrifourniture from '../assets/p1.png'
import agrizone from '../assets/p2.png'
import leroymerlin from '../assets/p3.png'
import agricolor from '../assets/p4.png'
import agriconomie from '../assets/agriconomie-1.png'
import agriaffaires from '../assets/agriaff.png'

const Partenaires = () => {

    return(

        <div style={{height: '98px' , margin: '0px 20% 100px 20%' , overflow: 'clip'}}>
            <div className='partenaires' style={{width: '2200px' , overflow: 'hidden'}} >
        <img src={agrifourniture} alt='AgriFourniture' style={{margin: '0px 5% 0px 5%' , display: 'inline-block'}}/>
        <img src={agrizone} alt='AgriZone' style={{margin: '0px 5% 0px 5%' , display: 'inline-block'}}/>
        <img src={leroymerlin} alt='Leroy Merlin' style={{margin: '0px 5% 0px 5%' , display: 'inline-block'}}/>
        <img src={agricolor} alt='AgriColor' style={{margin: '0px 5% 0px 5%' , display: 'inline-block'}}/>
        <img src={agriaffaires} alt='AgriAffaires' style={{margin: '0px 2% 0px 2%' , display: 'inline-block'}}/>
        <img src={agriconomie} alt='AgriConomie' style={{margin: '0px 4% 0px 4%' , display: 'inline-block'}}/>
        </div>
    </div>

    )

}

export default Partenaires