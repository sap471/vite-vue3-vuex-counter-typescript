import { MutationTree } from "vuex";
import { State } from "./state";

export enum MutationType {}

export type Mutations = {
  increment(state: State): void;
  decrement(state: State): void;
};

export const mutations: MutationTree<State> & Mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    if (state.count > 0) state.count--;
  },
};
