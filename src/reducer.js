export const initialState = {
	user: null,
	playlists: [],
	discover_weekly: null,
	playing: false,
	item: null,
	spotify: null,
	token: null,
	top_artists: null,
	// "BQBwKG-MAj_uLkuTf-4p6x2auEA0dAHGpQjH8HerjDseV_USPtDfTkA6-dnojq_UFkhSwXRmgfPJszBLfb8Qx2uK4t2lHPkjXO4wWsOtoesy-BacpiMPZTMwZdeq_fVFpocnbYzO1tFipwWGPuZ09fxFsk3fMDnr3VdXoPnzdGRyjb9T",
};

const reducer = (state, action) => {
	console.log("Action");
	console.log(action);
	console.log(state);

	//Action -> type, [payload]

	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};

		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};

		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};

		case "SET_SPOTIFY":
			return {
				...state,
				spotify: action.spotify,
			};

		case "SET_TOP_ARTISTS":
			return {
				...state,
				top_artists: action.top_artists,
			};

		case "SET_ITEM":
			return {
				...state,
				item: action.item,
			};

		case "SET_PLAYING":
			return {
				...state,
				playing: action.playing,
			};
		default:
			return state;
	}
};

export default reducer;
