
export const routes = [
	{
		name: 'Home',
		path: '/',
		component:  () => import ('../components/Home.vue'),
		meta: { requiresAuth: true }
	},
	{
		name: 'Lista',
		path: '/lista',
		component:  () => import ('../components/List.vue'),
		meta: { requiresAuth: true }
	},
	{
		name: 'Login',
		path: '/iniciar-sesion',
		component:  () => import ('../components/Login.vue')
	}
]