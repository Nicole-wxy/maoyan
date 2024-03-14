import { createRouter, createWebHistory } from "vue-router";
import HotMovie from '../components/HotMovie.vue';
import Theater from '../components/Theater.vue';
import WillComing from '../components/WillComing.vue';
import ClassicMovie from '../components/ClassicMovie.vue';
// 引入路由组件
import City from '../components/theaterSubCom/City.vue'
import Brand from '../components/theaterSubCom/Brand.vue'
import Feature from '../components/theaterSubCom/Feature.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/maoyan/',
            component: HotMovie,
        },
        {
            path: '/maoyan/theater',
            component: Theater,
            children: [
                {
                    path: 'city',
                    component: City,
                },
                {
                    path: 'brand',
                    component: Brand,
                },
                {
                    path: 'feature',
                    component: Feature,
                }
            ]
        },
        {
            path: '/maoyan/willComing',
            component: WillComing,
        },
        {
            path: '/maoyan/classicMovie',
            component: ClassicMovie,
        }
    ]
})
export default router;