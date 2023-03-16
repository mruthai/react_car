
import { useState, useEffect, useContext } from "react"
import CarInfo from '../components/CarInfo'
import { DataContext } from '../contexts/DataProvider'


export default function Inventory() {
    const {cars } = useContext(DataContext)


    return (
        <div className="App">
            <div >
                <h1>D&L's St.Patrick's Day Car Sale</h1>
            </div>
            <div>
                {cars.map((car) => <CarInfo car={car} key={car.id} />)}
            </div>
        </div>

    )
}