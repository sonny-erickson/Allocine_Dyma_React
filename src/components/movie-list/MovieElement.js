import React, { Component } from 'react'

export default class MovieElement extends Component {
    render() {
        return (
            <div className="w-50 p-2">
                <div className="d-flex border">
                    <img width="150" height="200" alt="movie" src="https://xl.movieposterdb.com/11_04/2000/172495/xl_172495_1b7c87d0.jpg" />
                    <div className="d-flex flex-column flex-fill p-3">
                        <h5 >Gladiator</h5>
                        <hr className="w-100"/>
                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        )
    }
}