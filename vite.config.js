import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'copy-assets',
          generateBundle(options, bundle) {
            const assets = [
              'gmail/gmail.png',
              'seleccionArgentina/alejandro-gomez.jpg',
              'seleccionArgentina/alexis-macallister.jpg', 'seleccionArgentina/angel-correa.jpg', 'seleccionArgentina/angel-dimaria.jpg', 'seleccionArgentina/cuti-romero.jpg', 'seleccionArgentina/dibu-martinez.jpg', 'seleccionArgentina/enzo-fernandez.jpg', 'seleccionArgentina/exequiel-palacios.jpg', 'seleccionArgentina/franco-armani.jpg', 'seleccionArgentina/german-pezzella.jpg', 'seleccionArgentina/geronimo-rulli.jpg', 'seleccionArgentina/gonzalo-montiel.jpg', 'seleccionArgentina/guido-rodriguez.jpg', 'seleccionArgentina/juan-foyth.jpg', 'seleccionArgentina/julian-alvarez.jpg', 'seleccionArgentina/lautaro-martinez.jpg', 'seleccionArgentina/leandro-paredes.jpg', 'seleccionArgentina/lionel-messi.jpg', 'seleccionArgentina/lionel-scaloni.jpg', 'seleccionArgentina/lisandro-martinez.jpg', 'seleccionArgentina/marcos-acuna.jpg', 'seleccionArgentina/martin-tocalli.jpg', 'seleccionArgentina/nahuel-molina.jpg', 'seleccionArgentina/nicolas-otamendi.jpg', 'seleccionArgentina/nicolas-tagliafico.jpg', 'seleccionArgentina/pablo-aimar.jpg', 'seleccionArgentina/paulo-dybala.jpg', 'seleccionArgentina/roberto-ayala.jpg', 'seleccionArgentina/rodrigo-depaul.jpg', 'seleccionArgentina/thiago-almada.jpg', 'seleccionArgentina/walter-samuel.jpg'
            ];

            for (const asset of assets) {
              this.emitFile({
                type: 'asset',
                fileName: asset,
                source: require('fs').readFileSync(`src/assets/${asset}`),
              });
            }
          },
        },
      ],
    },
  },
});
