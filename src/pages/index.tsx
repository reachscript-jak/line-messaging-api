import styles from '../styles/Home.module.css'
import { useGeolocated } from "react-geolocated";
import { useCallback } from 'react';

export default function Home() {
  const { coords } = useGeolocated();
  console.log(coords);

  const onClickExecuteApi = useCallback(() => {
    if (!coords) {
      alert('位置情報が取得できてねぇ！');
      return;
    }
    fetch('/api/lineApi', { 
      method: 'POST',
      body: JSON.stringify({
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
    }).then((res) => res.json())
      .then((res) => console.log(res))
  }, [coords]);

  return (
    <div className={styles.container}>
      <button onClick={onClickExecuteApi}>LINEAPI実行</button>
    </div>
  )
}
