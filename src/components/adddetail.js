import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import shoeArray from './shoeArray';
import "./add.css"

function Adddetail() {

    let { id } = useParams();
    console.log(id);
    let [ad, setAd] = useState({});

    useEffect(() => {



        let adFound = shoeArray.find((ad) => {

            return ad.id == id;

        })

        if(adFound){
            setAd({...adFound});
        }


    }, [])  

    return (
        <div>
         <h1>Here You can buy all types of shoes</h1>
                   
                         <div className="card">
                                    <div className="card-body">

                                        <h2 className="card-tile"> {ad.name}</h2>
                                    </div>
                                    <img src={ad.img} className="card-media2" alt="" />
                                    <div className="card-tag"><b> price   ${ad.price}.00 </b> </div>
                                </div>
        
                
            
        </div>
    )
}

export default Adddetail
