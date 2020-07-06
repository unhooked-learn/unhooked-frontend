export default function({ store, redirect, route, app, $axios }) {
  //  skip if route is authentication
  if (route.name.indexOf('auth') != -1) {
    return
  }

  // reset Username on each route change
  // todo: zum besprechen wo der header gesetzt werden soll ¯\_(ツ)_/¯
  $axios.setHeader('username', store.getters['profile/username'])

  // If the user is not authenticated
  if (!store.getters['profile/username']) {
    return redirect(
      app.localePath({
        name: 'auth-index-create'
      })
    )
  }
}
