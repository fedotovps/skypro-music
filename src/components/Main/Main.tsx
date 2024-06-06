"use client";
import styles from "./Main.module.css";
import { Player } from "../Player/Player";
import { Menu } from "../Menu/Menu";
import { Sidebar } from "../Sidebar/Sidebar";
import { Centerblock } from "../Centerblock/Centerblock";
import React, { useState } from "react";
import { Track } from "./Main.types";
import { useAppDispatch, useAppSelector } from "@/store/store";

type Main = {
  tracks: Track[];
}

export const Main = ( {tracks} : Main ) => {
  // Вытаскиваем состояние текущего трека
  const currentTrack = useAppSelector((state) => state.player.currentTrack);
  // Состояние для ID текущего трека
  const [currentTrackId, setCurrentTrackId] = useState(0);

  const authState = useAppSelector((state) => state.auth.authState);

    return (
      <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          {/* <div>{authState ? "Авторизован" : "Не авторизован"}</div> */}
          <Menu />
          <Centerblock tracks={tracks} />
          <Sidebar />
        </main>
        {currentTrack && <Player />}
        <footer className={styles.footer}></footer>
      </div>
    </div>
    );
}