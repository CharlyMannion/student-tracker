import React from 'react';

class ToggleView extends React.Component {
    state = {
        showing: false,
    };

    toggleShowing = () => {
        this.setState((prevState) => {
            return {
                showing: !prevState.showing,
            };
        });
    };

    render() {
        return (
            <aside>
                <button onClick={this.toggleShowing}>Show me the student!</button>
                {this.state.showing ? this.props.children : null}
            </aside>
        )
    }
}

export default ToggleView;