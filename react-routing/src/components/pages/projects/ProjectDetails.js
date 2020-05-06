import React from 'react';
import { myProjects } from './Projects'     // Llamada BBDD (guiño, guiño)
import { Link } from 'react-router-dom'

import queryString from 'query-string'

const projectDetails = props => {

    console.log('objeto de props:', props)

    const foundProject = myProjects.find(elm => props.match.params.id === elm.id)

    // Descomposición del valores:
    const values = queryString.parse(props.location.search)
    console.log('Query strings deconstruidos:', values)

    return (
        <>
            <h2>El URL param es: {props.match.params.id}</h2>
            <h2>Los query strings son: {props.location.search}</h2>
            <p>(si miras la consola los tienes en un objeto!</p>
            <Link to='/projects/3c?name=React&surname=Loquesea'>Carga unos Query Strings!</Link>

            <hr />
            <h2>Info del proyecto</h2>
            <h2>{foundProject.name} <span style={{ fontSize: "14px" }}>{foundProject.year}</span></h2>
            <h3>Used technologies: {foundProject.technologies}</h3>
            <p>{foundProject.description}</p>
            <Link to='/projects'>Back</Link>
        </>
    )
}

export default projectDetails