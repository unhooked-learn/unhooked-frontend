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
    // skip if no badge loaded
    if (isEmpty(state.badges)) return

    const items = achievements
      // filter rewarded badge by the type of POINTS
      .filter(item => item.type === achievementType.POINTS)
      // check if bades are active and filter it out from the result array
      .filter(item => !state.badges.find(i => i.id === item.id).active)
      // find the badges, where the condition apply
      .filter(item => item.unlocked(points))

    // skip if no items found
    if (isEmpty(items)) return

    // reward badges and send the information to the backend
    items.forEach(async item => {
      commit(mutationsTypes.REWARD_BADGE, item)
      await dispatch('_updateUserBadges', item.name)
    })

    // display rewarded badge to user
    commit(mutationsTypes.DISPALY_REWARD_BADGE)

    // refetch user badges
    await dispatch('fetchBadges')
  },
  /**
   *  reward unit bagde
   *
   * @param {*} param0
   * @param {*} unitOrderId
   */
  async rewardBadgeUnit({ commit, dispatch, state }, unitOrderId) {
    // skip if no badge loaded
    if (isEmpty(state.badges)) return

    const item = achievements
      // filter rewarded badge by the type of UNIT
      .filter(item => item.type === achievementType.UNIT)
      // check if bades are active and filter it out from the result array
      .filter(item => !state.badges.find(i => i.id === item.id).active)
      // find the badge, where the condition apply
      .find(item => item.unlocked(unitOrderId))

    // skip if no item found
    if (isEmpty(item)) return

    // reward badge
    commit(mutationsTypes.REWARD_BADGE, item)

    // send rewarded badge to backend
    await dispatch('_updateUserBadges', item.name)

    // display rewarded badge to user
    commit(mutationsTypes.DISPALY_REWARD_BADGE)

    // refetch user badges
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
    // skip if no badge loaded
    if (isEmpty(state.badges)) return

    // find rewarded badge by its name
    const item = achievements.find(item => item.name == badge.name)

    // skip if no badge applies
    if (isEmpty(item)) return

    // skip if choosen badge is allready rewarded
    if (state.badges.find(i => i.id === item.id).active) return

    // skip if unlock condition  does not apply
    if (!item.unlocked(badge.condition)) return

    // reward badge
    commit(mutationsTypes.REWARD_BADGE, item)

    // send rewarded badge to backend
    await dispatch('_updateUserBadges', item.name)

    // display rewarded badge to user
    commit(mutationsTypes.DISPALY_REWARD_BADGE)

    // refetch user badges
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
    // display the next badge to the user
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
  hasBadgesToReward(state) {
    return !isEmpty(state.badgesToReward)
  },
  rewardedBadge(state) {
    return state.rewardedBadge
  },
  completed(state) {
    // count the rewarded badges
    return state.badges.reduce((prev, current) => prev + current.active, 0)
  },
  countAll(state) {
    return state.badges.length
  }
}
