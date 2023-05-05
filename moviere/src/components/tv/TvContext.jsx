import { useState, createContext, useContext } from "react";
const TvContext = createContext();

const TvProvider =({children}) => {
    const [itms, setItems] = useState([]);

    const addToTv = (data, findTvItem) => {
        if (!findTvItem) {
            return setItems((items) => [data, ...items]);
        }
        const filtered = itms.filtered((item) => item._id !== findTvItem._id);
        setItems(filtered);
    };
    const removeFromTv = (item_id) =>{
        const filtered = itms.filter((item)=>item._id !== item_id);
        setItems(filtered);
    };

    const values = {
        itms,
        setItems,
        addToTv,
        removeFromTv,
    };

    return(<TvContext.Provider value={values}>{children}</TvContext.Provider>
    );
};

const useTv = () => useContext(TvContext);

export {TvProvider, useTv};