export default function({ $axios, store }) {
  //console.log('axios', store.getters['profile/username'])
  // todo; soll der Username immer neu gesetzt werden ?

  //$axios.setHeader('username', store.getters['profile/username'])
  // see 'middleware/authenticated'

  $axios.setHeader('Access-Control-Allow-Origin', '*')
  $axios.setHeader('Content-Type', 'application/json')
}
