import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4 px-4">
        {/* Featured Charts Section */}
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {albumsData.map((item, index) => (
            <div key={index} className="min-w-[200px]">
              <AlbumItem
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            </div>
          ))}
        </div>

        {/* Today's Hits Section */}
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {songsData.map((item, index) => (
            <div key={index} className="min-w-[200px]">
              <SongItem
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
