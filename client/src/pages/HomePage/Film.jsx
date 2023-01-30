import React from "react";
import { useNavigate } from "react-router-dom";
import buildImgUrl from "../../helper-functions/buildImgUrl";
import tvSVG from "../../assets/television-svgrepo-com (1).svg";
const Film = (props) => {
  const { backdrop, id, date, title, filmType, relativePath, num } = props;
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(relativePath);
  };
  const bookmarkHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={navigateHandler}
      className={`${
        num === 4 || num === 5 ? "lg:col-span-2 " : ""
      } cursor-pointer hover:translate-y-[-4px] duration-200  flex flex-col`}
    >
      <div className="relative">
        <img
          src={backdrop ? buildImgUrl(backdrop) : buildImgUrl(poster_path)}
          alt={"Movie image for" + title}
          className={`${
            num === 4 || num === 5
              ? "max-h-[200px] w-full object-left-top object-cover aspect-video "
              : "aspect-video object-cover"
          } rounded-lg`}
        />
        <div className="top-1 right-1 flex justify-center items-center absolute bg-darkBlue opacity-50 w-6 md:w-10 h-6 md:h-10 lg:w-12 lg:h-12 rounded-full ">
          <svg
            onClick={bookmarkHandler}
            className="w-3.5 md:w-8 h-4.5 md:h-8 lg:w-10 lg:h-10 stroke-2 z-10 "
            fill="none"
            stroke="white"
            viewBox="0 0 64 64"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xml:space="preserve"
            xmlns:serif="http://www.serif.com/"
          >
            <rect
              id="Icons"
              x="-576"
              y="-192"
              width="1280"
              height="800"
              style={{ fill: "none" }}
            />

            <g id="Icons1">
              <g id="Strike"></g>
              <g id="H1"></g>
              <g id="H2"></g>
              <g id="H3"></g>
              <g id="list-ul"></g>
              <g id="hamburger-1"></g>
              <g id="hamburger-2"></g>
              <g id="list-ol"></g>
              <g id="list-task"></g>
              <g id="trash"></g>
              <g id="vertical-menu"></g>
              <g id="horizontal-menu"></g>
              <g id="sidebar-2"></g>
              <g id="Pen"></g>
              <g id="Pen1" serif:id="Pen"></g>
              <g id="clock"></g>
              <g id="external-link"></g>
              <g id="hr"></g>
              <g id="info"></g>
              <g id="warning"></g>
              <g id="plus-circle"></g>
              <g id="minus-circle"></g>
              <g id="vue"></g>
              <g id="cog"></g>
              <g id="logo"></g>
              <path
                id="bookmark"
                d="M43.967,55.946l-0.003,0l-11.997,-15.995l-11.997,15.995l-0.003,0l0,-48l24,0l0,48Z"
              />
              <g id="radio-check"></g>
              <g id="eye-slash"></g>
              <g id="eye"></g>
              <g id="toggle-off"></g>
              <g id="shredder"></g>
              <g
                id="spinner--loading--dots-"
                serif:id="spinner [loading, dots]"
              ></g>
              <g id="react"></g>
              <g id="check-selected"></g>
              <g id="turn-off"></g>
              <g id="code-block"></g>
              <g id="user"></g>
              <g id="coffee-bean"></g>
              <g id="coffee-beans">
                <g id="coffee-bean1" serif:id="coffee-bean"></g>
              </g>
              <g id="coffee-bean-filled"></g>
              <g id="coffee-beans-filled">
                <g id="coffee-bean2" serif:id="coffee-bean"></g>
              </g>
              <g id="clipboard"></g>
              <g id="clipboard-paste"></g>
              <g id="clipboard-copy"></g>
              <g id="Layer1"></g>
            </g>
          </svg>
        </div>
      </div>

      <div className="flex font-light flex-row items-center gap-1.5">
        <p className="text-white text-xs">{date.split("-")[0]}</p>
        <div className="flex items-center flex-row gap-1.5">
          <p className="text-white">•</p>
          {filmType === "Movie" ? (
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                fill="white"
                opacity=".75"
              />
            </svg>
          ) : (
            <img className="w-3 h-3" src={tvSVG} />
          )}
          <p className="text-white text-xs">{filmType}</p>
        </div>
      </div>
      <div>
        <p className="font-bold text-white truncate text-ellipsis overflow-hidden">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Film;
