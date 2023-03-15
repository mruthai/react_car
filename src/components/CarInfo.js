import { Link } from 'react-router-dom'

export default function Cars(props) {
    return (
        
            <div className="AppContent">
                <ul className="car-info-list">
                    <li>{props.car.name}</li>
                    <li>Year: {props.car.year}</li>
                    <li>Selling Price: ${props.car.selling_price}</li>
                    <li>Kilometers Drive: {props.car.year}</li>
                    <li>Fuel Type: {props.car.fuel}</li>

                    {
                        (props.hidelink) ?
                            <>
                                <li>Seller Type: {props.car.seller_type}</li>
                                <li>Transmission:{props.car.transmission}</li>
                                <li>Owner: {props.car.owner}</li>
                                <li>Fuel Efficiency: {props.car.mileage}</li>
                                <li>Engine Type: {props.car.engine}</li>
                                <li>Power: {props.car.max_power}</li>
                                <li>Torque: {props.car.torque}</li>
                                <li>Number of Seats: {props.car.seats}</li>
                                <img src="/public/images/mechanic.png" />
                            </> :
                            <Link className="linked" to={`/cars/${props.car.id}`}>Read More</Link>
                    }

                </ul>
            </div>

    )
}
