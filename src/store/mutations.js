const mutations = {
  TEST(state, payload) {
    state.test = payload.val;
  },

  SET_STATE(state, payload) {
    state[payload.name] = payload.val;
  },

  OPEN(state, payload) {
    state.mask = !state.mask

    for (let key in state.pop) {
      state['pop'][key] = false;
    }

    if (payload && payload.val) {
      state['pop'][payload.name] = payload.val;
    }
  }
};

export default mutations;
