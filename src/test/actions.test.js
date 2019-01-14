import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import actions from "../routes/Home/actions";
import actionTypes from "../routes/Home/actions/types";
import * as constants from "../_contants";
import data from "../_data";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const games = data.map((game) => {
    game.rating = Math.round(game.totalRating / game.ratedUser);
    return game;
});

const initialState = {
    games,
    filterType: constants.filterTypes.all,
    filterValue: null,
    sortType: constants.sortOptions.increase
};

const store = mockStore(initialState);

describe("actions test", () => {

    beforeEach(() => {
        store.clearActions();
    });

    it("should get initial state of store", () => {

        expect(store.getState()).toEqual(initialState);

    });

    it("should fetch the game data", () => {

        const expectedAction = [
            {
                type: actionTypes.FETCH_GAMES,
                payload: {
                    games,
                    filterType: constants.filterTypes.all,
                    filterValue: null
                }
            }
        ];

        store.dispatch(actions.fetchGames(constants.filterTypes.all, null));
        expect(store.getActions()).toEqual(expectedAction);

    });

    it("should create a game", () => {

        const game = {
            id: 1540329092776,
            type: constants.gameTypes.action,
            image: "img1",
            name: "Assassin's Creed",
            totalRating: 194,
            ratedUser: 55,
            rated: false
        };

        const expectedAction = [
            {
                type: actionTypes.CREATE_GAME,
                payload: game
            }
        ];

        store.dispatch(actions.createGame(game));
        expect(store.getActions()).toEqual(expectedAction);

    });

    it("should delete a game", () => {

        const id = 1540329092776;

        const expectedAction = [
            {
                type: actionTypes.DELETE_GAME,
                payload: id
            }
        ];

        store.dispatch(actions.deleteGame(id));
        expect(store.getActions()).toEqual(expectedAction);

    });
});
