import React, { Component } from 'react';

class panel extends Component {
    render() {
        console.log('panel render')
        return (
            <div>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })
                }
                <button onClick={this.handleAdd}>add one</button>
            </div>
        );
    }

    handleAdd = () => {
        this.props.handleAddOne()
    }
}

export default panel;