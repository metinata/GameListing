import {filterTypes, sortOptions} from "../../../_contants";
import actionTypes from "../actions/types";

const initialState = {
    games: [],
    filterType: filterTypes.all,
    filterValue: null,
    sortType: sortOptions.increase
};

export default (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_GAMES:
            return {...state, ...action.payload};

        case actionTypes.CREATE_GAME:
            return {...state, games: [action.payload, ...state.games]};

        case actionTypes.DELETE_GAME: 
            return {...state, games: state.games.filter((game) => game.id !== action.payload)};

        case actionTypes.RATE_GAME:
            return {...state, games: Object.assign([], state.games, {[action.payload.index]: action.payload.game})};

        case actionTypes.FILTER_GAMES: 
            return {...state, filterType: action.payload.filterType, filterValue: action.payload.filterValue};

        case actionTypes.SORT_GAMES:
            return {...state, sortType: action.payload};

        default:
            return state;
    }
};
