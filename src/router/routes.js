export default [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
    },
    {
      path: '/announcements',
      name: 'Announcements',
      component: () => import(/* webpackChunkName: "Announcements" */'@/views/Announcements.vue'),
      props: true,
    },
    {
      path: '/forgot-password',
      name: 'Forgot Password',
      component: () => import(/* webpackChunkName: "ForgotPassword" */'@/views/ForgotPassword.vue'),
      props: true,
    },
      {
        path: '/reservation/:id',
        name: 'Reservation',
        component: () => import(/* webpackChunkName: "Reservation" */'@/views/Reservation.vue'),
        props: true,
      },
      {
        path: '/userdashboard',
        name: 'userDashboard',
        component: () => import(/* webpackChunkName: "userDashboard" */'@/views/userDashboard.vue'),
      },
      {
        path: '/editnnouncement/:id',
        name: 'EditAnnouncement',
        component: () => import(/* webpackChunkName: "EditAnnouncement" */'@/views/EditAnnouncement.vue'),
        props: true,
      },
      {
        path: '/EditReservation/:id',
        name: 'EditReservation',
        component: () => import(/* webpackChunkName: "EditReservation" */'@/views/EditReservation.vue'),
        props: true,
      },
      {
        path: '/myreservations',
        name: 'MyReservations',
        component: () => import(/* webpackChunkName: "MyReservations" */'@/views/MyReservations.vue'),
        props: true,
      },
      {
        path: '/Search/:source/:destination',
        name: 'Search',
        component: () => import(/* webpackChunkName: "Search" */'@/views/Search.vue'),
        props: true,
      },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */'@/views/Login.vue'),
        props: true,
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "Register" */'@/views/Register.vue'),
        props: true,
      },
      {
        path: '/createannouncement',
        name: 'CreateAnnouncement',
        component: () => import(/* webpackChunkName: "CreateAnnouncement" */ '@/views/CreateAnnouncement.vue')
      },
      {
        path: '/chatroomMyRev',
        name: 'chatroomMyRev',
        component: () => import(/* webpackChunkName: "chatRoomMyRev" */ '@/views/chatRoomMyRev.vue')
      },
      {
        path: '/myannouncements',
        name: 'MyAnnouncements',
        component: () => import(/* webpackChunkName: "MyAnnouncements" */ '@/views/MyAnnouncements.vue')
      }
      ,
      {
        path: '/employeeDashboard',
        name: 'employeeDashboard',
        component: () => import(/* webpackChunkName: "employeeDashboard" */ '@/views/employeeDashboard.vue')
      }
      ,
      {
        path: '/employeeAllTravels',
        name: 'employeeAllTravels',
        component: () => import(/* webpackChunkName: "employeeAllTravels" */ '@/views/employeeAllTravels.vue')
      }
      ,
      {
        path: '/employeeUserArticle/:id/:firstName/:lastName',
        name: 'employeeUserArticle',
        component: () => import(/* webpackChunkName: "employeeUserArticle" */ '@/views/employeeUserArticle.vue')
      }
      ,
      {
        path: '/employeeSuggest',
        name: 'employeeSuggest',
        component: () => import(/* webpackChunkName: "employeeSuggest" */ '@/views/employeeSuggest.vue')
      } 
      ,
      {
        path: '/employeeAllComents',
        name: 'employeeAllComents',
        component: () => import(/* webpackChunkName: "employeeSuggest" */ '@/views/employeeAllComents.vue')
      } 
      ,
      {
        path: '/employeeUserTravel/:id/:firstName/:lastName',
        name: 'employeeUserTravel',
        component: () => import(/* webpackChunkName: "employeeUserTravel" */ '@/views/employeeUserTravel.vue')
      }
      ,
      {
        path: '/employeeAllReservations',
        name: 'employeeAllReservations',
        component: () => import(/* webpackChunkName: "employeeAllReservations" */ '@/views/employeeAllReservations.vue')
      }
      
      ,
      {
        path: '/employeeUserReservation/:id/:firstName/:lastName',
        name: 'employeeUserReservation',
        component: () => import(/* webpackChunkName: "employeeUserReservation" */ '@/views/employeeUserReservation.vue')
      }
      ,
      {
        path: '/employeeAllArticles',
        name: 'employeeAllArticles',
        component: () => import(/* webpackChunkName: "employeeAllArticles" */ '@/views/employeeAllArticles.vue')
      }
      
      ,
      {
        path: '/employeeAllUsers',
        name: 'employeeAllUsers',
        component: () => import(/* webpackChunkName: "employeeAllUsers" */ '@/views/employeeAllUsers.vue')
      }
      ,
      {
        path: '/employeeLogin',
        name: 'employeeLogin',
        component: () => import(/* webpackChunkName: "employeeLogin" */ '@/views/employeeLogin.vue')
      }
      ,
      {
        path: '/employeeUserSearch',
        name: 'employeeUserSearch',
        component: () => import(/* webpackChunkName: "employeeUserSearch" */ '@/views/employeeUserSearch.vue')
      },
      {
        path: '/test',
        name: 'test',
        component: () => import(/* webpackChunkName: "test" */ '@/views/test.vue')
      },
      {
        path: '/MarketPlace',
        name: 'MarketPlace',
        component: () => import(/* webpackChunkName: "MarketPlace" */ '@/views/MarketPlace.vue')
      },
      {
        path: '/EditArticle/:id',
        name: 'EditArticle',
        component: () => import(/* webpackChunkName: "EditArticle" */ '@/views/EditArticle.vue')
      },
      {
        path: '/MyArticles',
        name: 'MyArticles',
        component: () => import(/* webpackChunkName: "MyArticles" */ '@/views/MyArticles.vue')
      },
      {
        path: '/CreateArticle',
        name: 'CreateArticle',
        component: () => import(/* webpackChunkName: "CreateArticle" */ '@/views/CreateArticle.vue')
      },
      {
        path: '/employeeAllCategories',
        name: 'employeeAllCategories',
        component: () => import(/* webpackChunkName: "employeeAllCategories" */ '@/views/employeeAllCategories.vue')
      },
      {
        path: '/Message',
        name: 'Message',
        component: () => import(/* webpackChunkName: "Message" */ '@/views/Message.vue')
      },
      {
        path: '/employeeSubInfo',
        name: 'employeeSubInfo',
        component: () => import(/* webpackChunkName: "employeeSubInfo" */ '@/views/employeeSubInfo.vue')
      },
      {
        path: '/PIC',
        name: 'PIC',
        component: () => import(/* webpackChunkName: "PIC" */ '@/views/PIC.vue')
      },
      {
        path: '/newTravel',
        name: 'newTravel',
        component: () => import(/* webpackChunkName: "newTravel" */ '@/views/newTravel.vue')
      },
      {
        path: '/travelDoc',
        name: 'travelDoc',
        component: () => import(/* webpackChunkName: "travelDoc" */ '@/views/travelDoc.vue')
      }
      ,
      {
        path: '/chatArticles',
        name: 'chatArticles',
        component: () => import(/* webpackChunkName: "chatArticles" */ '@/views/chatArticles.vue')
      }
      ,
      {
        path: '/employeeProfil',
        name: 'employeeProfil',
        component: () => import(/* webpackChunkName: "employeeProfil" */ '@/views/employeeProfil.vue')
      },
      {
        path: '/pageNotFound',
        name: 'pageNotFound',
        component: () => import(/* webpackChunkName: "pageNotFound" */ '@/views/pageNotFound.vue')
      },
      {
        path: '/About',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '@/views/About.vue')
      },
      {
        path: '/Conditions',
        name: 'Conditions',
        component: () => import(/* webpackChunkName: "Conditions" */ '@/views/Conditions.vue')
      },
      {
        path: '/articleSearch/:catId/:ArtName',
        name: 'articleSearch',
        component: () => import(/* webpackChunkName: "articleSearch" */ '@/views/articleSearch.vue')
      },
      {
        path: '/Policy',
        name: 'Policy',
        component: () => import(/* webpackChunkName: "policy" */ '@/views/policy.vue')
      },
      {
        path: '/contact_us',
        name: 'contact_us',
        component: () => import(/* webpackChunkName: "contact_us" */ '@/views/contact_us.vue')
      },
      {
        path: '/particularUserArticles/:id1',
        name: 'particularUserArticles',
        component: () => import(/* webpackChunkName: "particularUserArticles" */ '@/views/particularUserArticles.vue')
      },
      {
        path: '/myReservationCardPayment',
        name: 'myReservationCardPayment',
        component: () => import(/* webpackChunkName: "myReservationCardPayment" */ '@/views/myReservationCardPayment.vue')
      },
      {
        path: '/myArticleCardPayment',
        name: 'myArticleCardPayment',
        component: () => import(/* webpackChunkName: "about" */ '@/views/myArticleCardPayment.vue')
      },
      {
        path: '/articlePaymentComplete',
        name: 'articlePaymentComplete',
        component: () => import(/* webpackChunkName: "myArticleCardPayment" */ '@/views/articlePaymentComplete.vue')
      },
      {
        path: '/reservationPayementComplete',
        name: 'reservationPayementComplete',
        component: () => import(/* webpackChunkName: "reservationPayementComplete" */ '@/views/reservationPayementComplete.vue')
      },

      {
        path: '/employeeSendRevPaymentProof',
        name: 'employeeSendRevPaymentProof',
        component: () => import(/* webpackChunkName: "employeeSendRevPaymentProof" */ '@/views/employeeSendRevPaymentProof.vue')
      },

      {
        path: '/employeeSendArtPaymentProof',
        name: 'employeeSendArtPaymentProof',
        component: () => import(/* webpackChunkName: "employeeSendArtPaymentProof" */ '@/views/employeeSendArtPaymentProof.vue')
      },

      
      {
        path: '/employeePaymentHistory',
        name: 'employeePaymentHistory',
        component: () => import(/* webpackChunkName: "employeePaymentHistory" */ '@/views/employeePaymentHistory.vue')
      }, 
      {
        path: '/employeeUserPayementId',
        name: 'employeeUserPayementId',
        component: () => import(/* webpackChunkName: "employeeUserPayementId" */ '@/views/employeeUserPayementId.vue')
      },
      {
        path: '/MyPaymentHistory',
        name: 'MyPaymentHistory',
        component: () => import(/* webpackChunkName: "MyPaymentHistor" */ '@/views/MyPaymentHistory.vue')
      },
      {
        path: '/MyPurchaseArticles',
        name: 'MyPurchaseArticles',
        component: () => import(/* webpackChunkName: "MyPurchaseArticles" */ '@/views/MyPurchaseArticles.vue')
      },
      { 
      path: '/employeeUserPurchase',
      name: 'employeeUserPurchase',
      component: () => import(/* webpackChunkName: "employeeUserPurchase" */ '@/views/employeeUserPurchase.vue')
    },
    { 
      path: '/MyPurchesHistory',
      name: 'MyPurchesHistory.vue',
      component: () => import(/* webpackChunkName: "MyPurches" */ '@/views/MyPurchesHistory.vue')
    },
    { 
      path: '/MyPurches',
      name: 'MyPurches',
      component: () => import(/* webpackChunkName: "MyPurches" */ '@/views/MyPurches.vue')
    },
    { 
      path: '/employeeUserAllSales',
      name: 'employeeUserAllSales',
      component: () => import(/* webpackChunkName: "employeeUserAllSales" */ '@/views/employeeUserAllSales.vue')
    },
    { 
      path: '/employeeAllPurchases',
      name: 'employeeAllPurchases',
      component: () => import(/* webpackChunkName: "employeeAllPurchases" */ '@/views/employeeAllPurchases.vue')
    },
    { 
      path: '/ClassesOfFood',
      name: 'ClassesOfFood',
      component: () => import(/* webpackChunkName: "ClassesOfFood" */ '@/views/ClassesOfFood.vue')
    },
  ] 