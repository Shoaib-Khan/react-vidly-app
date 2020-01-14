import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDeleteMovie(_id) {
    deleteMovie(_id);
    this.setState({ movies: getMovies() });
  }

  renderTableData() {
    return this.state.movies.map(movie => {
      const { _id, title, genre, numberInStock, dailyRentalRate } = movie;
      return (
        <tr key={_id}>
          <td>{title}</td>
          <td>{genre.name}</td>
          <td>{numberInStock}</td>
          <td>{dailyRentalRate}</td>
          <td>
            <button className="btn btn-danger btn-sm" onClick={() => this.handleDeleteMovie(_id)}>Delete</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    const {length: count} = this.state.movies;
    return (
      <React.Fragment>
        {count != 0 && (
          <p>
            Showing {count} movies in the database.
          </p>
        )}
        {count === 0 && (
          <p>There are no movies in the database.</p>
        )}
        {count != 0 && (
          <table id="movies" className="table">
            <thead>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        )}
      </React.Fragment>
    );
  }
}

export default Movies;
