const { resolve } = require('path')
export default {
    plugins: [],
    server: {
        open: '/index.html',
        port: 3000,
    },
    base: "/UA-detect/",
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                fourOhFour: '404.html',
                fiveHundred: '500.html',
            },
            output: {
                dir: resolve(__dirname, './docs'),
            }
        }
    }
}