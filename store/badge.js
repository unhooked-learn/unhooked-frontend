import { clone, isEmpty } from 'lodash'

import {
  achievementType,
  achievementName,
  achievements
} from '../helpers/achievements'

let badgeStub = {
  active: false,
  description: '',
  iconName: 'egg',
  name: ''
}

const mutationsTypes = {
  SELECT_BADGE_MODAL: 'SELECT_BADGE_MODAL',
  CLEAR_SELECTED_BADGE_MODAL: 'CLEAR_SELECTED_BADGE_MODAL',
  SET_BADGES: 'SET_BADGES',
  REWARD_BADGE: 'REWARD_BADGE',
  DISPALY_REWARD_BADGE: 'DISPALY_REWARD_BADGE'
}

export const state = () => ({
  badge: clone(badgeStub),
  badges: [],
  badgesToReward: [],
  rewardedBadge: {}
})

export const mutations = {
  [mutationsTypes.SELECT_BADGE_MODAL](state, badge) {
    state.badge = badge
  },
  [mutationsTypes.CLEAR_SELECTED_BADGE_MODAL](state) {
    state.badge = clone(badgeStub)
  },
  [mutationsTypes.SET_BADGES](state, badges) {
    state.badges = badges
  },
  [mutationsTypes.REWARD_BADGE](state, badges) {
    state.badgesToReward.push(badges)
  },
  [mutationsTypes.DISPALY_REWARD_BADGE](state) {
    state.rewardedBadge = null

    let badge = state.badgesToReward.shift()
    if (!badge) return

    state.rewardedBadge = state.badges.find(item => item.id === badge.id)
  }
}

export const actions = {
  selectBadge({ commit }, badge) {
    commit(mutationsTypes.SELECT_BADGE_MODAL, badge)
  },
  clearBadge({ commit }) {
    commit(mutationsTypes.CLEAR_SELECTED_BADGE_MODAL)
  },
  async fetchBadges({ commit }) {
    let badges = await this.$axios.$get('achievements')
    commit(mutationsTypes.SET_BADGES, badges)
  },

  async rewardBadgePoints({ commit, dispatch, state }, points) {
    if(isEmpty(state.badges)) return;

    const items = achievements
      .filter(item => item.type === achievementType.POINTS)
      .filter(item => item.unlocked(points))
      .filter(item => !state.badges.find(i => i.id === item.id).active)

    if (isEmpty(items)) return

    items.forEach(async item => {
      commit(mutationsTypes.REWARD_BADGE, item)
      await dispatch('_updateUserBadges', item.name)
    })

    commit(mutationsTypes.DISPALY_REWARD_BADGE)

    await dispatch('fetchBadges')
  },

  async rewardBadgeUnit({ commit, dispatch, state }, unitOrderId) {
    if(isEmpty(state.badges)) return;

    const item = achievements
      .filter(item => item.type === achievementType.UNIT)
      .filter(item => !state.badges.find(i => i.id === item.id).active)
      .find(item => item.unlocked(unitOrderId))

    if (isEmpty(item)) return

    await dispatch('_updateUserBadges', item.name)

    commit(mutationsTypes.DISPALY_REWARD_BADGE)

    await dispatch('fetchBadges')
  },

  async rewardBadgeUnit({ commit, dispatch, state }, unitOrderId) {
    if(isEmpty(state.badges)) return;

    const item = achievements
      .filter(item => item.type === achievementType.UNIT)
      .filter(item => !state.badges.find(i => i.id === item.id).active)
      .find(item => item.unlocked(unitOrderId))

    if (isEmpty(item)) return

    commit(mutationsTypes.REWARD_BADGE, item)

    await dispatch('_updateUserBadges', item.name)

    commit(mutationsTypes.DISPALY_REWARD_BADGE)

    await dispatch('fetchBadges')
  },

  /**
   *  badge
   *  {
   *  name?: achievementName,
   *  condition: number|any
   * }
   *
   * @param {*} param0
   * @param {*} badge
   */

  async rewardBadgeDirectly({ commit, dispatch, state }, badge) {
    if(isEmpty(state.badges)) return;
    
    const item = achievements.find(item => item.name == badge.name)

    if (isEmpty(item)) return
    
    if (isEmpty(state.badges)) return

    if (state.badges.find(i => i.id === item.id).active) return

    if (!item.unlocked(badge.condition)) return

    commit(mutationsTypes.REWARD_BADGE, item)

    await dispatch('_updateUserBadges', item.name)

    commit(mutationsTypes.DISPALY_REWARD_BADGE)

    await dispatch('fetchBadges')
  },

  async _updateUserBadges({ dispatch }, achievementName) {
    await this.$axios({
      method: 'post',
      url: 'achievement',
      data: achievementName,
      headers: {
        'Content-Type': 'text/plain'
      }
    })
  },

  nextRewardedBadges({ commit }) {
    commit(mutationsTypes.DISPALY_REWARD_BADGE)
  }
}

export const getters = {
  badge(state) {
    return state.badge
  },
  badges(state) {
    return state.badges
  },
  badgesToReward(state) {
    return state.badgesToReward
  },
  // maybe
  hasBadgesToReward(state) {
    return !isEmpty(state.badgesToReward)
  },
  rewardedBadge(state) {
    return state.rewardedBadge
  },
  completed(state) {
    return state.badges.reduce((prev, current) => prev + current.active, 0)
  },
  countAll(state) {
    return state.badges.length
  }
}
