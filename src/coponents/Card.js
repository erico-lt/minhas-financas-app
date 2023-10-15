import React from "react";

class Card extends React.Component {

    render() {
        return (
            <div className="card mb-3">
                <h1 className="card-header"  style={{position: 'relative', textAlign: 'center'}}>{this.props.title}</h1>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;