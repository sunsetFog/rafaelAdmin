const screenAndRem = {
    state: {
        theme_value: 'light',
        screen_value: 'vertical',
    },
    mutations: {
        setTheme: (state, type) => {
            const swan_html = document.documentElement || document.body;
            sessionStorage.setItem('theme_skin', type);
            // 修改html标签的类名
            swan_html.className = type;
            // html设置属性
            swan_html.setAttribute('data-theme', type);
            state.theme_value = type;
        },
        setScreenAndRem: (state) => {
            // const swan_html = document.querySelector('html');
            const swan_html = document.documentElement || document.body;
            const screen_status =
                swan_html.clientWidth > swan_html.clientHeight ? 'horizontal' : 'vertical';

            // 根据屏幕宽，计算html的font-size值
            let pixelSize = 16 * (swan_html.clientWidth / 375);
            if (screen_status == 'horizontal') {
                pixelSize = 16 * (swan_html.clientWidth / 844);
            }
            // html的font-size设置
            swan_html.style.fontSize = pixelSize + 'px';
            // console.log('--swan_html--', swan_html);
            // console.log('--pixelSize--', pixelSize, swan_html.clientWidth);

            swan_html?.setAttribute('data-screen', screen_status);
            state.screen_value = screen_status;
        },
    },
    getters: {
        themeValue: state => state.theme_value,
        screenValue: state => state.screen_value,
    },
    actions: {

    }
}

export default screenAndRem;
