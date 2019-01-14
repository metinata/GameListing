import actionTypes from "./types";
import gameData from "../../../_data";
import {filterTypes} from "../../../_contants";

const fetchGames = (filterType, filterValue) => (dispatch) => {

    const games = gameData.map((game) => {
        game.rating = Math.round(game.totalRating / game.ratedUser);
        return game;
    });

    dispatch({
        type: actionTypes.FETCH_GAMES,
        payload: {
            games,
            filterType: filterType || filterTypes.all,
            filterValue: filterValue || null
        }
    });
};

const createGame = (game) => (dispatch) => {

    dispatch({
        type: actionTypes.CREATE_GAME,
        payload: game
    });
};

const deleteGame = (id) => (dispatch) => {

    dispatch({
        type: actionTypes.DELETE_GAME,
        payload: id
    });
};

const rateGame = (id, rating) => (dispatch, getState) => {

    const games = getState().HomeReducer.games;
    const game = games.find((g) => g.id === id);
    const index = games.findIndex((i) => i.id === id);

    game.rated = true;
    game.totalRating += rating;
    game.ratedUser += 1;
    game.rating = Math.round(game.totalRating / game.ratedUser);

    dispatch({
        type: actionTypes.RATE_GAME,
        payload: {
            game,
            index
        }
    });
};

const filterGames = (type, value) => (dispatch) => {

    dispatch({
        type: actionTypes.FILTER_GAMES,
        payload: {
            filterType: type,
            filterValue: value
        }
    });
};

const sortGames = (sortType) => (dispatch) => {

    dispatch({
        type: actionTypes.SORT_GAMES,
        payload: sortType
    });
};

export default {
    fetchGames,
    createGame,
    deleteGame,
    rateGame,
    filterGames,
    sortGames
};
