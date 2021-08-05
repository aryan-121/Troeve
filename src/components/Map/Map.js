import "./Map.css";
import map from "../../images/map.jpg";

const Map = () => {
    return(
        <div className="Container">
            <div className="Tag">
                <div><h1>Hello, feel safe with Troeve</h1></div>
                <div><a href="/">Find you IDP centre</a></div>
            </div>
            <div className="Box">
                <img src={map} alt="Map"/>

            </div>
        </div>
    );
}

export default Map;