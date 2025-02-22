import React, {Component} from 'react'
import {Consumer} from '../../context'
import uuid from 'uuid'

export default class AddContact extends Component {

  state = {
    nom: "",
    email: "",
    tel: ""
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value})

  onSubmit = (dispatch,e) => {
    e.preventDefault()
    //console.log(this.state);

    const newContact = {
      id: uuid(),
      nom: this.state.nom,
      email: this.state.email,
      tel: this.state.tel
    }

    dispatch({type: 'ADD_CONTACT', payload: newContact})

    //remise à zéro du formulaire
    this.setState({
      nom: "",
      email: "",
      tel: ""
    })

    this.props.history.push('/')
  }

  render() {

    return (
      <Consumer>
        {value => {
          return (
            <div className="card mb-3">
            <div className="card-header">Ajouter un Contact</div>
            <div className="card-body">
      
            <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input 
                type="text"
                className="form-control form-control-lg"
                placeholder="Entrez un nom ..."
                name="nom"
                value={this.state.nom}
                onChange={this.onChange}
                />
               </div>
      
               <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                type="text"
                className="form-control form-control-lg"
                placeholder="Entrez un Email ..."
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                />
               </div>
      
               <div className="form-group">
                <label htmlFor="tel">Téléphone</label>
                <input 
                type="text"
                className="form-control form-control-lg"
                placeholder="Entrez un numéro de téléphone ..."
                name="tel"
                value={this.state.tel}
                onChange={this.onChange}
                />
               </div>
      
               <input
               type="submit"
               value="Ajouter"
               className="btn btn-block btn-primary"
               />
      
            </form>
            </div>
              
            </div>
          )
        }}
      </Consumer>

    )
  }
}