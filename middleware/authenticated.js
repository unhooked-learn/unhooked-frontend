
export default async function(ctx) {
  const { store, redirect, route, app, $axios } = ctx

  //  skip if route is authentication
  if (route.name.indexOf('auth') != -1) {
    return
  }

  //  skip if route is onboarding
  if (route.name.indexOf('onboarding') != -1) {
    return
  }

  if(!store.getters['profile/username']) {
    await store.dispatch('auth/loadLocalUser')
  }

  // move to onboarding
  if(!(store.getters['profile/username'] && localStorage.getItem('onboarded'))) {
    return redirect(
      app.localePath({
        name: 'onboarding'
      })
    )
  }

  // reset Username on each route change
  // todo: zum besprechen wo der header gesetzt werden soll ¯\_(ツ)_/¯
  $axios.setHeader('username', store.getters['profile/username'])



  $axios.setHeader('Authorization', `Bearer ${store.getters['auth/token']}`)

  // If the user is not authenticated
  if (!store.getters['profile/username']) {
    return redirect(
      app.localePath({
        name: 'auth-index'
      })
    )
  }
}
