import React from 'react';

class InfoCards extends React.Component {
    

    



    render() {
        console.log('yo');
        return (
            <div className="card col-6 d-flex mx-auto position-relative float-left h-75">
                    <div className="card-body ">
                        <h2 className="card-title">title: {this.props.input} </h2>
                        <p className="card-text">description : {this.props.des}</p>
                    </div>
            </div>
                )
    }

}

export default InfoCards;