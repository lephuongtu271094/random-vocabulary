import { 
    Home,
    EnglishSelect,
    EGrammar,
    EIrregularVerbs,
    EVocabulary,
    Setting,
    ETopicVocabulary
} from 'views';
import { Minimal as MinimalLayout } from 'layouts';

export const routePath = [
    {
        id: 1,
        path: '/',
        component: Home,
        layout: MinimalLayout,
    },
    {
        id: 2,
        path: '/english',
        component: EnglishSelect,
        layout: MinimalLayout,
    },
    {
        id: 3,
        path: '/english/vocabulary',
        component: EVocabulary,
        layout: MinimalLayout,
    },
    {
        id: 4,
        path: '/english/irregular-verbs',
        component: EIrregularVerbs,
        layout: MinimalLayout,
    },
    {
        id: 5,
        path: '/english/grammar',
        component: EGrammar,
        layout: MinimalLayout,
    },
    {
        id: 6,
        path: '/setting',
        component: Setting,
        layout: MinimalLayout,
    },
    {
        id: 7,
        path: '/english/topic-vocabulary',
        component: ETopicVocabulary,
        layout: MinimalLayout,
    }
];