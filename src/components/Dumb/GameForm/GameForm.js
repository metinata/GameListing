import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import genericImage from "../../../assets/images/generic.png";

export default class GameForm extends PureComponent {

    constructor(props) {
        
        super(props);

        this.create = this.create.bind(this);
        
        this.name = React.createRef();
        this.type = React.createRef();

        this.state = {
            error: {
                name: false,
                type: false
            }
        };
    }

    create() {

        const name = this.name.current.value.trim();
        const type = this.type.current.value.trim();

        this.setState({
            error: {
                name: name === "",
                type: type === ""
            }
        }, () => {
            if (!this.state.error.name && !this.state.error.type) {
                this.props.create({
                    id: +new Date(),
                    type,
                    name,
                    image: genericImage,
                    totalRating: 0,
                    ratedUser: 0,
                    rating: 0,
                    rated: false
                });

                this.name.current.value = "";
                this.type.current.value = "";
            }
        });
    }

    render() {

        return (
            <div className="game-form">
                <div className="game-form__inputs">
                    <label htmlFor="name" className={this.state.error.name ? "error" : ""}>
                        <span>Title: </span>
                        <input ref={this.name} id="name" type="text"/>
                    </label>
                    <label htmlFor="type" className={this.state.error.type ? "error" : ""}>
                        <span>Type: </span>
                        <input ref={this.type} id="type" type="text"/>
                    </label>
                </div>
                <button onClick={this.create} type="button">Create</button>
            </div>
        );
    }
}

GameForm.propTypes = {
    create: PropTypes.func.isRequired
};
