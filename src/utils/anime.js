import anime from 'animejs'

const install = (Vue) => {
    Vue.prototype.$anime = anime
}

export default install