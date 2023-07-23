import {createI18n} from "vue-i18n";
import tranlationsUa from '@/lang/lang/ua'

// const defaultLanguage = 'ua';
//Це заготовочка на додачу англійської мови
// const availableLanguages = ['ua']

const i18n = createI18n({
    locale: 'ua',
    messages: {
        ua: tranlationsUa
    }

});

export default i18n;
