import "./Content.css"
import { ThemeContext } from "../ThemeContext"
import { useContext } from "react"
import { CiTimer } from 'react-icons/ci'
import { GiLightningFrequency } from 'react-icons/gi'
import { FaGreaterThan } from 'react-icons/fa'
import { FaLessThan } from 'react-icons/fa'
import SpetrumChart from "../Components/Chart/Spetrum"

const Content = () => {
    const {DarkTheme} = useContext(ThemeContext)
  return (
    <div className={`content ${DarkTheme && "dark"}`}>
        <div className="row header">
            <CiTimer className="cog" ></CiTimer>
            <h1 className="txt-head">Real Time</h1>
            <div className="divide"></div>
            <div className="notification">
                <h1>400 (s)</h1>
            </div>
        </div>
        <div className="row header">
            <GiLightningFrequency className="cog"></GiLightningFrequency>
            <h1 className="txt-head">Frequency</h1>
            <div className="divide"></div>
            <div className="notification">
                <h1>1000 (Hz)</h1>
            </div>
        </div>
        <div className="row header">
            <FaLessThan className="cog"></FaLessThan>
            <h1 className="txt-head">Lower Threshold</h1>
            <div className="divide"></div>
            <div className="notification">
                <h1>150</h1>
            </div>
        </div>
        <div className="row header">
            <FaGreaterThan className="cog"></FaGreaterThan>
            <h1 className="txt-head">Upper Threshold</h1>   
            <div className="divide"></div>
            <div className="notification">
                <h1>4100</h1>
            </div>
        </div>
        <span className="section-title">OVER VIEW</span>
        <div className="row square">
            <SpetrumChart></SpetrumChart>
        </div>
        {/* <div className="row square"></div> */}
    </div>
  )
}

export default Content