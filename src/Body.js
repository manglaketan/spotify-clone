import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SongRow from "./SongRow";

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useDataLayerValue();

	const playPlaylist = (id) => {
		spotify
			.play({
				context_uri: [`spotify:playlist:37i9dQZEVXcFGnZd2RrW7v`],
			})
			.then((res) => {
				console.log("Playlist Res: " + res);
				spotify.getMyCurrentPlayingTrack().then((r) => {
					console.log("Playlist RRRR: " + r);
					dispatch({
						type: "SET_ITEM",
						item: r.item,
					});

					dispatch({
						type: "SET_PLAYING",
						playing: true,
					});
				});
			});
	};

	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
				console.log("Respose: " + res);
				spotify.getMyCurrentPlayingTrack().then((r) => {
					console.log("RRRRRRRRR:" + r);
					dispatch({
						type: "SET_ITEM",
						item: r.item,
					});
					dispatch({
						type: "SET_PLAYING",
						playing: true,
					});
				});
			});
	};

	return (
		<div className="body">
			<Header spotify={spotify} />

			<div className="body__info">
				<img src={discover_weekly?.images[0].url} />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>

			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon
						onClick={playPlaylist}
						className="body__shuffle"
					/>
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{discover_weekly?.tracks.items.map((item) => (
					<SongRow track={item.track} playSong={playSong} />
				))}
			</div>
		</div>
	);
}

export default Body;
