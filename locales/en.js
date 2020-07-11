const keys = {
  general: {
    navigation: {
      knowledge_base: 'Knowledge base',
      profile: 'Profile',
      units: 'Units'
    },
    modal: {
      close: 'Close'
    },
    input: {
      email: 'Email address',
      name: 'Name',
      password: 'Password',
      repeatPassword: 'repeat Password',
      username: 'Username'
    },
    toast: {
      gratulations: 'Congratulations! You have earned {points} Points'
    },
    button: {
      skipButtonText: 'Skip',
      finished: 'Finish'
    }
  },
  pages: {
    course: {
      label: 'Units',
      welcome: 'Hi',
      intro:
        "Welcome to this course. We want you to know the manipulative mechanisms in mobile games and social media apps. Let's get surprised.",
      module: 'Unit {number}',
      unit: {
        feedback: {
          text: 'Do you enjoy the course ? If so, please leave a rating!',
          vote: 'Average: {points} out of {maxPoints} ({votes} votes)',
          selectedRating: 'You have Selected: {rating} stars',
          selectRating: 'Click to select {rating} stars',
          noRating: 'No Rating Selected',
          resetRating: 'Reset rating',
          postRating: 'Post your rating',
          thankYou: 'Thank you for rating!'
        },
        achievement: 'Achievements earned',
        status: {
          complete: 'complete',
          active: 'open',
          new: 'new'
        },
        modal: {
          start: 'Start Unit'
        },
        slides: {
          finished: 'Finished',
          text:
            'This was it for Unit {number}. If you are ready, you can start the quiz now.',
          startQuiz: 'Start quiz'
        }
      }
    },
    profile: {
      label: 'Profile',
      badges: 'Badges',
      xp: 'XP',
      active: 'Active since {minutes} minutes.'
    },
    knowledgebase: {
      label: 'Knowledge Base'
    },
    onboarding: {
      skip: 'Skip Onboarding',
      label: 'Onboarding'
    },
    auth: {
      or: 'or',
      welcomeBack: '<span class="font-bold">{username}</span>, welcome back!',
      loginText: 'Sign in to your account',
      remember: 'Remember me',
      signin: 'Login',
      signup: 'Register',
      logout: 'Logout',
      registerText:
        'Fill in to your register your account. This feature is optional and only necessary if you want to keep your data and progress.',
      createUsername: 'create a username',
      createUser: 'Continue as a guest',
      useThisUsername: 'Use this username and continue',
      continue: 'Continue'
    },
    settings: {
      label: 'Settings',
      text: 'Here you can change your account data',
      language: 'Language',
      english: 'English',
      german: 'German',
      save: 'Save',
      disclaimer: 'Please note that this is changing only labels and control elements. Unit and Knowlegdebase texts are still in english.'
    },
    imprint: {
      label: 'Imprint',
      buttonText: 'Imprint',
      provider: {
        heading: 'Service Provider',
        according: 'According to',
        title: 'HTW Berlin - University of Applied Sciences',
        subtitle: 'Faculty 4',
      },
      contact: {
        heading: 'Contact',
      },
      sources: {
        heading: 'Sources',
        title: 'Image sources and copyright.',
        text: 'The logo and banner were created by us. The source information for the individual units is listed inside a knowledgebase card.',
      },
      team: {
        heading: 'The Team',
      }
    },
    infiniteScroll: {
      label: 'Infinite Scrolling'
    },
    quiz: {
      answers: 'Answers:',
      question: 'Question:',
      answerChoose: 'Choose the right answer(s)!',
      check: 'Check your answer',
      answerCorret: "You're Correct!",
      answerWrong: "False or partly true!",
      next: 'Next question',
      steps: 'Question {current} of {total}'
    },
    pullToRefresh: {
      label: 'Pull To Refresh',
      news: 'News',
      errorLabel: 'Error',
      startLabel: 'Start refresh',
      readyLabel: 'Refresh',
      loadingLabel: 'Loading'
    }
  }
}

export default context => {
  return new Promise(resolve => {
    resolve(keys)
  })
}
