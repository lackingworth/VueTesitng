const app = new Vue({
    el: '#app',
    data: {
      username: 'ItsMyUsername',
      newTweet: '',
      tweets: [
        'Playing with Vue today', 
        'K, it\'s pretty fire ngl', 
        'Escaping from react'
      ],
      bio: 'Why should we exist?'
    }
  });