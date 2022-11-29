export const initialState = {
    arrProd: [],
    user: null,
    shippinData: {}
}

export const actionTypes = {
    ADD_TO_ARR: "ADD_TO_ARR",
    REMOVE_ITEM: "REMOVE_ITEM",
    SET_USER: "SET_USER",
    EMPTY_ARR_PROD: "EMPTY_ARR_PROD",
    SET_SHIPPING_DATA: "SET_SHIPPING_DATA"
}

export const getTotalPrice = (arrProd) => arrProd.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) =>{
    switch (action.type) {
        case "ADD_TO_ARR":
            return{
                ...state,
                arrProd: [...state.arrProd, action.item]
            }
        case "REMOVE_ITEM":
            const index = state.arrProd.findIndex(item => item.id === action.id);
            let newArrProd = [...state.arrProd];
            if(index >= 0){
                newArrProd.splice(index, 1);
            }else{
                console.log(' No se encontro elemento para eliminar')
            }

            return{
                ...state,
                arrProd: newArrProd,
            }
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }   
        case "EMPTY_ARR_PROD":
            return{
                ...state,
                arrProd: action.arrProd
            }     

        case "SET_SHIPPING_DATA":
            return{
                ...state,
                shippinData: action.shippinData
            }     
        default:
            console.log(state);
    }
}

export default reducer;