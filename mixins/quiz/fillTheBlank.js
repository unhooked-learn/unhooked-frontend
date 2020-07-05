import { clone, isEmpty } from 'lodash'

import { ucFirst } from '@/helper';


const regex = /({{[a-z]*_\d}})/g

export default {
  data() {
    return {
      gaps: {
        availableCount: 0,
        list: []
      },
      answers: {
        selected: [],
        all: []
      },
      quest: {
        items: [],
        cpy: {}
      }
    }
  },
  methods: {
    splitQuestion(question) {
      return question.title
        .split(regex)
        .map(i => i.split(' '))
        .reduce((a, b) => (a = [...a, ...b]))
    },
    mapItems(splitQuestion) {
      return splitQuestion.map((text, index) => {
        const type = text.startsWith('{{') ? 'answer' : 'text'

        const position = text.substring(
          text.indexOf('_') + 1,
          text.indexOf('}}')
        )

        if (position > this.gaps.availableCount) {
          this.gaps.availableCount = +position
        }

        return { index, type, text, position: +position }
      })
    },

    /**
     * init fill the gap component
     *
     * @param {*} question
     */
    init(question) {
      this.gaps.availableCount = 0
      this.quest.cpy = clone(question)
      this.quest.items = this.mapItems(this.splitQuestion(this.quest.cpy))

      this.resetSelection()
    },

    /**
     *  get the answer by gap
     * 
     * @param {*} gap
     */
    getItemByGap(gap) {
      return this.answers.selected.find(i => i.gap === gap)
    },

    /**
     * init
     */
    initQuestionsAnswers() {
      return this.quest.cpy.questionAnswers
    },

    /**
     * get the next avalible gap from the gapslist
     */
    getNextAvailableGap() {
      return this.gaps.list.sort().shift()
    },

    /**
     * Remove the selected item from the answers
     * and at the available gap to the gaplist
     *
     * @param {*} item
     */
    removeSelctedAnswer(item) {
      if (isEmpty(item)) {
        return
      }

      this.answers.selected = this.answers.selected.filter(
        i => i.gap !== item.gap
      )

      this.gaps.list.push(item.gap)
      this.answers.all.push(item)
    },

    /**
     *
     */
    resetSelection() {
      this.answers.all = []
      this.answers.all.push(...this.initQuestionsAnswers())
      this.answers.selected = []

      this.gaps.list = Array.from(
        Array(+this.gaps.availableCount),
        (_, i) => i + 1
      )
    },

    /**
     * get the selected item and place it into the next 
     * available gap 
     * 
     * @param {*} item
     */
    selectAnswerForNextGap(item) {
      const gap = this.getNextAvailableGap()

      if (!gap) {
        return
      }

      this.answers.all.forEach((element, index) => {
        if (element.answerText == item.answerText) {
          const item = this.answers.all.splice(index, 1)[0]
          item.gap = gap
          this.answers.selected.push(item)
          return
        }
      })
    },

    getComponentName(name) {
      return `UHFtb${ucFirst(name)}Item`
    },
    
  }
}
