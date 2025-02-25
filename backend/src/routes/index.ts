import { Router } from 'express';
const router = Router();
import { authRoute } from '../modules/auth/authRoute';
import { userRoute } from '../modules/user/userRoute';
import { adminRoute } from '../modules/admin/adminRoute';
import { projectRoute } from '../modules/project/projectRoute';
import { blogRoute } from '../modules/blog/blogRoute';
import { messageRoute } from '../modules/contactMessage/messageRoute';

const moduleRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/admin',
    route: adminRoute,
  },
  {
    path: '/project',
    route: projectRoute,
  },
  {
    path: '/blog',
    route: blogRoute,
  },
  {
    path: '/contact-message',
    route: messageRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
