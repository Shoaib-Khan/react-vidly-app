import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDeleteMovie(_id) {
    deleteMovie(_id);
    this.setState({ movies: getMovies() });
  }

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  renderTableData() {
    return this.state.movies.map(movie => {
      const { _id, title, genre, numberInStock, dailyRentalRate, liked } = movie;
      return (
        <tr key={_id}>
          <td>{title}</td>
          <td>{genre.name}</td>
          <td>{numberInStock}</td>
          <td>{dailyRentalRate}</td>
          <td>
            <Like
              liked={liked}
              onClick={() => this.handleLike(movie)}
            />
          </td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.handleDeleteMovie(_id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { length: count } = this.state.movies;
    return (
      <React.Fragment>
        {count != 0 && <p>Showing {count} movies in the database.</p>}
        {count === 0 && <p>There are no movies in the database.</p>}
        {count != 0 && (
          <table id="movies" className="table">
            <thead>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
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
