// "use client";
// import styles from "./Main.module.css";
// import { Player } from "../Player/Player";
// import { Menu } from "../Menu/Menu";
// import { Sidebar } from "../Sidebar/Sidebar";
// import React, { useEffect, useMemo, useState } from "react";
// import { Track } from "./Main.types";
// import { useAppDispatch, useAppSelector } from "@/store/store";
// import { useDispatch } from "react-redux";
// import { setCurrentTracks, setTracks } from "@/store/features/playerSlice";
// import Centerblock from "../Centerblock/Centerblock";

// type Main = {
//   tracks: Track[];
// };

// export const Main = ({ tracks }: Main) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setTracks(tracks));
//     dispatch(setCurrentTracks(tracks));
//   }, [tracks, dispatch]);

  

//   const authState = useAppSelector((state) => state.auth.authState);

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.container}>
//         <main className={styles.main}>
//           {/* <div>{authState ? "Авторизован" : "Не авторизован"}</div> */}
//           <Menu />
//           <Centerblock />
//           <Sidebar />
//         </main>
//         {currentTrack && <Player />}
//         <footer className={styles.footer}></footer>
//       </div>
//     </div>
//   );
// };
