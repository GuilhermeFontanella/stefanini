import { Menu } from './menu.model';

export const MENU: Menu[] = [
    { title: 'Início', path: '/home', icon: 'pi pi-home' },
    { title: 'Seu perfil', path: '/', icon: 'pi pi-user' },
    { title: 'Ajuda', path: '/ajuda', icon: 'pi pi-question-circle' },
    { title: 'Seu dinheiro', path: '/carteira', icon: 'pi pi-wallet' },
    { title: 'Atividade', path: '/movimentacoes', icon: 'pi pi-briefcase' },
]