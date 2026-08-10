import { useEffect, useState } from "react";
import { getTrending } from '../api/tmdb-api'
import { PopularActors } from '../types/interfaces';

const useTrending = (range: string) => {
    const [actors, setActors] = useState<PopularActors>();
    useEffect(() => {
        getTrending(range).then(actors => {
            setActors(actors);
        });
    }, [range]);
    return [actors, setActors] as const;
};

export default useTrending
