import { FormEvent, KeyboardEvent, useState } from 'react';
import { Header } from '../../Header/Header';
import { Separator } from '../../Separator/Separator';
import { Tweet } from '../../Tweet/Tweet';

import './Timeline.css';

export function Timeline() {
	const [newTweet, setNewTweet] = useState('');
	const [tweets, setTweets] = useState(['teste 1', 'teste 2', 'teste 3']);

	function createNewTweet(event: FormEvent) {
		event?.preventDefault();
		setTweets([newTweet, ...tweets]);
		setNewTweet('');
	}

	function handleHotkeySubmit(event: KeyboardEvent) {
		if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
			setTweets([newTweet, ...tweets]);
			setNewTweet('');
		}
	}

	return (
		<main className="timeline">
			<Header title="Home" />

			<form onSubmit={createNewTweet} className="new-tweet-form">
				<label className="tweet">
					<img src="https://github.com/Pherlsz.png" alt="Pherls" />
					<textarea
						onChange={(event) => {
							setNewTweet(event.target.value);
						}}
						id="tweet"
						value={newTweet}
						onKeyDown={handleHotkeySubmit}
						placeholder="What's happening"
					/>
				</label>

				<button type="submit">Tweet</button>
			</form>

			<Separator />

			{tweets.map((tweets) => {
				return (
					<Tweet
						key={tweets}
						content={tweets}
						name={'pedro'}
						username={'@pherls'}
						totalMessages={0}
						totalRetweets={0}
						totalLikes={0}
					/>
				);
			})}
		</main>
	);
}
