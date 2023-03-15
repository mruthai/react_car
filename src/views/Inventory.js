
import { useState, useEffect } from "react"
import CarInfo from '../components/CarInfo'

export default function Inventory() {
    const [carIds, setCarIds] = useState([])

    useEffect(() => {
        async function getCarIds() {
            const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
            const data = await response.json()

            setCarIds(data)
        }
        getCarIds()
    }, [])

    return (
        <div className="App">
            <div >
                <h1>D&L's St.Patrick's Day Car Sale</h1>
            </div>
            <div>
                {carIds.map((car) => <CarInfo car={car} key={car.id} />)}
            </div>
        </div>

    )
}