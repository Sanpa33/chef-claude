import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'


export default function Recipie(props){
    return(
        <section className="suggested-recipe-container" aria-live="polite">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )    
}