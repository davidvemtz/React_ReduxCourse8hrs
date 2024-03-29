import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
import Single from './Single';

class Main extends Component {
    
    state = { loading: true }

    componentDidMount() {
       this.props.startLoadingPosts().then(() => {
           this.setState({loading: false});
       }); 
       this.props.startLoadingComments();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1 className='font-face'>
                    <Link to="/"> PhotoWall </Link>
                </h1>
                <Route exact path='/' render={() => (
                    <div>
                        <PhotoWall {...this.props}/>
                    </div>               
            )}/>
                <Route path="/AddPhoto" render={({history}) => (
                    <AddPhoto {...this.props} onHistory={history}/>
                )}/>
                <Route path='/single/:id' render={(params) => (
                    <Single loading={this.state.loading} {...this.props} {...params}/>
                )}/>
            </div> 
        )};
};

export default Main;