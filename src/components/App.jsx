import React from 'react';
import InfoCards from './InfoCards';
import FilmList from './FilmList';

class App extends React.Component{

logTitle(title){
    console.log(title);
    this.setState({title: title});
}

render() {
    return (
    <div>
    <h1 className="text-danger"> yoooo </h1>
    <FilmList logTitle={this.logTitle.bind(this)} />
    <InfoCards />
    </div>
    )
}
}

export default App;