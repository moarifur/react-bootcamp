import React, {Component} from 'react';
import {movies} from "./fakeMovieService";

class Movies extends Component {
    state = {
        movies
    }

    handleDelete = (myMovie) => {
        // Create new movie list except deleted one
        const newMovieList = this.state.movies.filter(movie => movie._id !== myMovie._id)
        // Update state
        this.setState({movies: newMovieList})
    }

    render() {
        if(this.state.movies.length === 0)
            return <h3>There is no movies in the database</h3>

        return (
            <>
                <header className="d-flex align-items-center pb-3 mb-3 border-bottom">
                    <span className="fs-4">
                        {this.state.movies.length} movies in the database
                    </span>
                </header>

                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-warning">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                        {this.state.movies.map(movie =>
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <button
                                        onClick={() => this.handleDelete(movie)}
                                        className='btn btn-danger'
                                     >Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/*--- Checker ---*/}
                {/*{this.state.movies.map(movie => movie.title)}*/}
            </>
        );
    }
}

export default Movies;