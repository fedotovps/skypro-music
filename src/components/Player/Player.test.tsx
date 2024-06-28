import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Player } from './Player';

const mockStore = configureStore([]);

it('Корректный рендер компонента Player', () => {
    const initialState = {
        player: {
            currentPlaylist: [
                {
                    id: 1,
                    name: "Track 1",
                    author: "Artist 1",
                    release_date: "2022-01-01",
                    genre: "Genre 1",
                    duration_in_seconds: 210,
                    album: "Album 1",
                    logo: "/path/to/logo1.png",
                    track_file: "/path/to/track1.mp3",
                    stared_user: []
                },
                {
                    id: 2,
                    name: "Track 2",
                    author: "Artist 2",
                    release_date: "2022-01-02",
                    genre: "Genre 2",
                    duration_in_seconds: 180,
                    album: "Album 2",
                    logo: "/path/to/logo2.png",
                    track_file: "/path/to/track2.mp3",
                    stared_user: []
                }
            ],
            currentTrack: {
                id: 1,
                name: "Track 1",
                author: "Artist 1",
                release_date: "2022-01-01",
                genre: "Genre 1",
                duration_in_seconds: 210,
                album: "Album 1",
                logo: "/path/to/logo1.png",
                track_file: "/path/to/track1.mp3",
                stared_user: []
            },
            isPlaying: false,
            isShuffle: false
        }
    };

    const store = mockStore(initialState);

    const tree = renderer
        .create(
            <Provider store={store}>
                <Player />
            </Provider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});