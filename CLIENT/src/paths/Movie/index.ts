import { domain } from "../../configs/setting";

export const moviePaths = {
  getMovieList: `${domain}/api/movieManagement/getMovieList`,
  getMovieDetail: `${domain}/api/movieManagement/getMovieDetail`,
  createMovie: `${domain}/api/movieManagement/createMovie`,
  updateMovie: `${domain}/api/movieManagement/updateMovie`,
  removeMovie: `${domain}/api/movieManagement/removeMovie`,
};
