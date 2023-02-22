import { PaperPlaneRight } from 'phosphor-react';
import { FormEvent, KeyboardEvent, useState } from 'react';
import { Header } from '../../Header/Header';
import { Separator } from '../../Separator/Separator';
import { Tweet } from '../../Tweet/Tweet';

import './Status.css';

export function Status() {
	const [newAnswers, setNewAnswers] = useState('');
	const [answers, setAnswers] = useState(['teste 1', 'teste 2', 'teste 3']);

	function createNewAnswer(event: FormEvent) {
		event?.preventDefault();
		setAnswers([newAnswers, ...answers]);
		setNewAnswers('');
	}

	function handleHotkeySubmit(event: KeyboardEvent) {
		if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
			setAnswers([newAnswers, ...answers]);
			setNewAnswers('');
		}
	}

	return (
		<main className="status">
			<Header title="Tweet" />

			<Tweet
				content="Explica pro Product Onwer que um erro não identificado complexificou o merge dos argumentos que definem um schema dinâmico."
				name={'pedro'}
				username={'@pherls'}
				totalMessages={0}
				totalRetweets={0}
				totalLikes={0}
			/>

			<Separator />

			<form onSubmit={createNewAnswer} className="answer-tweet-form">
				<label className="answer">
					<img src="https://github.com/Pherlsz.png" alt="Pherls" />
					<textarea
						id="tweet"
						value={newAnswers}
						onChange={(event) => {
							setNewAnswers(event.target.value);
						}}
						onKeyDown={handleHotkeySubmit}
						placeholder="Tweet your answer"
					/>
				</label>

				<button type="submit">
					<PaperPlaneRight />
					<span>Answer</span>
				</button>
			</form>

			{answers.map((answers) => {
				return (
					<Tweet
						key={answers}
						content={answers}
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
