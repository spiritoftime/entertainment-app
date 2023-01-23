import { useState } from "react";

const Pagination = ({ currPage, setCurrPage, totalPage, setFetchedData }) => {
  return (
    <div className="w-fit mx-auto border-2 border-black rounded-lg text-white flex items-center justify-center">
      <button
        onClick={() => {
          setCurrPage((prevPage) => prevPage - 1);
        }}
        className={
          currPage > 1
            ? `gap-2 px-2 py-2  flex items-center cursor-pointer hover:bg-black`
            : "gap-2 px-2 py-2  flex items-center"
        }
        disabled={currPage === 1}
      >
        <svg
          fill="white"
          height="12px"
          width="12px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 25.451 25.451"
          xml:space="preserve"
        >
          <g>
            <g id="c185_triangle">
              <path
                d="M20.982,0.521v2.006L8.57,12.315c-0.121,0.101-0.195,0.251-0.195,0.41s0.074,0.311,0.195,0.41l12.412,9.79v2.005
			c0,0.199-0.115,0.383-0.297,0.469c-0.178,0.086-0.395,0.064-0.549-0.061L4.664,13.136c-0.122-0.1-0.194-0.251-0.194-0.41
			s0.072-0.31,0.194-0.41L20.136,0.113c0.154-0.126,0.371-0.148,0.549-0.061C20.866,0.139,20.982,0.322,20.982,0.521z"
              />
            </g>
            <g id="Capa_1_58_"></g>
          </g>
        </svg>
        <span>Prev</span>
      </button>
      <p className="bg-white text-black px-2  py-2 ">{`Page ${currPage} of ${totalPage}`}</p>
      <button
        onClick={() => {
          setCurrPage((prevPage) => prevPage + 1);
        }}
        className={
          currPage < totalPage
            ? `gap-2 px-2 py-2  flex items-center cursor-pointer hover:bg-black`
            : "gap-2 px-2 py-2  flex items-center"
        }
      >
        <span>Next</span>
        <svg
          width="12px"
          height="12px"
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
