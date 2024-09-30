import axios from "axios";

export const addItems = (item) => async (dispatch) => {
       try {
        dispatch({type: 'items/addItems/pending'});
        const response = await axios.post('http://localhost3000/item', item)
        dispatch({type: 'items/addItems/fulfilled', payload: response.data})
       } catch (error) {
        dispatch({ type: 'items/addItems/rejected'}, payload: error.message)
       }
};