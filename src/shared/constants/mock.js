import ImgGregorianos from '@src/assets/images/gregorianos.jpeg'
import ImgTearsForFears from '@src/assets/images/tears_for_fears.jpg'
import AudioGregorio from '@src/assets/sound/gregorio-allegri-miserere.mp3'
import AudioTearsForFears from '@src/assets/sound/Tears_for_fears-Everybody_Wants_To_Rule_The_World.mp3'
import AudioTearsForFearsShout from '@src/assets/sound/Tears_for_fears-shout.mp3'

const LIST_STREAM = [
  {
    thumbnails: ImgGregorianos,
    title: 'Miserere mei, Deus',
    artist: 'Angelus Dómini nuntiávit Mariæ',
    description: `Cantos Gregorianos. V/ Angelus Dómini nuntiávit Mariæ R/ 
      Et concépit de Spíritu Sancto Ave Maria grátia plena Dóminus tecum,
      benedícta tu in muliéribus et`,
    hash: '4gPMkXMs70MgXNLuseS5JW',
  },
  {
    thumbnails: ImgTearsForFears,
    title: 'Everybody Wants To Rule The World',
    artist: 'Tears For Fears',
    description: `Music video by Tears For Fears performing Everybody Wants To Rule The World. (C) 1985 Mercury `,
    hash: '7y7459SFZReE5Wec4hejv5',
  },
]

const DATA_STREAM = [
  {
    thumbnails: ImgGregorianos,
    title: 'Miserere mei, Deus',
    artist: 'Angelus Dómini nuntiávit Mariæ',
    description: `Cantos Gregorianos. V/ Angelus Dómini nuntiávit Mariæ R/ 
      Et concépit de Spíritu Sancto Ave Maria grátia plena Dóminus tecum,
      benedícta tu in muliéribus et`,
    hash: '4gPMkXMs70MgXNLuseS5JW',
    tracklist: [
      {
        thumbnails: ImgGregorianos,
        play: false,
        trackname: 'Miserere mei, Deus',
        track: AudioGregorio,
        duration: 762,
        progress: 220,
        date: '20/10/2019',
        artist: 'Gregorio Allegri',
        sequence: 1,
      },
    ],
  },
  {
    thumbnails: ImgTearsForFears,
    title: 'Everybody Wants To Rule The World',
    artist: 'Tears For Fears',
    description: `Music video by Tears For Fears performing Everybody Wants To Rule The World. (C) 1985 Mercury `,
    hash: '7y7459SFZReE5Wec4hejv5',
    tracklist: [
      {
        thumbnails: ImgTearsForFears,
        play: false,
        trackname: 'Everybody Wants To Rule The World',
        track: AudioTearsForFears,
        date: '10/10/2019',
        duration: 762,
        progress: 520,
        artist: 'Tears For Fears',
        sequence: 1,
      },
      {
        thumbnails: ImgTearsForFears,
        play: false,
        trackname: 'Shout',
        track: AudioTearsForFearsShout,
        date: '10/08/1985',
        duration: 762,
        progress: 520,
        artist: 'Tears For Fears',
        sequence: 2,
      },
    ],
  },
]

export { LIST_STREAM, DATA_STREAM }
