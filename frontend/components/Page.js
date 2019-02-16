import Header from "../components/Header";
import Meta from "../components/Meta";
import React,{Component} from "react";

class Page extends Component{
    render(){
        return(
            <div>
                <Meta/>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}

export default Page;