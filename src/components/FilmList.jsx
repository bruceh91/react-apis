import React from 'react';
import InfoCards from './InfoCards';

class FilmList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filmArr: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then( object => { console.log(object); this.setState({filmArr: object})} );

            this.props.logTitle(this.filmArr);
        }

    render() {
        return (

            <div onLoad={this.componentDidMount.bind(this)}>{
                this.state.filmArr.map((rowdata, i) =>
            <InfoCards input = {rowdata.title} des = {rowdata.description} /> )
                }</div>  
    
    )
    }

}

export default FilmList;