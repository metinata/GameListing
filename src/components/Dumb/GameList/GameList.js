import React, {PureComponent} from "react";
import StarRatings from "react-star-ratings";
import PropTypes from "prop-types";
import {filterTypes, sortOptions} from "../../../_contants";

export default class GameList extends PureComponent {

    constructor(props) {

        super(props);

        this.rateGame = this.rateGame.bind(this);
        this.sortByRating = this.sortByRating.bind(this);
        this.filterGames = this.filterGames.bind(this);
    }

    rateGame(rating, id) {

        this.props.rateGame(parseInt(id, 10), rating);
    }

    sortByRating(games) {

        return games.sort((a, b) => {
            if (this.props.sortType === sortOptions.increase) {
                return a.rating - b.rating;
            }

            return b.rating - a.rating;
        });
    }

    filterGames() {

        const games = (this.props.filterType === filterTypes.all)
            ? this.props.games
            : this.props.games.filter((game) => game[this.props.filterType].toString() === this.props.filterValue);

        return this.sortByRating(games);
    }

    render() {

        return (
            <div className="game-list">
                {
                    this.filterGames().map((game) => (
                        <div key={game.id} className="game-list__item">
                            <div className="games-list__info">
                                <img src={game.image} alt={game.name}/>
                                <span>{game.name}</span>
                            </div>
                            <div className="game-list__rating">
                                {
                                    game.rated ? (
                                        <StarRatings
                                            rating={game.rating}
                                            starRatedColor="#a8772b"
                                            starHoverColor="#a8772b"
                                            numberOfStars={5}
                                            name={game.id.toString()}
                                            starDimension="20px"
                                            starSpacing="1px"
                                        />
                                    ) : (
                                        <StarRatings
                                            rating={game.rating}
                                            changeRating={this.rateGame}
                                            starRatedColor="orange"
                                            starHoverColor="#a8772b"
                                            numberOfStars={5}
                                            name={game.id.toString()}
                                            starDimension="20px"
                                            starSpacing="1px"
                                        />
                                    )
                                }
                            </div>
                            <button onClick={() => this.props.delete(game.id)} className="game-list__remove" type="button">X</button>
                        </div>
                    ))
                }
            </div>
        );
    }
}

GameList.propTypes = {
    games: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            totalRating: PropTypes.number.isRequired,
            ratedUser: PropTypes.number.isRequired,
            rated: PropTypes.bool.isRequired,
            rating: PropTypes.number.isRequired
        })
    ),
    delete: PropTypes.func.isRequired,
    rateGame: PropTypes.func.isRequired,
    filterType: PropTypes.oneOf(Object.keys(filterTypes)),
    filterValue: PropTypes.string,
    sortType: PropTypes.oneOf(Object.keys(sortOptions)).isRequired,
};
