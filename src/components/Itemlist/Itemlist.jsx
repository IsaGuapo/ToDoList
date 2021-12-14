import React, { Component } from "react";
import Item from "./Item"

    //creacion del componente
class Itemlist extends Component {
  //rconst para pintar al constructor
  constructor(props) {
    super(props)

    this.state = {
      lastAdded:{}, // Creamos un objeto vacio que modifica el estado, el Ultimo añadido
      taskList:[] //[{},{},{},{},{},{}]  es un array de objetos que guarda las tareas que vamos añadiendo.
    
    }
}

//Funcion para crear las tareas
  createTask = (name,date,assignee) => {
    const newTask= {name,date,assignee}

    
    this.setState({lastAdded:newTask}) // Modifica el estado. Ultimo añadido
    this.setState({taskList:[...this.state.taskList,newTask]}) //spread operator para meter productos nuevos y que se guarden en el array ProductList
   
}

//Funcion para pintar tareas
  paintTask = () =>{
    // lee de state taskList OK
    // Los recorre con un bucle ->Transformar datos de array a componente Item--> MAP
    // Los pinta en el DOM
    // {} ---> <Product>
    //[{},{},{},{}] ---> [<Item>,<Item>,<Item>]
    // Devuelve [<Item>,<Item>,<Item>]
    return this.state.taskList.map((item, i)=> <Item info={item} delete={()=>this.deleteTask(i)} key={i}/>) // con el i le pasamos un indice al .map para asignarsela luego como clave unica a cada producto
  }
// Funcion para borrar un solo producto elegido por posicion del array

  deleteTask = (i)=> {
    const item = this.state.taskList.filter((item,j)=> j!==i) //se queda con los que no vas a borrar
    this.setState({taskList:item})
  }

  //Funcion para obtner  los valores de los campos que creamos. Previene el comporatamiento por defecto con preventDefault. 
  //Lugo llamamos a la funcion
  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value
    const date = event.target.date.value
    const assignee = event.target.assignee.value
    this.createTask(name, date, assignee) //llamada a la funcion
  }
  
  render() {
    const name =  this.state.lastAdded.name
    const date = this.state.lastAdded.date
    const assignee = this.state.lastAdded.assignee

    return <div>
      <h1>To Do List </h1>

      <h4>Crear una nueva tarea</h4>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Tarea:</label><br/>
                    <input type="text" name="name" id="name" /><br/>

                    <label htmlFor="date">Fecha:</label><br/>
                    <input type="date" name="date" id="date" /><br/>

                    <label htmlFor="assignee">Responsable:</label><br/>
                    <input type="text" name="assignee" id="assignee"/><br/>
                    <input type="submit" />
                  
                </form>
                
                {this.paintTask()}
                 <button onClick={this.deleteAllProducts}>Borrar Todo </button>
                 <button onClick={this.createTask}>Crear</button>
                 <h5>Última tarea creada  : {name} con fecha {date} realizada por {assignee}</h5>
      </div>;
  }
}

export default Itemlist;
