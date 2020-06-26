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
      repeatPassword: 'repeat Password'
    },
    toast: {
      gratulations: 'Gratulations! You have earned {points} Points'
    },
    button: {
      skipButtonText: 'Skip',
      finished: 'Finish',
      register: 'Create an account',
      guest: 'Continue with guest login'
    }
  },
  pages: {
    course: {
      label: 'Units',
      welcome: 'Hi',
      intro:
        "Welcome to this course. We want you to know the manipulative mechanisms in mobile games and social media apps. Let's get suprised.",
      module: 'Module {number}',
      unit: {
        feedback: {
          text: 'Do you enjoy the course ? If so, please leave a rating!',
          vote: 'Average: {points} out of {maxPoints} ({votes} votes)',
          selectedRating: 'You have Selected: {rating} stars',
          selectRating: 'Click to select {rating} stars',
          noRating: 'No Rating Selected',
          resetRating: 'Reset rating',
          feedbackText: 'Write us something'
        },
        achievement: 'Achievements earned',
        status: {
          complete: 'complete',
          active: 'open',
          new: 'new'
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
      label: 'Onboarding',
      title: 'Want to get unhooked?',
      intro: 'Welcome to Unhooked, an online e-learning web application which shows you the manipulative mechanisms in mobile games and social media apps.',
      question1: 'Why do mobile applications make you cost us so much time?',
      question2: 'Why do we spend every free minute on our smartphone?',
      question3: 'How do we find this applicatios so tempting that every time the smartphone flashes, we pick it up and leave everything else behind and then when we look at the smartphone we forget everything around us.', 
      question4: 'Why can applications and social media applicastions do something that can cast a spell on us?',
      resumee: 'This e-learning application addresses exactly these points and explains its mechanisims.'
    },
    login: {
      text: 'Sign in to your account',
      remember: 'Remember me',
      register: 'Register',
      login: 'Login',
      logout: 'Logout'
    },
    register: {
      label: 'Registration',
      text:
        'Fill in to your register your account. This feature is optional and only nessasary if you want to keep your data and progress.',
      register: 'Sign Up'
    },
    guest: {
      label: 'Your name',
      text:
        'Fill in your name to continue.',
      login: 'Start course'
    },
    settings: {
      label: 'Settings',
      text: 'Here you can change your account data',
      language: 'Language',
      english: 'English',
      german: 'German',
      save: 'Save'
    },
    infiniteScroll: {
      label: 'Unendliches Scrollen'
    },
    quiz: {
      answers: 'Answers:',
      question: 'Question:',
      answerChoose: 'Choose the right answer(s)!',
      check: 'Check your answer',
      answerCorret: "You're Correct!",
      answerWrong: "You're Wrong!",
      next: 'Next question',
      steps: 'Question {current} of {total}'
    },
    pullToRefresh: {
      label: 'Pull To Refresh',
      news: 'News',
      errorLabel: 'Error',
      startLabel: 'Start refresh',
      readyLabel: 'Refresh',
      loadingLabel: 'Lloading'
    }
  }
}

export default context => {
  return new Promise(resolve => {
    resolve(keys)
  })
}
