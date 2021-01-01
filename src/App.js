import * as React from "react";
import { useEffect, useState } from 'react';
import styles from './App.module.css'
import useWebAnimations from '@wellyshen/use-web-animations';
import logo from './logoanim.png';
import SurahALKahf from './Surah-AL-Kahf.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faFastBackward, faFastForward, faBackward, faForward} from '@fortawesome/free-solid-svg-icons'

const useAudio = (url) => {

  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  return [playing, toggle];
};


function App() {
  const [playing, toggle] = useAudio(SurahALKahf);
  const { ref, getAnimation } = useWebAnimations({
    autoplay: false,
    keyframes: {
      transform: ['translate(0,0)', 'translate(0,-250px)'],
      height: ['0px', '250px']
    },
    timing: {
      duration: 450,
      iterations: Infinity,
      fill: "backwards",
      direction: "alternate",
      easing: "ease-in-out"
    }
  });
  const { ref: ref2, getAnimation: getAnimation2 } = useWebAnimations({
    autoplay: false,
    keyframes: {
      transform: ['translate(0,0)', 'translate(0,-250px)'],
      height: ['0px', '250px']
    },
    timing: {
      duration: 650,
      iterations: Infinity,
      fill: "backwards",
      direction: "alternate",
      easing: "ease-in-out"
    }
  });

  const { ref: ref3, getAnimation: getAnimation3 } = useWebAnimations({
    autoplay: false,
    keyframes: {
      transform: ['translate(0,0)', 'translate(0,-250px)'],
      height: ['0px', '250px']
    },
    timing: {
      duration: 1100,
      iterations: Infinity,
      fill: "backwards",
      direction: "alternate",
      easing: "ease-in-out"
    }
  });
  const { ref: ref4, getAnimation: getAnimation4 } = useWebAnimations({
    autoplay: false,
    keyframes: {
      transform: ['translate(0,0)', 'translate(0,-250px)'],
      height: ['0px', '250px']
    },
    timing: {
      duration: 300,
      iterations: Infinity,
      fill: "backwards",
      direction: "alternate",
      easing: "ease-in-out"
    }
  });
  const { ref: ref5, getAnimation: getAnimation5 } = useWebAnimations({
    autoplay: false,
    keyframes: {
      transform: ['translate(0,0)', 'translate(0,-250px)'],
      height: ['0px', '250px']
    },
    timing: {
      duration: 700,
      iterations: Infinity,
      fill: "backwards",
      direction: "alternate",
      easing: "ease-in-out"
    }
  });
  const play = () => {
    getAnimation().play();
    getAnimation2().play();
    getAnimation3().play();
    getAnimation4().play();
    getAnimation5().play();
  };

  const pause = () => {
    getAnimation().pause();
    getAnimation2().pause();
    getAnimation3().pause();
    getAnimation4().pause();
    getAnimation5().pause();
  };

  const playAndPause = (toggle) => {
    if (playing) {
      pause();
    }
    else {
      play();
    }
  }
  useEffect(() => {
    if (!playing) {
      pause();
    }
    else {
      play();
    }
  },
    [playing]
  );


  return (
    <div>
      <div className={styles.Header}><img src={logo} className={styles.AppLogo} /></div>
      <div className={styles.Logo}>
        Now Playing .....
      <marquee>Surah Kahf By Sheikh Raad Al Kurdi</marquee>

        {/* <div className={styles.Loading}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div> */}

        <div className={styles.EqualizerBox}>
          <span className={styles.MusicBar} ref={ref} />
          <span className={styles.MusicBar2} ref={ref2} />
          <span className={styles.MusicBar3} ref={ref3} />
          <span className={styles.MusicBar4} ref={ref4} />
          <span className={styles.MusicBar5} ref={ref5} />
        </div>
      </div>

      <div className={styles.MusicPlayer}>
        <div className={styles.MusicPlayButtonContainer}>
          <div className={styles.BackwardButton}><FontAwesomeIcon icon={faFastBackward} /></div>
          <div className={styles.BackwardButton}><FontAwesomeIcon icon={faBackward} /></div>
          <div className={styles.PlayButton} onClick={toggle}>{(!playing) ? <FontAwesomeIcon icon={faPlay}/>:<FontAwesomeIcon icon={faPause} />}</div>
          <div className={styles.ForwardButton}><FontAwesomeIcon icon={faForward} /></div>
          <div className={styles.ForwardButton}><FontAwesomeIcon icon={faFastForward} /></div>
        </div>
      </div>

      <section className={styles.Footer}>
        <div className={styles.WaveEffects1}></div>
        <div className={styles.WaveEffects2}></div>
        <div className={styles.WaveEffects3}></div>
      </section>

    </div>
  )
}

export default App;