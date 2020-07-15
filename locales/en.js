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
    errors: {
      passwordEqual: 'Error: Passwords are not equal'
    },
    button: {
      skipButtonText: 'Skip',
      finished: 'Finish',
      register: 'Create an account',
      guest: 'Continue with guest login'
    },
    desktop: {
      label: 'Be Warned',
      text: 'This site is only optimised for mobile and tablet devices. Your experiance may be vary. Please use your mobile phone or tablet.',
      button: 'Hide'
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
          thankYou: 'Thank you for rating!',
          points: 'You earned <b>{points}</b> points this round .'
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
      label: 'Onboarding',
      title: 'Want to get unhooked?',
      intro: 'Welcome to Unhooked, an online e-learning web application which shows you the manipulative mechanisms in mobile games and social media apps.',
      question1: 'Why do mobile applications make you cost us so much time?',
      question2: 'Why do we spend every free minute on our smartphone?',
      question3: 'How do we find this applicatios so tempting that every time the smartphone flashes, we pick it up and leave everything else behind and then when we look at the smartphone we forget everything around us.', 
      question4: 'Why can applications and social media applicastions do something that can cast a spell on us?',
      resumee: 'This e-learning application addresses exactly these points and explains its mechanisims.'
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
      continue: 'Continue',
      changeCredentials: 'Please SignIn to change your credentials!',
      changeCredentialsSuccessfully: 'Your credentials change successfully!'
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
      save: 'Save',
      disclaimer: 'Please note that this is changing only labels and control elements. Unit and Knowlegdebase texts are still in english.',
      profile: {
        label: 'Profile',
        delete: 'Delete my account',
        attention: 'Attention',
        text: 'Do you really want to delete your account?',
        deleteButton: 'Delete',
        onboardingRevisit:  "You get onboarded on your next visit!",
        redoOnboarding:  "Onboard me again!",
      }
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
    game: {
      label: 'Game',
      text: 'Click the button to start a short game about this topic.',
      buttonText: 'Start the game',
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
