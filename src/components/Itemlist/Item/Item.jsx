import React, { Component } from 'react'

export class Item extends Component {
    
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
            assignee: this.props.info.assignee || "Isa" 
        }
    }
    
    render() {
        const {name,date,assignee} = this.props.info

        return (
            <div>
                <p>Tarea:{name}, con Fecha:{date}, Asignada a : {this.state.assignee}</p>
                <button onClick={this.props.delete}> Borrar</button>
            </div>
        )
    }
}

export default Item
