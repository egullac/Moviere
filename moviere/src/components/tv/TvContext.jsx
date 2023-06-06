import { useState, createContext, useContext,useEffect } from "react";
const TvContext = createContext();

const defaultTV = JSON.parse(localStorage.getItem("tv")) || [];

const TvProvider =({children}) => {
    const [itms, setItems] = useState(defaultTV);

    useEffect(() => {
        localStorage.setItem("tv",JSON.stringify(itms));
    },[itms]);

    const addToTv = (data) => {
        setItems((prev) => [...prev,data]);
    };
    const removeFromTv = (item_id) =>{
        const filtered = itms.filter((item)=>item.id !== item_id);
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