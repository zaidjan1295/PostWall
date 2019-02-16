import React, {Component} from "react";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../main.css'

class Wall extends Component {    
    makeList() {
        let arr = [];       
        arr = this.props.post;
        // let arr = this.props.post;
        const list = arr.map((data) => {
            console.log(data)
            return (
                <div className="card">
                    {data}
                </div>
            )
        })
        return list;
    }

    render() {
        var comp = this.makeList();
        return(
            <div>
                {comp}
            </div>            
        )
    }
}

function mapStateToProps(state) {
    console.log("state is ", state)
        return{
            post :state.post
        }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        makeList: this.makeList,
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Wall);