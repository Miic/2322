import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ReactionContainer from './ReactionContainer'

export default class UIRoot extends React.Component{
    render(){

        return(
            <div>
                <Header />
                <ReactionContainer />
                <Footer />
            </div> 
        );
    }
}