import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";


class App extends Component{
    render(){
        return(
            <Fragment>
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="ps-logos.png" />
                {this.props.children}

                 {/* Start Back To Top */}
                 <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                <Footer />
               
            </Fragment>
        )
    }
}

export default App;
