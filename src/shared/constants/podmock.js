import moment from 'moment'

import ImgGregorianos from '@src/assets/images/gregorianos.jpeg'
import ImgTearsForFears from '@src/assets/images/tears_for_fears.jpg'
import AudioGregorio from '@src/assets/sound/gregorio-allegri-miserere.mp3'
import AudioTearsForFears from '@src/assets/sound/Tears_for_fears-Everybody_Wants_To_Rule_The_World.mp3'
import AudioTearsForFearsShout from '@src/assets/sound/Tears_for_fears-shout.mp3'

const LIST_CHANNEL = [
  {
    id: 1,
    title: 'Miserere mei, Deus',
    author: 'Angelus Dómini',
    about: `Cantos Gregorianos. V/ Angelus Dómini nuntiávit Mariæ R/ 
    Et concépit de Spíritu Sancto Ave Maria grátia plena Dóminus tecum,
    benedícta tu in muliéribus et`,
    thumbnails: ImgGregorianos,
    category: 'Classic',
    lastActive: {},
    hash: '4gPMkXMs70MgXNLuseS5JW',
    UpdatedAt: moment('2018-10-11T22:42:10.576Z'),
  },
  {
    id: 2,
    title: 'Everybody Wants To Rule The World',
    author: 'Tears For Fears',
    about: `Music video by Tears For Fears performing Everybody Wants To Rule The World. (C) 1985 Mercury `,
    thumbnails: ImgTearsForFears,
    category: '80s',
    lastActive: {},
    hash: '7y7459SFZReE5Wec4hejv5',
    UpdatedAt: moment('2019-01-02T12:42:10.576Z'),
  },
]

const LIST_TRACK = [
  {
    title: 'Miserere mei, Deus',
    description: 'Cantos Gregorianos.',
    progress: 0,
    duration: 762,
    viewed: false,
    track: AudioGregorio,
    publish: moment('2019-10-11T22:42:10.576Z'),
    IdChannel: 1,
  },
  {
    title: 'Everybody Wants To Rule The World',
    description:
      'Music by Tears For Fears performing Everybody Wants To Rule The World. (C) 1985 Mercury',
    progress: 0,
    duration: 762,
    viewed: false,
    track: AudioTearsForFears,
    publish: moment('2019-06-22T12:42:10.576Z'),
    IdChannel: 2,
  },
  {
    title: 'Shout',
    description: 'Music by Tears For Fears performing Shout. (C) 1986 Mercury',
    progress: 0,
    duration: 762,
    viewed: false,
    track: AudioTearsForFearsShout,
    publish: moment('2019-07-02T12:42:10.576Z'),
    IdChannel: 2,
  },
]

export { LIST_CHANNEL, LIST_TRACK }
