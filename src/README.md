# Ficmap

Ficmap is a npm package for creating fictional maps.
It uses react and it is written in Typescript.

## How to use

Create a react project (with nextjs for example) and implement the ficmap package

```js
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {SvgLayoutFromModule} from 'map2/map2';

export default function Home() {
  const map = {
    world: {
      points: ['20,90 70,65 120,67 170,73 220,57 270,58 320,40 370,35 420,30 470,47 520,76 570,85 620,112 670,134, 690,178', '690,178 670,329, 620,450 570,578 520,478 470,512 420,578 370,524 320,510 270,478 220,332 170,274 120,294 70,272 20,90'],
      cities: [
        {x:'70', y:'150', label: 'Davo'},
        {x:'155', y:'160', label: 'Parlin'},  
        {x:'180', y:'210', label: 'Sabal'}, 
      ],
      rivers: [
        {
          points: ['55,170 70,155 90,160 130,140 180,125 225,180 250,200, 300, 210 400,210 500,190 600,200']
        }
      ]
    }
  }

  return (
    <div>
      <Head>
        <title>ficmap</title>
        <meta name="description" content="Fictional Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ficmap</h1>
        <h2>Atalair</h2>
        <SvgLayoutFromModule width={900} height={650} map={map}/>
      </main>
    </div>
  )
}
```