import logo from "../../images/logo.svg";

const Heading = () => {
    return(
        <div>
            <img src={logo} alt="tr" width="1000em" height="140em" style={{width: "100%", alignItems: "center", borderBottom: "2px solid black"}}/>
        </div>
    );
}

export default Heading;