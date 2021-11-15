import { ui } from './types';

/** *** Store UI status */
export default {
  strict: true,
  // namespaced: true,  // option
  state: {
    /** ui */
    isLoading: false,
    loadingMsg: '',
    showFrostedGlass: false,
  },
  actions: {
    /** ui */
    startLoading(context, msg) {
      context.commit(ui.SET_LOADING, { status: true, msg });
    },
    endLoading(context) {
      context.commit(ui.SET_LOADING, { status: false });
    },
    showFrostedGlass(context, isOpen) {
      context.commit(ui.SET_FROSTED_GLASS, isOpen);
    },
  },
  mutations: {
    /** ui */
    [ui.SET_LOADING](state, { status, msg }) {
      state.isLoading = status;
      state.loadingMsg = (msg && msg.length > 0) ? msg : '';
    },
    [ui.SET_FROSTED_GLASS](state, isOpen) {
      state.showFrostedGlass = isOpen;
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    loadingMsg(state) {
      return state.loadingMsg;
    },
    isShowFrostedGlass(state) {
      return state.showFrostedGlass;
    },
  },
};
