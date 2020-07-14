export const achievementType = {
  UNIT: 'UNIT',
  POINTS: 'POINTS',
  EASTER_EGG: 'EASTER_EGG',
  GAME: 'GAME',
  APP: 'APP'
}

const unitAchievementMapper = [
  { unit: 1, name: 'UNIT_ONE' },
  { unit: 2, name: 'UNIT_TWO' },
  { unit: 3, name: 'UNIT_THREE' },
  { unit: 4, name: 'UNIT_FOUR' },
  { unit: 5, name: 'UNIT_FIVE' },
  { unit: 6, name: 'UNIT_SIX' },
  { unit: 7, name: 'UNIT_ALL' }
]

export const unitAchievementName = unitId =>
  unitAchievementMapper.find(i => i.unit === unitId)

export const achievementName = {
  UNIT_ONE: 'COMPLETE_UNIT_ONE',
  UNIT_TWO: 'COMPLETE_UNIT_TWO',
  UNIT_THREE: 'COMPLETE_UNIT_THREE',
  UNIT_FOUR: 'COMPLETE_UNIT_FOUR',
  UNIT_FIVE: 'COMPLETE_UNIT_FIVE',
  UNIT_SIX: 'COMPLETE_UNIT_SIX',
  UNIT_ALL: 'COMPLETE_ALL_COURSE',
  POINTS_100: 'ACHIEVE_POINTS_100',
  POINTS_250: 'ACHIEVE_POINTS_250',
  POINTS_500: 'ACHIEVE_POINTS_500',
  POINTS_666: 'ACHIEVE_POINTS_666',
  POINTS_1K: 'ACHIEVE_POINTS_1000',
  POINTS_2K: 'ACHIEVE_POINTS_2000',
  EASTER_EGG: 'EASTER_EGG',
  EASTER_EGG_GHOST: 'IDLE_MINUTE_5', // backend ?
  GAME_SCROLL_5: 'SCROLL_MINUTE_5',
  GAME_PUSH_10: 'REFRESH_TIME_10',
  APP_KNOWLEDGE_10: 'KNOWLEDGE_MINUTE_5',
  APP_OPEN_MINUTES_60: 'OPEN_MINUTE_60',
  APP_OPEN_5: 'OPEN_TIME_5',
  APP_ALL_ACHIVEMENTS: 'COMPLETE_ALL_ACHIEVEMENT'
}

export const achievements = [
  {
    id: 1,
    icon: 'dice-one',
    name: achievementName.UNIT_ONE,
    unlocked: unitOrderID => unitOrderID === 1,
    type: achievementType.UNIT
  },
  {
    id: 2,
    icon: 'dice-two',
    name: achievementName.UNIT_TWO,
    unlocked: unitOrderID => unitOrderID === 2,
    type: achievementType.UNIT
  },
  {
    id: 3,
    icon: 'dice-three',
    name: achievementName.UNIT_THREE,
    unlocked: unitOrderID => unitOrderID === 3,
    type: achievementType.UNIT
  },
  {
    id: 4,
    icon: 'dice-four',
    name: achievementName.UNIT_FOUR,
    unlocked: unitOrderID => unitOrderID === 4,
    type: achievementType.UNIT
  },
  {
    id: 5,
    icon: 'dice-five',
    name: achievementName.UNIT_FIVE,
    unlocked: unitOrderID => unitOrderID === 5,
    type: achievementType.UNIT
  },
  {
    id: 6,
    icon: 'dice-six',
    name: achievementName.UNIT_SIX,
    unlocked: unitOrderID => unitOrderID === 6,
    type: achievementType.UNIT
  },
  {
    id: 21,
    icon: 'check-double',
    name: achievementName.UNIT_ALL,
    unlocked: unitOrderID => unitOrderID === 7,
    type: achievementType.UNIT
  },
  {
    id: 7,
    icon: 'grin',
    name: achievementName.POINTS_100,
    unlocked: points => points >= 100,
    type: achievementType.POINTS
  },
  {
    id: 8,
    icon: 'grin-beam',
    name: achievementName.POINTS_250,
    unlocked: points => points >= 250,
    type: achievementType.POINTS
  },
  {
    id: 9,
    icon: 'laugh',
    name: achievementName.POINTS_500,
    unlocked: points => points >= 500,
    type: achievementType.POINTS
  },
  {
    id: 10,
    icon: 'grin-stars',
    name: achievementName.POINTS_1K,
    unlocked: points => points >= 1000,
    type: achievementType.POINTS
  },
  {
    id: 11,
    icon: 'grin-squint',
    name: achievementName.POINTS_2K,
    unlocked: points => points >= 2000,
    type: achievementType.POINTS
  },
  {
    id: 12,
    icon: 'grin-tongue-squin',
    name: achievementName.POINTS_666,
    unlocked: points => points >= 666,
    type: achievementType.POINTS
  },
  {
    id: 13,
    icon: 'ghost',
    unlocked: () => true,
    name: achievementName.EASTER_EGG_GHOST,
    type: achievementType.EASTER_EGG
  },
  {
    id: 14,
    icon: 'gamepad',
    name: achievementName.GAME_SCROLL_5,
    unlocked: time => time >= 5,
    type: achievementType.GAME
  },
  {
    id: 15,
    icon: 'newspaper',
    name: achievementName.GAME_PUSH_10,
    unlocked: count => count >= 10,
    type: achievementType.GAME
  },
  {
    id: 16,
    icon: 'brain',
    name: achievementName.APP_KNOWLEDGE_10,
    unlocked: time => time >= 10,
    type: achievementType.APP
  },
  {
    id: 17,
    icon: 'clock',
    name: achievementName.APP_OPEN_MINUTES_60,
    unlocked: time => time >= 60,
    type: achievementType.APP
  },
  {
    id: 18,
    icon: 'redo',
    name: achievementName.APP_OPEN_5,
    unlocked: opened => opened >= 5,
    type: achievementType.APP
  },
  {
    id: 19,
    icon: 'egg',
    name: achievementName.EASTER_EGG,
    unlocked: () => true,
    type: achievementType.EASTER_EGG
  },
  {
    id: 20,
    icon: 'globe',
    name: achievementName.APP_ALL_ACHIVEMENTS,
    unlocked: count => count >= 20,
    type: achievementType.APP
  }
]

