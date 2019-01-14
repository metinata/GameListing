import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GameForm, GameList, Header, Sidebar} from "../../components";
import {filterTypes, sortOptions} from "../../_contants";

export default class Home extends PureComponent {

    constructor(props) {

        super(props);

        const {groupProperty, groupPropertyValue} = this.props.match.params;

        this.groupProperty = groupProperty;
        this.groupPropertyValue = groupPropertyValue;

        this.state = {};
    }

    componentDidMount() {
        // We simulate api call here to fetch the data
        this.props.fetchGames(this.groupProperty, this.groupPropertyValue);
    }

    render() {
        console.log("home page renderer");
        return (
            <React.Fragment>
                <Sidebar
                    games={this.props.games}
                    filterGames={this.props.filterGames}
                    filterType={this.props.filterType}
                    filterValue={this.props.filterValue}
                />
                <div className="main">
                    <Header
                        sortType={this.props.sortType}
                        sortGames={this.props.sortGames}
                    />
                    <GameList
                        games={this.props.games}
                        delete={this.props.deleteGame}
                        rateGame={this.props.rateGame}
                        filterType={this.props.filterType}
                        filterValue={this.props.filterValue}
                        sortType={this.props.sortType}
                    />
                    <GameForm create={this.props.createGame}/>
                </div>
            </React.Fragment>
        );
    }
}

Home.propTypes = {
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
    fetchGames: PropTypes.func.isRequired,
    createGame: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired,
    rateGame: PropTypes.func.isRequired,
    filterGames: PropTypes.func.isRequired,
    filterType: PropTypes.oneOf(Object.keys(filterTypes)),
    filterValue: PropTypes.string,
    sortGames: PropTypes.func.isRequired,
    sortType: PropTypes.oneOf(Object.keys(sortOptions)).isRequired,
    match: PropTypes.shape()
};
