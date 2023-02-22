import { createBrowserRouter } from 'react-router-dom';
import { Status } from './components/Pages/Status/Status';
import { Timeline } from './components/Pages/Timeline/Timeline';
import { Default } from './layouts/default';

// localhost:5173/

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Default />,
		children: [
			{
				path: '/',
				element: <Timeline />,
			},

			{
				path: '/status',
				element: <Status />,
			},
		],
	},
]);
