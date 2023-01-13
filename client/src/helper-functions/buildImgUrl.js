const buildImgUrl = (backdrop_path, size) => {
  return 'https://image.tmdb.org/t/p/'+size+backdrop_path;
};

export default buildImgUrl;
