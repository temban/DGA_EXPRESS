export default [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/announcements',
      name: 'Announcements',
      component: () => import('@/views/Announcements.vue'),
      props: true,
    },
      {
        path: '/reservation/:id',
        name: 'Reservation',
        component: () => import('@/views/Reservation.vue'),
        props: true,
      },
      {
        path: '/userdashboard',
        name: 'userDashboard',
        component: () => import('@/views/userDashboard.vue'),
      },
      {
        path: '/editnnouncement/:id',
        name: 'EditAnnouncement',
        component: () => import('@/views/EditAnnouncement.vue'),
        props: true,
      },
      {
        path: '/EditReservation/:id',
        name: 'EditReservation',
        component: () => import('@/views/EditReservation.vue'),
        props: true,
      },
      {
        path: '/myreservations',
        name: 'MyReservations',
        component: () => import('@/views/MyReservations.vue'),
        props: true,
      },
      {
        path: '/Search/:source/:destination',
        name: 'Search',
        component: () => import('@/views/Search.vue'),
        props: true,
      },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        props: true,
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue'),
        props: true,
      },
      {
        path: '/createannouncement',
        name: 'CreateAnnouncement',
        component: () => import(/* webpackChunkName: "about" */ '@/views/CreateAnnouncement.vue')
      },
      {
        path: '/chatroomMyRev',
        name: 'chatroomMyRev',
        component: () => import(/* webpackChunkName: "about" */ '@/views/chatRoomMyRev.vue')
      },
      {
        path: '/myannouncements',
        name: 'MyAnnouncements',
        component: () => import(/* webpackChunkName: "about" */ '@/views/MyAnnouncements.vue')
      }
      ,
      {
        path: '/employeeDashboard',
        name: 'employeeDashboard',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeDashboard.vue')
      }
      ,
      {
        path: '/employeeAllTravels',
        name: 'employeeAllTravels',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeAllTravels.vue')
      }
      ,
      {
        path: '/employeeUserArticle/:id/:firstName/:lastName',
        name: 'employeeUserArticle',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeUserArticle.vue')
      }
      ,
      {
        path: '/employeeSuggest',
        name: 'employeeSuggest',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeSuggest.vue')
      } 
      ,
      {
        path: '/employeeUserTravel/:id/:firstName/:lastName',
        name: 'employeeUserTravel',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeUserTravel.vue')
      }
      ,
      {
        path: '/employeeAllReservations',
        name: 'employeeAllReservations',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeAllReservations.vue')
      }
      
      ,
      {
        path: '/employeeUserReservation/:id/:firstName/:lastName',
        name: 'employeeUserReservation',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeUserReservation.vue')
      }
      ,
      {
        path: '/employeeAllArticles',
        name: 'employeeAllArticles',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeAllArticles.vue')
      }
      
      ,
      {
        path: '/employeeAllUsers',
        name: 'employeeAllUsers',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeAllUsers.vue')
      }
      ,
      {
        path: '/employeeLogin',
        name: 'employeeLogin',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeLogin.vue')
      }
      ,
      {
        path: '/employeeUserSearch',
        name: 'employeeUserSearch',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeUserSearch.vue')
      },
      {
        path: '/test',
        name: 'test',
        component: () => import(/* webpackChunkName: "about" */ '@/views/test.vue')
      },
      {
        path: '/MarketPlace',
        name: 'MarketPlace',
        component: () => import(/* webpackChunkName: "about" */ '@/views/MarketPlace.vue')
      },
      {
        path: '/EditArticle/:id',
        name: 'EditArticle',
        component: () => import(/* webpackChunkName: "about" */ '@/views/EditArticle.vue')
      },
      {
        path: '/MyArticles',
        name: 'MyArticles',
        component: () => import(/* webpackChunkName: "about" */ '@/views/MyArticles.vue')
      },
      {
        path: '/CreateArticle',
        name: 'CreateArticle',
        component: () => import(/* webpackChunkName: "about" */ '@/views/CreateArticle.vue')
      },
      {
        path: '/employeeAllCategories',
        name: 'employeeAllCategories',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeAllCategories.vue')
      },
      {
        path: '/Message',
        name: 'Message',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Message.vue')
      },
      {
        path: '/employeeSubInfo',
        name: 'employeeSubInfo',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeSubInfo.vue')
      },
      {
        path: '/PIC',
        name: 'PIC',
        component: () => import(/* webpackChunkName: "about" */ '@/views/PIC.vue')
      },
      {
        path: '/newTravel',
        name: 'newTravel',
        component: () => import(/* webpackChunkName: "about" */ '@/views/newTravel.vue')
      },
      {
        path: '/travelDoc',
        name: 'travelDoc',
        component: () => import(/* webpackChunkName: "about" */ '@/views/travelDoc.vue')
      }
      ,
      {
        path: '/chatArticles',
        name: 'chatArticles',
        component: () => import(/* webpackChunkName: "about" */ '@/views/chatArticles.vue')
      }
      ,
      {
        path: '/employeeProfil',
        name: 'employeeProfil',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeProfil.vue')
      },
      {
        path: '/pageNotFound',
        name: 'pageNotFound',
        component: () => import(/* webpackChunkName: "about" */ '@/views/pageNotFound.vue')
      },
      {
        path: '/About',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
      },
      {
        path: '/Conditions',
        name: 'Conditions',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Conditions.vue')
      },
      {
        path: '/articleSearch/:catId/:ArtName',
        name: 'articleSearch',
        component: () => import(/* webpackChunkName: "about" */ '@/views/articleSearch.vue')
      },
      {
        path: '/Policy',
        name: 'Policy',
        component: () => import(/* webpackChunkName: "about" */ '@/views/policy.vue')
      },
      {
        path: '/contact_us',
        name: 'contact_us',
        component: () => import(/* webpackChunkName: "about" */ '@/views/contact_us.vue')
      },
      {
        path: '/particularUserArticles/:id1',
        name: 'particularUserArticles',
        component: () => import(/* webpackChunkName: "about" */ '@/views/particularUserArticles.vue')
      },
      {
        path: '/myReservationCardPayment',
        name: 'myReservationCardPayment',
        component: () => import(/* webpackChunkName: "about" */ '@/views/myReservationCardPayment.vue')
      },
      {
        path: '/myArticleCardPayment',
        name: 'myArticleCardPayment',
        component: () => import(/* webpackChunkName: "about" */ '@/views/myArticleCardPayment.vue')
      },
      {
        path: '/articlePaymentComplete',
        name: 'articlePaymentComplete',
        component: () => import(/* webpackChunkName: "about" */ '@/views/articlePaymentComplete.vue')
      },
      {
        path: '/reservationPayementComplete',
        name: 'reservationPayementComplete',
        component: () => import(/* webpackChunkName: "about" */ '@/views/reservationPayementComplete.vue')
      },

      {
        path: '/employeeSendRevPaymentProof',
        name: 'employeeSendRevPaymentProof',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeSendRevPaymentProof.vue')
      },

      {
        path: '/employeeSendArtPaymentProof',
        name: 'employeeSendArtPaymentProof',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeSendArtPaymentProof.vue')
      },

      
      {
        path: '/employeePaymentHistory',
        name: 'employeePaymentHistory',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeePaymentHistory.vue')
      }, 
      {
        path: '/employeeUserPayementId',
        name: 'employeeUserPayementId',
        component: () => import(/* webpackChunkName: "about" */ '@/views/employeeUserPayementId.vue')
      },
      {
        path: '/MyPaymentHistor',
        name: 'MyPaymentHistor',
        component: () => import(/* webpackChunkName: "about" */ '@/views/MyPaymentHistor.vue')
      },
      {
        path: '/MyPurchaseArticles',
        name: 'MyPurchaseArticles',
        component: () => import(/* webpackChunkName: "about" */ '@/views/MyPurchaseArticles.vue')
      },
      { 
      path: '/employeeUserPurchase',
      name: 'employeeUserPurchase',
      component: () => import(/* webpackChunkName: "about" */ '@/views/employeeUserPurchase.vue')
    },
    { 
      path: '/MyPurches',
      name: 'MyPurches',
      component: () => import(/* webpackChunkName: "about" */ '@/views/MyPurches.vue')
    },
    { 
      path: '/employeeUserAllSales',
      name: 'employeeUserAllSales',
      component: () => import(/* webpackChunkName: "about" */ '@/views/employeeUserAllSales.vue')
    },
    { 
      path: '/employeeAllPurchases',
      name: 'employeeAllPurchases',
      component: () => import(/* webpackChunkName: "about" */ '@/views/employeeAllPurchases.vue')
    },
    { 
      path: '/ClassesOfFood',
      name: 'ClassesOfFood',
      component: () => import(/* webpackChunkName: "about" */ '@/views/ClassesOfFood.vue')
    },
  ] 