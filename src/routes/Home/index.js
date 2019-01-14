import {connect} from "react-redux";
import Home from "./Home";
import actions from "./actions";

const mapStateToProps = ({HomeReducer}) => ({
    games: HomeReducer.games,
    filterType: HomeReducer.filterType,
    filterValue: HomeReducer.filterValue,
    sortType: HomeReducer.sortType
});

const mapDispatchToProps = {
    fetchGames: actions.fetchGames,
    createGame: actions.createGame,
    deleteGame: actions.deleteGame,
    rateGame: actions.rateGame,
    filterGames: actions.filterGames,
    sortGames: actions.sortGames
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
