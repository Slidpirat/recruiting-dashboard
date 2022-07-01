import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Recruiting Dashboard</title>
                    <meta name="description" content="Recruiting Dashboard – A tool for recruiters" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
