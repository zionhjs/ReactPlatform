import React from 'react';
import {updateGoldRequest, getHistoryRequest} from "../redux/index";
import{connect} from 'react-redux';

class Farm extends React.Component{
    constructor(props) {
        super(props);
    }

    handleClick = (data) => {
        this.props.updateGold(data);
        console.log("updating gold!", "data:", data);
    }

    render(){
        const data = {amount:Math.floor(Math.random()*5 + 1), title:"Farm"};
        return(
            <div>
                <h1>{this.props.data.title}</h1>
                <br />
                <h4>{this.props.data.des}</h4>
                <br />
                <button onClick={() => this.handleClick(data)}>{this.props.data.btnText}</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        goldData:state.gold
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateGold: (data) => dispatch(updateGoldRequest(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Farm);

