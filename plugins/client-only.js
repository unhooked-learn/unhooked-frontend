import Vue from 'vue'

import Flickity from 'vue-flickity'
import vmodal from 'vue-js-modal'
import { dom } from '@fortawesome/fontawesome-svg-core';

Vue.component('flickity', Flickity)
Vue.use(vmodal)
dom.watch()