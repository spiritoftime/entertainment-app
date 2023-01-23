import React from 'react'

const AllCategoriesPage = () => {
  return (
    <div className="">
      <Grid>
        {fetchedData.films.results.map((movie, idx) => (
          <AllFilm
            num={idx}
            relativePath={`/now_playing/${movie.id}`}
            filmType={type}
            backdrop={movie.backdrop_path}
            poster_path={movie.poster_path}
            key={movie.id}
            id={movie.id}
            date={movie.release_date}
            title={movie.title}
          />
        ))}
      </Grid>
      <Pagination
        searchParams={searchParams}
        currPage={currPage}
        setCurrPage={setCurrPage}
        setSearchParams={setSearchParams}
        totalPage={fetchedData.films.total_pages}
      />
    </div>
  )
}

export default AllCategoriesPage
