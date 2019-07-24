import React from 'react'

export default function APropos() {
  return (
    <div>
      <h1 className="display-5">Détails de l'AppContacts:</h1>
        <p className="lead">Version 1.0.0</p>
        <p>Cet outil a été créé lors de ma formation React sur <a href="https://www.udemy.com/react-formation-complete/" target="noopener">Udemy</a></p>
        <br/>
      <h4><u>Pour utiliser AppContacts:</u></h4>
        <ul>
          <li>Dans le menu, cliquez sur <a href="/ajouter" target="noopener">Ajouter</a>.</li>
          <li>Ajoutez les données de votre nouveau contact puis "Ajouter".</li>
          <li>Retournez dans <a href="/" target="noopener">Accueil</a> pour voir l'ajout de votre contact dans la liste.</li>
          <li>Vous pouvez si vous le souhaitez supprimer l'un de vos contacts en cliquant sur la croix rouge près du contact à supprimer.</li>
        </ul>
    </div>
  )
}