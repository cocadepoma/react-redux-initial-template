import { types } from "../types/types";


const initialState = {
    test: ["initalState running"]
}

export const testReducer = (state = initialState, action) => {



    switch (action.type) {

        case types.test:
            return state;

        default:
            return state;
    }
}