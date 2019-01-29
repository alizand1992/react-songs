import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: 'Take a piece of my hearth',
      duration: '10:5',
    },
    {
      title: 'No Scrubs',
      duration: '4:05',
    },
    {
      title: 'I want it that way',
      duration: '1:50',
    },
    {
      title: 'All star',
      duration: '3:15',
    },
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
