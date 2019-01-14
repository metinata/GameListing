import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {sortOptions} from "../../../_contants";

export default class Header extends PureComponent {

    constructor(props) {
        
        super(props);

        this.sort = this.sort.bind(this);
    }

    sort() {
        const type = this.props.sortType === sortOptions.increase ? sortOptions.decrease : sortOptions.increase;
        this.props.sortGames(type);
    }

    render() {

        return (
            <div className="header">
                <div className="header__sort">
                    <span>Sort by: </span> 
                    <span onClick={this.sort} role="presentation">{this.props.sortType}</span>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    sortGames: PropTypes.func.isRequired,
    sortType: PropTypes.oneOf(Object.keys(sortOptions)).isRequired
};
