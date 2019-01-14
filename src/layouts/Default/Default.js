import React, {PureComponent} from "react";

const DefaultLayout = (Child) => class Layout extends PureComponent {
    render() {
        return (
            <div className="container">
                <Child {...this.props}/>
            </div>
        );
    }
};

export default DefaultLayout;
