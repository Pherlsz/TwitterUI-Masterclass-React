import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './Tweet.css';

interface TweetProps {
	name: string;
	username: string;
	content: string;
	totalMessages: number;
	totalRetweets: number;
	totalLikes: number;
}

export function Tweet(props: TweetProps) {
	return (
		<Link to="/status" className="tweet">
			<img src="https://github.com/Pherlsz.png" alt="Pherls" />

			<div className="tweet-content">
				<div className="tweet-content-header">
					<strong>{props.name}</strong>
					<span>{props.username}</span>
				</div>

				<p>{props.content}</p>

				<div className="tweet-content-footer">
					<button>
						<ChatCircle />
						{props.totalMessages}
					</button>
					<button>
						<ArrowsClockwise />
						{props.totalRetweets}
					</button>
					<button>
						<Heart />
						{props.totalLikes}
					</button>
				</div>
			</div>
		</Link>
	);
}
