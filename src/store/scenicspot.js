import Axios from 'axios';
import { log } from '@/utils/message';
import { axiosThen } from '@/utils/net';
import * as types from './types';
// import { ... } from '@/js/utils/enums';

/** *** Store current user information  */
export default {
  strict: true,        // option 嚴格模式
  namespaced: true,    // option
  state: {
    scenicspot: null,
    scenicspot_list: [],
    scenicspot_list_current_page: 1,
    scenicspot_list_total_page: 1,
    scenicspot_list_has_prev_page: false,
    scenicspot_list_has_next_page: false,
  },
  actions: {
    getScenicSpotList(context, payload) {
      return new Promise((resolve, reject) => {
        const config = {
          method: 'get',
          url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`,
          },
        };

        if (payload.county) {
          config.url += `/${payload.county}?$format=JSON&`;
        }
        else {
          config.url += '?$format=JSON&';
        }

        if (payload.perPage) {
          if (payload.page) {
            config.url += `$top=${payload.page * payload.perPage}&`;
            config.url += `$skip=${(payload.page - 1) * payload.perPage}&`;
          }
          else {
            config.url += `$top=${context.state.scenicspot_list_current_page * payload.perPage}&`;
            config.url += `$skip=${(context.state.scenicspot_list_current_page - 1) * payload.perPage}&`;
          }
        }
        else {
          config.url += '$top=5&';
        }

        if (payload.search) {
          config.url += `$filter=contains(Name,'${payload.search}')&`;
        }

        context.dispatch('startLoading', '取得景點列表中...');
        Axios(config).then((response) => {
          console.log('/v2/Tourism/ScenicSpot', response);
          axiosThen(response, () => {
            // success
            log('取得景點列表成功');
            const currentPage = (payload.page) ? payload.page : context.state.scenicspot_list_current_page;
            context.commit(types.scenicspot.SET_SENICSPOT_LIST, {
              scenicspot_list: response.data,
              // current_page: response.data.scenicspot_list.current_page,
              current_page: currentPage,
              // total_page: response.data.scenicspot_list.last_page,
              // has_prev_page: (!!response.data.scenicspot_list.prev_page_url),
              // has_next_page: (!!response.data.scenicspot_list.next_page_url),
            });
            resolve();
          }, () => {
            // failure
            log(`取得景點列表失敗: ${response.data.message}`, true, false, false, true);
            reject();
          }, () => {
            // no response
            log('取得景點列表失敗: 未收到伺服器回應。', true, false, false, true);
            reject();
          });
        }).catch((error) => {
          log(`取得景點列表失敗: ${error.message}`, true, false, false, true);
          reject();
        }).finally(() => {
          context.dispatch('endLoading');
        });
      });
    },
    setCurrentScenicSpot(context, id) {
      context.commit(types.scenicspot.SET_CURRENT_SENICSPOT, id);
    },
  },
  mutations: {
    [types.scenicspot.SET_SENICSPOT_LIST](state, payload) {
      state.scenicspot_list = [...payload.scenicspot_list];
      state.scenicspot_list_current_page = payload.current_page;
      // state.scenicspot_list_total_page = 1,
      // state.scenicspot_list_has_prev_page = false,
      // state.scenicspot_list_has_next_page = false,
    },
    [types.scenicspot.SET_CURRENT_SENICSPOT](state, id) {
      const idx = state.scenicspot_list.findIndex((scenicspot) => scenicspot.ID === id);
      state.scenicspot = state.scenicspot_list[idx];
    },
  },
  getters: {
    curScenicSpot(state) { return state.scenicspot; },
    scenicSpotList(state) { return state.scenicspot_list; },
    scenicSpotListCurrentPage(state) { return state.scenicspot_list_current_page; },
    scenicSpotListTotalPage(state) { return state.scenicspot_list_total_page; },
    scenicSpotListHasPrevPage(state) { return state.scenicspot_list_has_prev_page; },
    scenicSpotListHasNextPage(state) { return state.scenicspot_list_has_next_page; },
  },
};
