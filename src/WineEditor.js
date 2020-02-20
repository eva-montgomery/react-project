import React from 'react';
import WineList from '../WineList'


class WineEditor extends React.Component {

    constructor(props) {
        super(props);

        console.log('Option to edit a wine in the list');
        this.state = {
            changedWine: {}
        }
    }

    static getDerivedStateFromProps(props, state) {


        if (props.wine.id === state.changedWine.id) {
            return {
                ...state
            }
        } else {
            return {
                ...state,
                changedWine: {
                    ...props.wine
                }
            }
        }

    }
    
    render() {
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <input 
                        value={this.state.changedWine.title} 
                        onChange={(event) => {
                            this._updateLocalWine({
                                ...this.state.changedNote,
                                title: event.target.value
                            });
                        }}
                    />
                    <br />
                    <textarea 
                        value={this.state.changedNote.copy} 
                        onChange={(event) => {
                            this._updateLocalWine({
                                ...this.state.changedWine,
                                copy: event.target.value
                            });
                        }}
                    />
                    <button>Save</button>                    
                </form>
            </div>
        );
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleChange(this.state.changedNote);
    }

    _updateLocalNote = (changedNote) => {
        this.setState({
            changedNote
        });
    }
}

export default WineEditor;