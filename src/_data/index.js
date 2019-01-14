import img1 from "../assets/images/assassins-creed.jpg";
import {gameTypes as types} from "../_contants";

import img2 from "../assets/images/call-of-duty.jpg";
import img3 from "../assets/images/destiny.jpg";
import img4 from "../assets/images/fallout.jpg";
import img5 from "../assets/images/grand-theft-auto.jpg";
import img6 from "../assets/images/mine-craft.jpg";
import img7 from "../assets/images/skyrim.jpg";
import img8 from "../assets/images/witcher.jpg";

const games = [
    {
        id: 1540329092776,
        type: types.action,
        image: img1,
        name: "Assassin's Creed",
        totalRating: 194,
        ratedUser: 55,
        rated: false
    },
    {
        id: 1540329438600,
        type: types.adventure,
        image: img2,
        name: "Call of Duty",
        totalRating: 190,
        ratedUser: 45,
        rated: false
    },
    {
        id: 1540329445990,
        type: types.fps,
        image: img3,
        name: "Destiny",
        totalRating: 12,
        ratedUser: 8,
        rated: false
    },
    {
        id: 1540329451875,
        type: types.horror,
        image: img4,
        name: "Fallout",
        totalRating: 120,
        ratedUser: 38,
        rated: false
    },
    {
        id: 1540329460820,
        type: types.survive,
        image: img5,
        name: "Grand Theft Auto",
        totalRating: 585,
        ratedUser: 120,
        rated: true
    },
    {
        id: 1540329467029,
        type: types.adventure,
        image: img6,
        name: "Mine Craft",
        totalRating: 101,
        ratedUser: 32,
        rated: false
    },
    {
        id: 1540329474633,
        type: types.fps,
        image: img7,
        name: "Skyrim",
        totalRating: 15,
        ratedUser: 11,
        rated: false
    },
    {
        id: 1540329481099,
        type: types.survive,
        image: img8,
        name: "Witcher",
        totalRating: 48,
        ratedUser: 11,
        rated: false
    }
];

export default games;
