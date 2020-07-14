import { mapActions, mapGetters } from 'vuex'
import { achievementName } from '~/helpers/achievements'
import { isEmpty } from 'lodash'

let rand = () => Math.round(Math.random() * 10)

export default {
  data() {
    return {
      config: {
        appTimer: 0
      },

      app: {
        timeSpendInGame: 0,
        openendTime: 0
      }
    }
  },

  props: {},
  computed: {
    ...mapGetters({
      completedBadges: 'badge/completed',
      countAllBadges: 'badge/countAll'
    })
  },
  methods: {
    ...mapActions({
      rewardBadgeDirectly: 'badge/rewardBadgeDirectly',
      fetchBadges: 'badge/fetchBadges'
    }),
    saveData() {
      localStorage.setItem(this.config.itemKey, JSON.stringify(this.app))
    },
    checkForTimeSpend() {
      this.config.appTimer = setInterval(() => {
        this.app.timeSpendInGame++

        this.rewardBadgeDirectly({
          name: achievementName.APP_OPEN_MINUTES_60,
          condition: this.config.appTimer
        })

        this.surpriseBadge()

        this.saveData()
      }, 1000)
    },
    openApp() {
      this.app.openendTime++

      this.rewardBadgeDirectly({
        name: achievementName.APP_OPEN_5,
        condition: this.app.openendTime
      })

      this.saveData()
    },
    surpriseBadge() {
      if (rand() === rand()) {
        this.rewardBadgeDirectly({
          name: achievementName.EASTER_EGG_GHOST,
          condition: true
        })
      }
    }
  },
  created() {
    if (!this.countAllBadges) {
      this.fetchBadges()
    }
  },
  mounted() {
    // read from localStorage
    let app = localStorage.getItem(this.config.itemKey)

    if (isEmpty(app)) {
      this.saveData()
    } else {
      this.app = JSON.parse(app)
    }

    setTimeout(() => {
      this.openApp()
      this.checkForTimeSpend()
    }, 5000)
  },
  beforeDestroy() {
    clearInterval(this.config.appTimer)
  },
  watch: {
    completedBadges: {
      handler(value) {
        this.rewardBadgeDirectly({
          name: achievementName.APP_ALL_ACHIVEMENTS,
          condition: value
        })
      }
    }
  }
}
