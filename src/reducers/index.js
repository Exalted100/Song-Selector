import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "Smile", duration: "3:05" },
        { title: "Gbona", duration: "3:36" },
        { title: "Fem", duration: "4:00" },
        { title: "Sing About Me, I'm Dying of Thirst", duration: "7:20" }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
