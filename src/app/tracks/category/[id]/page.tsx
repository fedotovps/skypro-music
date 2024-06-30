import { playlistApi } from "@/api/playlistApi";
import Centerblock from "@/components/Centerblock/Centerblock";
import styles from "../../layout.module.css";
import { Search } from "@/components/Search/Search";
import { Track } from "@/components/Main/Main.types";

type CategoryProps = {
    params: {
        id: string;
    }
}

const Category = async ({params} : CategoryProps) => {
    
    let tracks : Track[] = [];
    let errorMessage : string | null = null;

    try {
        tracks = await playlistApi(params.id);
    } catch(err: unknown) {
        errorMessage = err instanceof Error 
            ? "Возникли проблемы при загрузке треков: "+err.message 
            : "Неизвестная ошибка";
    }

    // useEffect(() => {
    //     playlistApi(params.id)
    //         .then((response) => {
    //             console.log(response.id);
    //             dispatch(setTracks(response.items));
    //             setIsLoading(true);                
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //             setError("Ошибка загрузки треков");
    //         })
    // }, []);

    return (
        <>
            <div className={styles.main__centerblock}>
                <Search />
                <h2 className={styles.centerblock__h2}>Треки</h2>
                <Centerblock allTracks={tracks} errorMessage={errorMessage} />
            </div>
        </>
    )
}

export default Category;