import { Link } from 'react-router-dom'


export default function Cars(props) {
    return (
        
            <div className="AppContent">
                <ul className="car-info-list">
                    <li>{props.car.name}</li>
                    <li>Year: {props.car.year}</li>
                    <li>Selling Price: ¥{props.car.sellingPrice}</li>
                    <li>Kilometers Drive: {props.car.kmDriven}</li>
                    <li>Fuel Type: {props.car.fuel}</li>

                    {
                        (props.hidelink) ?
                            <>
                                <li>Seller Type: {props.car.sellerType}</li>
                                <li>Transmission:{props.car.transmission}</li>
                                <li>Owner: {props.car.owner}</li>
                                <li>Fuel Efficiency: {props.car.fuelEfficiency}</li>
                                <li>Engine Type: {props.car.engine}</li>
                                <li>Power: {props.car.maxPower}</li>
                                <li>Torque: {props.car.torque}</li>
                                <li>Number of Seats: {props.car.seats}</li>
                                <img className="image" src={props.car.image}/>
                                
                            </> :
                            <Link className="linked" to={`/cars/${props.car.id}`}>Read More</Link>
                    }

                </ul>
            </div>

    )
}
