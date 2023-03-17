
// import { useContext} from "react";
// import { AuthContext } from '../contexts/AuthProvider'
// import Profile from "./Profile";

export default function Home() {
    // const { user } = useContext(AuthContext)
    return (
        <div className="App">
            <h1>D&L's Car Dealership</h1>
{/* 
            {
                (user.loggedIn) ?
                <Profile/> :
                    <></>
            } */}
            <div>
            <img src="../public/images/mechanic.png" alt=""/>
            </div>
           
        </div>
    )

}