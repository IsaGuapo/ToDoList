import React, { Component } from 'react'

export class Item extends Component {
    
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
            supplier: this.props.info.asignee || "Isa" 
        }
    }
    
    render() {
        const {name,date,asignee} = this.props.info

        return (
            <div>
                <p>Tarea:{name}, Fecha:{date} Asignada a : {this.state.asignee}</p>
                <button onClick={this.props.delete}> Borrar</button>
            </div>
        )
    }
}

export default Item
