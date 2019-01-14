import React, {PureComponent} from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {filterTypes} from "../../../_contants";

const groupBy = (array, prop) => array.reduce((groups, item) => {
    const val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
}, {});

class Sidebar extends PureComponent {
    
    constructor(props) {
        
        super(props);

        this.groupProperties = this.groupProperties.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);
        this.applyFilter = this.applyFilter.bind(this);

        this.state = {
            filterType: this.props.filterType
        };
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     // nextProps.filterType !== prevState.filterType && 
    //     if (!prevState.internal) {
            
    //         return {
    //             filterType: nextProps.filterType,
    //         };
    //     }

    //     return {
    //         filterType: prevState.filterType,
    //         internal: false
    //     };
    // }

    applyFilter(type, value) {

        this.props.filterGames(type, value);

        if (type === filterTypes.all) {
            this.setState({
                filterType: type
            });
        }
        
        /* IMPORTANT NOTE */
        /*
            Changing history triggers component did mount lifecycle then refetching the data
            so new added games will be removed due to new fetch data method
        */
        // this.props.history.push(type === filterTypes.all ? "/" : `/${type}/${value}`);
    }

    groupProperties(property) {

        const group = groupBy(this.props.games, property);

        return Object.keys(group).sort().map((item) => (
            <li 
                key={item} 
                onClick={() => this.applyFilter(this.state.filterType, item)}
                className={`${item === this.props.filterValue ? "active" : ""}`}
                role="presentation">
                <span>{item}</span> 
                { " " }
                <span>
                (
                    {group[item].length}
                )
                </span>
            </li>
        ));
    }

    toggleFilter(type) {
        this.setState({
            filterType: type
        });
    }
    
    render() {

        return (
            <div className="sidebar">
                <div className="sidebar__filters">
                    <button 
                        onClick={() => this.toggleFilter(filterTypes.type)} 
                        type="button" 
                        className={`sidebar__option ${this.state.filterType === filterTypes.type ? "sidebar__option--active" : ""}`}>
                        By Type
                    </button>
                    {
                        this.state.filterType === filterTypes.type ? (
                            <ul className="sidebar__list">
                                {this.groupProperties(filterTypes.type)}
                            </ul>
                        ) : null
                    }
                    <button 
                        onClick={() => this.toggleFilter(filterTypes.rating)} 
                        type="button" 
                        className={`sidebar__option ${this.state.filterType === filterTypes.rating ? "sidebar__option--active" : ""}`}>
                        By Rating
                    </button>
                    {
                        this.state.filterType === filterTypes.rating ? (
                            <ul className="sidebar__list">
                                {this.groupProperties(filterTypes.rating)}
                            </ul>
                        ) : null
                    }
                </div>
                <button 
                    onClick={() => this.applyFilter(filterTypes.all, null)} 
                    type="button" 
                    className="sidebar__reset-filters">
                    All
                </button>
            </div>
        );
    }
}

Sidebar.propTypes = {
    games: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            totalRating: PropTypes.number.isRequired,
            ratedUser: PropTypes.number.isRequired,
            rated: PropTypes.bool.isRequired
        })
    ),
    filterGames: PropTypes.func.isRequired,
    filterType: PropTypes.oneOf(Object.keys(filterTypes)),
    filterValue: PropTypes.string,
    // history: PropTypes.shape()
};

export default withRouter(Sidebar);
