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

  // go to onboarding
  if(!(store.getters['profile/username'] && localStorage.getItem('onboarded'))) {
    return redirect(
      app.localePath({
        name: 'onboarding'
      })
    )
  }

  // reset Username on each route change
  $axios.setHeader('username', store.getters['profile/username'])

  // set Authorization header
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
