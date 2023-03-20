import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Main from "./components/main/Main.jsx"
function App() {
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true);
    const [matches, setMatches] = useState([]);

    async function getProfiles() {
        const res = await fetch('https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile')
        const data = await res.json()
        console.log(data);
        setProfile(data);
    }

    async function getMatches(){
        const res = await fetch('https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches')
        const data = await res.json()
        console.log(data);
        setMatches(data);
    }
    //GET Profile call
    useEffect( () => {
        getProfiles();
        const getData = async () => {
            try {
                const response = await axios.get('https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches');
                setMatches(response.data);
                console.log(response.data);
            }   catch (error) {
                console.error(error);
            }
        };
        getData();
        // getMatches();
    },[loading]);

    //GET matches call
    // useEffect(() => {
    //     fetch('https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches')
    //         .then(response => response.json())
    //         .then(
    //             (result) => {
    //                 console.log(result)
    //                 setMatches(result);
    //             }
    //         )
    // },[])
  return (
    <div className="app">
        {/*<Main  firstname={profile.firstName} lastname={profile.lastName} matches={matches} title="swipe jobs" />*/}
        <Main  profile={profile} matches={matches} title="swipe jobs" />
        <Footer note="Footer Note" />
    </div>
  )
}

export default App
