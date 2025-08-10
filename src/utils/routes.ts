export const ROUTES = {
  // Public routes
  HOME: '/',
  ABOUT: '/about',
  WORK: '/work',
  WORK_CATEGORY: '/work/:category',
  GALLERY: '/gallery',
  CONTACT: '/contact',
  
  // Admin routes (for future use)
  ADMIN_LOGIN: '/admin/login',
  ADMIN_DASHBOARD: '/admin',
  ADMIN_CONTENT: '/admin/content',
  ADMIN_MEDIA: '/admin/media',
  ADMIN_MESSAGES: '/admin/messages',
  ADMIN_SETTINGS: '/admin/settings',
  
  // Error routes
  NOT_FOUND: '*'
} as const;

export type RouteType = typeof ROUTES[keyof typeof ROUTES];