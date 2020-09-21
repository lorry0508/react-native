import { Model, Effect } from "dva-core-ts";
import { Reducer } from "redux";

interface HomeState {
    num: number;
}

interface HomeModel extends Model {
    [x: string]: any;
    namespace: 'home';
    state: {
        num: number
    };
    reducers: {
        add: Reducer<HomeState>
    };
    // effects: {
    //     asyncAdd: Effect
    // }
}

const initialState = {
    num: 1
};

const homeModel: HomeModel = {
    namespace: 'home',
    state: initialState,
    reducers: {
        add(state = initialState, { type, payload }) {
            return {
                ...state,
                num: state.num + payload.num
            };
        }
    },
};

export default homeModel;