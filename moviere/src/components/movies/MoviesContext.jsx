import { useState, createContext, useContext ,useEffect, Children} from "react";
const MoviesContext = createContext();

const defaultMovies = JSON.parse(localStorage.getItem("data")) || [];

const MoviesProvider =({children}) => {
    const [items, setItems] = useState(defaultMovies);

    useEffect(() => {
        localStorage.setItem("data",JSON.stringify(items));
    },[items]);

    const addToMovies = (data) => {
        setItems((prev) => [...prev,data]);
    };
    const removeFromMovies = (item_id) =>{
        const filtered = items.filter((item)=>item.id !== item_id);
        setItems(filtered);
    };

    const values = {
        items,
        setItems,
        addToMovies,
        removeFromMovies,
    };

    return(<MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
    );
};

const useMovies = () => useContext(MoviesContext);

export {MoviesProvider, useMovies};