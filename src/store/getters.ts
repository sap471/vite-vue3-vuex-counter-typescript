import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  counter(state: State): number;
};

export const getters: GetterTree<State, State> & Getters = {
  counter(state) {
    return state.count;
  },
};
