import {defineConfig, Plugin} from 'vite';
import {resolve} from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
        }) as unknown as Plugin,
    ],

    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                signin: resolve(__dirname, 'src/pages/sign-in/sign-in.html'),
                signup: resolve(__dirname, 'src/pages/sign-up/sign-up.html'),
                404: resolve(__dirname, 'src/pages/errors/404/404-error.html'),
                500: resolve(__dirname, 'src/pages/errors/500/500-error.html'),
                editProfile: resolve(__dirname, 'src/pages/edit-profile/edit-profile.html'),
            }
        }
    },
    server: {
        open: '/src/pages/sign-in/sign-in.html'
    }
});
