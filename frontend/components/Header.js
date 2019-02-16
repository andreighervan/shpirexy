import Nav from "./Nav";

const Header=()=>{
    return(
        <div>
            <div className="bar">
                <Nav/>
            </div>
            <div className="sub-bar">
                <p>Search</p>
                <div>Cart</div>
            </div>
        </div>
    )
}

export default Header;