import axios from "axios";

export const fetchProduct = async (id) => {
    const { data } = await axios.get(`http://localhost:3000/${id}`);
    return data;
} ;