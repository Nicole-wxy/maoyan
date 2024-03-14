import { createRouter, createWebHistory } from "vue-router";
import Recommend from '../components/Recommend.vue';
import Trailer from '../components/Trailer.vue';
import Interpretation from '../components/Interpretation.vue';
import Commentary from '../components/Commentary.vue';
import Entertainment from '../components/Entertainment.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/maoyan/video',
            component: Recommend,
        },
        {
            path: '/maoyan/video/trailer',
            component: Trailer,
        },
        {
            path: '/maoyan/video/interpretation',
            component: Interpretation,
        },
        {
            path: '/maoyan/video/commentary',
            component: Commentary,
        },
        {
            path: '/maoyan/video/entertainment',
            component: Entertainment,
        }
    ]
})
export default router;