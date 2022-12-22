import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const showSeconds = throttle(({ seconds }) => {
  console.log('seconds', seconds);
}, 1000);

player.on('timeupdate', showSeconds);
player.setCurrentTime(30.456);
