const actions = {
  TEST({ commit }, payload) {
    setTimeout(() => {
      commit("TEST", payload);
    }, 1000);
  }
};
export default actions;
