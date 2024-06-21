"use client";
import styles from "./Main.module.css";
import { Player } from "../Player/Player";
import { Menu } from "../Menu/Menu";
import { Sidebar } from "../Sidebar/Sidebar";
import React, { useEffect, useMemo, useState } from "react";
import { Track } from "./Main.types";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { setCurrentTracks, setTracks } from "@/store/features/playerSlice";
import Centerblock from "../Centerblock/Centerblock";

type Main = {
  tracks: Track[];
};

export const Main = ({ tracks }: Main) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTracks(tracks));
    dispatch(setCurrentTracks(tracks));
  }, [tracks, dispatch]);

  const apiTracks = useAppSelector((state) => state.player.playlist);
  const filterTracks = useAppSelector((state) => state.player.filterPlaylist);

  // Используем UseMemo для кэширования значений apiTracks и filterTracks, чтобы избежать лишних вычислений при ререндерах
  const memoizedApiTracks = useMemo(() => apiTracks, [apiTracks]);
  const memoizedFilterTracks = useMemo(() => filterTracks, [filterTracks]);

  // Вытаскиваем состояние текущего трека
  const currentTrack = useAppSelector((state) => state.player.currentTrack);

  const authState = useAppSelector((state) => state.auth.authState);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          {/* <div>{authState ? "Авторизован" : "Не авторизован"}</div> */}
          <Menu />
          <Centerblock
            filterTracks={memoizedFilterTracks}
            apiTracks={memoizedApiTracks}
          />
          <Sidebar />
        </main>
        {currentTrack && <Player />}
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};
