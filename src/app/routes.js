export const routes = {
  about: {
    path: '/about',
    children: {
      village: {
        path: '/about/village',
        children: {
          economy: '/about/village/economy',
          education: '/about/village/education',
          geography: '/about/village/geography',
          history: '/about/village/history',
          places: '/about/village/places',
          population: '/about/village/population'
        }
      },
      history: '/about/history',
      board: '/about/board',
      founders: '/about/founders',
      members: '/about/members',
      statute: '/about/statute',
      supervisory: '/about/supervisory',
      writers: '/about/writers'
    }
  },
  culture: {
    path: '/culture',
    children: {
      words: '/culture/words',
      proverbs: '/culture/proverbs',
      curses: '/culture/curses'
    }
  },
  news: '/news',
  events: '/events',
  gallery: '/gallery',
  contact: '/contact',
  donate: '/donate',
  admin: {
    path: '/admin',
    children: {
      news: '/admin/news',
      events: '/admin/events',
      members: '/admin/members',
      donations: '/admin/donations',
      settings: '/admin/settings'
    }
  }
}; 