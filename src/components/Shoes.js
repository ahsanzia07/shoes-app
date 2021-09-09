import React from 'react'
import shoeArray from './shoeArray';
import { Link } from 'react-router-dom';

const Shoes = () => {


    // let history = useHistory();

    if (!shoeArray)
        return <h1>Loading</h1>
    return (
        <>
            <section className="main-card--cointainer">
                {
                   shoeArray.map((ab) => {

                        return <>

                            <Link className="card-container"  key={ab.id} to={`/ad-details/${ab.id}`}>
                                <div className="card">
                                    <div className="card-body">

                                        <h2 className="card-tile"> {ab.name}</h2>
                                    </div>
                                    <img src={ab.img} className="card-media" alt="" />
                                    <div className="card-tag subtle"><b> price   ${ab.price}.00 </b> </div>
                                </div>
                            </Link>

                        </>
                    })
                }
            </section>

        </>
    )
}

export default Shoes
