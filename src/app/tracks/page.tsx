import Centerblock from "@/components/Centerblock/Centerblock";
import Filter from "@/components/Filter/Filter";
import styles from "./layout.module.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Search } from "@/components/Search/Search";
import { getTracks } from "@/api/tracksApi";
import { Track } from "@/components/Main/Main.types";

const MainTracksPage = async () => {
  let tracks: Track[] = [];
  let errorMessage: string | null = null;

  try {
    tracks = await getTracks();
  } catch (err: unknown) {
    errorMessage =
      err instanceof Error
        ? "Возникли проблемы при загрузке треков: " + err.message
        : "Неизвестная ошибка";
  }

  return (
    <>
      <div className={styles.main__centerblock}>
        <Search />
        <h2 className={styles.centerblock__h2}>Треки</h2>
        <Filter allTracks={tracks} />
        <Centerblock allTracks={tracks} errorMessage={errorMessage} />
      </div>
      <Sidebar />
    </>
  );
};

export default MainTracksPage;
