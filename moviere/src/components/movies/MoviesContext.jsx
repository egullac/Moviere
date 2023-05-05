import { useState, createContext, useContext } from "react";
const MoviesContext = createContext();

const MoviesProvider =({children}) => {
    const [items, setItems] = useState([]);

    const addToMovies = (data, findMoviesItem) => {
        if (!findMoviesItem) {
            return setItems((items) => [data, ...items]);
        }
        const filtered = items.filtered((item) => item._id !== findMoviesItem._id);
        console.log (filtered);
        setItems(filtered);
    };
    const removeFromMovies = (item_id) =>{
        const filtered = items.filter((item)=>item._id !== item_id);
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