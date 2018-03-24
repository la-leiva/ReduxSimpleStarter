import React from 'react';

const VideoListItem = (props) => {
	const video = props.video;
	const image = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;
	const onVideoSelect = props.onVideoSelect;


	return (<li onClick={() => onVideoSelect(video)} className="list-group-item"> 
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={image} />
				</div>
				<div>
					<div className="media-heading">{title}</div>
				</div>
			</div>
		</li>);
}

export default VideoListItem;