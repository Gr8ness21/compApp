import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class SinglePark extends Component {
    state = {
        park: {
            name: '',
            bio: '',
            side: ''
        },
        resInfo: {
            park: {
                _id: '',
                name: '',
                bio: '',
                side: ''
            },
            parks: []
        },
        redirectToHome: false,
        isEditFormDisplayed: false
    }
getpark=()=>{
    axios.get(`/api/parks/${this.props.match.params.id}`).then(res => {
        console.log(res.data)
        this.setState({ park: res.data })
    })
}

    componentDidMount = () => {
        this.getpark()
       
    }

    deletePark = () => {
        axios.delete(`/api/parks/${this.props.match.params.id}`).then(res => {
            this.setState({ redirectToHome: true })
        })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleChange = (e) => {
        const clonePark = { ...this.state.park }
        clonePark[e.target.name] = e.target.value
        this.setState({ park: clonePark })
    }

    updatePark = (e) => {
        e.preventDefault()
        axios
            .put(`/api/parks/${this.props.match.params.id}`, {
                name: this.state.park.name,
                bio: this.state.park.bio,
                side: this.state.park.side
            })
            .then(res => {
                this.setState({ city: res.data, isEditFormDisplayed: false })
            })
            this.getpark()
    }

    render() {
        if (this.state.redirectToHome) {
            return (<Redirect to="/parks" />)
        }

        return (
            <div>
                <Link to="/parks">Back to Parks</Link>
                {/* { <h1>{this.state.resInfo.park.name}</h1> }
                { <p>{this.state.resInfo.park.bio}</p> }
                { <h2>{this.state.resInfo.park.side}</h2> } */}
                <button onClick={this.toggleEditForm}>Edit</button>
                {
                    this.state.isEditFormDisplayed
                        ? <form onSubmit={this.updatePark}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    placeholder={this.state.park.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="bio">Bio</label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    onChange={this.handleChange}
                                    placeholder={this.state.park.bio}
                                />
                            </div>
                            <div>
                                <label htmlFor="side">Side</label>
                                <textarea
                                    id="side"
                                    name="side"
                                    onChange={this.handleChange}
                                    placeholder={this.state.park.side}
                                />
                            </div>
                            <button>Update</button>
                        </form>
                        : <div>
                            <div>
                                Name: {this.state.park.name}
                            </div>
                            <div>
                                Bio: {this.state.park.bio}
                            </div>
                            <div>
                                Side: {this.state.park.side}
                            </div>
                            <button onClick={this.deletePark}>Delete</button>
                        </div>
                }
            </div>
        );
    }
}

export default SinglePark;