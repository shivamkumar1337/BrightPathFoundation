export const ROUTES = {
  // Public routes
  HOME: '/',
  ABOUT: '/about',
  WORK: '/work',
  WORK_CATEGORY: '/work/:category',
  GALLERY: '/gallery',
  CONTACT: '/contact',
  WORK_EDUCATION: '/work/education',
  WORK_DISASTER_RELIEF: '/work/disaster-relief',
  WORK_SPORTS: '/work/sports',
  WORK_FOOD_DISTRIBUTION: '/work/food-distribution',
  
  // Error routes
  NOT_FOUND: '*'
} as const;

export type RouteType = typeof ROUTES[keyof typeof ROUTES];