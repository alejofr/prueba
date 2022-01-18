
export const routes = [
	{
		name: 'Home',
		path: '/',
		component:  () => import ('../components/Home.vue'),
		meta: { requiresAuth: true }
	},
	{
		name: 'Lista',
		path: '/lista-clientes',
		component:  () => import ('../components/List.vue'),
		meta: { requiresAuth: true }
	},
	{
		name: 'VerCliente',
		path: '/cliente/:id',
		component:  () => import ('../components/Show.vue'),
		meta: { requiresAuth: true } 
	},
	{
		name: 'Login',
		path: '/iniciar-sesion',
		component:  () => import ('../components/Login.vue')
	}
]