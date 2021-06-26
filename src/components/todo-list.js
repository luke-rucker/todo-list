import React from 'react'

function TodoList({ todos, removeTodo }) {
	/* 
    What I did there ^ is equivalent to:

    function TodoList(props) {
      const {todos, removeTodo} = props
    }
  */

	return (
		<>
			{todos.length > 0 ? (
				<ul>
					{todos.map(todo => (
						<li key={todo.id}>
							<p>
								Todo: {todo.text} (id:{todo.id})
							</p>
							<button onClick={() => removeTodo(todo.id)}>
								<DeleteIcon />
							</button>
							<a href="#todo-info">
								<InfoIcon />
							</a>
						</li>
					))}
				</ul>
			) : (
				<p>You have no todos yet!</p>
			)}
		</>
	)
}

function DeleteIcon() {
	return (
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			width="25px"
			height="25px"
			viewBox="0 0 108.294 122.88"
			enableBackground="new 0 0 108.294 122.88"
			xmlSpace="preserve"
		>
			<g>
				<path d="M4.873,9.058h33.35V6.2V6.187c0-0.095,0.002-0.186,0.014-0.279c0.075-1.592,0.762-3.037,1.816-4.086l-0.007-0.007 c1.104-1.104,2.637-1.79,4.325-1.806l0.023,0.002V0h0.031h19.884h0.016c0.106,0,0.207,0.009,0.309,0.022 c1.583,0.084,3.019,0.76,4.064,1.81c1.102,1.104,1.786,2.635,1.803,4.315l-0.003,0.021h0.014V6.2v2.857h32.909h0.017 c0.138,0,0.268,0.014,0.401,0.034c1.182,0.106,2.254,0.625,3.034,1.41l0.004,0.007l0.005-0.007 c0.851,0.857,1.386,2.048,1.401,3.368l-0.002,0.032h0.014v0.032v10.829c0,1.472-1.195,2.665-2.667,2.665h-0.07H2.667 C1.195,27.426,0,26.233,0,24.762v-0.063V13.933v-0.014c0-0.106,0.004-0.211,0.018-0.315v-0.021 c0.089-1.207,0.624-2.304,1.422-3.098l-0.007-0.002C2.295,9.622,3.49,9.087,4.81,9.069l0.032,0.002V9.058H4.873L4.873,9.058z M77.79,49.097h-5.945v56.093h5.945V49.097L77.79,49.097z M58.46,49.097h-5.948v56.093h5.948V49.097L58.46,49.097z M39.13,49.097 h-5.946v56.093h5.946V49.097L39.13,49.097z M10.837,31.569h87.385l0.279,0.018l0.127,0.007l0.134,0.011h0.009l0.163,0.023 c1.363,0.163,2.638,0.789,3.572,1.708c1.04,1.025,1.705,2.415,1.705,3.964c0,0.098-0.009,0.193-0.019,0.286l-0.002,0.068 l-0.014,0.154l-7.393,79.335l-0.007,0.043h0.007l-0.016,0.139l-0.051,0.283l-0.002,0.005l-0.002,0.018 c-0.055,0.331-0.12,0.646-0.209,0.928l-0.007,0.022l-0.002,0.005l-0.009,0.018l-0.023,0.062l-0.004,0.021 c-0.118,0.354-0.264,0.698-0.432,1.009c-1.009,1.88-2.879,3.187-5.204,3.187H18.13l-0.247-0.014v0.003l-0.011-0.003l-0.032-0.004 c-0.46-0.023-0.889-0.091-1.288-0.202c-0.415-0.116-0.818-0.286-1.197-0.495l-0.009-0.002l-0.002,0.002 c-1.785-0.977-2.975-2.882-3.17-5.022L4.88,37.79l-0.011-0.125l-0.011-0.247l-0.004-0.116H4.849c0-1.553,0.664-2.946,1.707-3.971 c0.976-0.955,2.32-1.599,3.756-1.726l0.122-0.004v-0.007l0.3-0.013l0.104,0.002V31.569L10.837,31.569z M98.223,36.903H10.837 v-0.007l-0.116,0.004c-0.163,0.022-0.322,0.106-0.438,0.222c-0.063,0.063-0.104,0.132-0.104,0.179h-0.007l0.007,0.118l7.282,79.244 h-0.002l0.002,0.012c0.032,0.376,0.202,0.691,0.447,0.825l-0.002,0.004l0.084,0.032l0.063,0.012h0.077h72.695 c0.207,0,0.399-0.157,0.518-0.377l0.084-0.197l0.054-0.216l0.014-0.138h0.005l7.384-79.21L98.881,37.3 c0-0.045-0.041-0.111-0.103-0.172c-0.12-0.118-0.286-0.202-0.451-0.227L98.223,36.903L98.223,36.903z M98.334,36.901h-0.016H98.334 L98.334,36.901z M98.883,37.413v-0.004V37.413L98.883,37.413z M104.18,37.79l-0.002,0.018L104.18,37.79L104.18,37.79z M40.887,14.389H5.332v7.706h97.63v-7.706H67.907h-0.063c-1.472,0-2.664-1.192-2.664-2.664V6.2V6.168h0.007 c-0.007-0.22-0.106-0.433-0.259-0.585c-0.137-0.141-0.324-0.229-0.521-0.252h-0.082h-0.016H44.425h-0.031V5.325 c-0.213,0.007-0.422,0.104-0.576,0.259l-0.004-0.004l-0.007,0.004c-0.131,0.134-0.231,0.313-0.259,0.501l0.007,0.102V6.2v5.524 C43.554,13.196,42.359,14.389,40.887,14.389L40.887,14.389z" />
			</g>
		</svg>
	)
}

function InfoIcon() {
	return (
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			height="25"
			width="25"
			viewBox="0 0 122.88 122.88"
			enableBackground="new 0 0 122.88 122.88"
			xmlSpace="preserve"
		>
			<g>
				<path d="M61.44,9.23c-1.85,0-3.64,0.08-5.35,0.25c-1.71,0.17-3.44,0.42-5.17,0.77c-1.72,0.34-3.39,0.77-5,1.26 c-1.59,0.49-3.16,1.07-4.7,1.72l-0.1,0.05l0,0c-1.63,0.7-3.18,1.45-4.67,2.25c-1.5,0.81-2.94,1.68-4.31,2.6 c-1.38,0.93-2.72,1.92-3.99,2.97c-1.27,1.05-2.5,2.16-3.68,3.35l-0.04,0.04c-1.18,1.18-2.29,2.4-3.33,3.66 c-1.05,1.28-2.04,2.61-2.97,3.99c-0.92,1.36-1.78,2.8-2.59,4.3c-0.8,1.49-1.56,3.05-2.26,4.67l-0.05,0.11l0,0l-0.07,0.14 c-0.63,1.5-1.19,3.04-1.67,4.61c-0.49,1.59-0.9,3.23-1.24,4.93c-0.35,1.73-0.6,3.45-0.77,5.17c-0.17,1.72-0.25,3.5-0.25,5.35 c0,1.85,0.08,3.64,0.25,5.35c0.17,1.71,0.42,3.44,0.77,5.17c0.35,1.72,0.77,3.39,1.27,5c0.49,1.57,1.05,3.13,1.7,4.66 c0.04,0.07,0.07,0.14,0.1,0.21c0.69,1.6,1.43,3.13,2.23,4.6c0.81,1.5,1.68,2.94,2.59,4.3c0.93,1.39,1.92,2.72,2.98,4 c1.02,1.24,2.11,2.44,3.26,3.59c0.07,0.06,0.13,0.12,0.19,0.19c1.16,1.16,2.36,2.24,3.59,3.26c1.28,1.05,2.61,2.04,3.99,2.97 c1.36,0.92,2.8,1.78,4.3,2.59c1.49,0.8,3.05,1.56,4.67,2.26l0.21,0.1c1.52,0.64,3.07,1.2,4.67,1.69c1.58,0.49,3.23,0.9,4.92,1.24 c1.73,0.35,3.45,0.6,5.17,0.77c1.72,0.17,3.5,0.25,5.35,0.25c1.85,0,3.64-0.08,5.35-0.25c1.71-0.17,3.44-0.42,5.17-0.77 c1.72-0.35,3.39-0.77,5-1.27c1.59-0.49,3.16-1.07,4.71-1.73l0.09-0.04l0-0.01c1.63-0.7,3.18-1.45,4.67-2.25 c1.5-0.81,2.94-1.68,4.31-2.6c1.38-0.93,2.72-1.92,3.99-2.97c1.25-1.03,2.45-2.12,3.62-3.29c0.06-0.06,0.11-0.12,0.18-0.18 c1.15-1.15,2.23-2.35,3.25-3.58c1.05-1.28,2.05-2.61,2.98-4c0.92-1.36,1.78-2.8,2.59-4.3c0.8-1.49,1.56-3.04,2.26-4.67l0.1-0.22 c0.64-1.51,1.2-3.06,1.69-4.65c0.49-1.59,0.9-3.23,1.24-4.93c0.35-1.73,0.6-3.45,0.77-5.17c0.17-1.72,0.25-3.5,0.25-5.35 c0-1.85-0.08-3.64-0.25-5.35c-0.17-1.71-0.42-3.44-0.77-5.17c-0.35-1.72-0.77-3.39-1.27-5c-0.49-1.59-1.07-3.16-1.73-4.71 l-0.04-0.09l0,0c-0.7-1.63-1.45-3.18-2.25-4.67c-0.81-1.5-1.68-2.94-2.59-4.3c-0.93-1.38-1.92-2.72-2.97-3.99 c-1.02-1.24-2.12-2.45-3.28-3.61c-0.07-0.06-0.13-0.12-0.18-0.18c-1.16-1.16-2.35-2.24-3.59-3.26c-1.28-1.05-2.61-2.04-3.99-2.97 c-1.37-0.92-2.8-1.78-4.3-2.59c-1.49-0.8-3.04-1.56-4.67-2.25l-0.19-0.09c-1.52-0.64-3.08-1.21-4.68-1.7 c-1.58-0.49-3.23-0.9-4.93-1.24c-1.73-0.35-3.45-0.6-5.17-0.77C65.08,9.31,63.29,9.23,61.44,9.23L61.44,9.23z M63.34,31.17 c2.19,0,3.91,0.63,5.16,1.88c1.24,1.25,1.87,2.96,1.87,5.17c0,2.24-1.07,4.22-3.21,5.97c-2.16,1.74-4.66,2.62-7.52,2.62 c-2.14,0-3.85-0.6-5.16-1.8c-1.31-1.22-1.96-2.79-1.96-4.75c0-2.47,1.07-4.59,3.19-6.4C57.82,32.06,60.37,31.17,63.34,31.17 L63.34,31.17L63.34,31.17z M75.55,91.71H47.33v-4.75h5.3V57.95h-5.3v-3.78h13.19c3.33,0,6.61-0.4,9.85-1.22v34.01h5.18L75.55,91.71 L75.55,91.71L75.55,91.71z M49.12,1.2c1.96-0.39,3.99-0.69,6.08-0.89C57.29,0.1,59.37,0,61.44,0c2.07,0,4.15,0.1,6.24,0.31 c2.09,0.2,4.12,0.5,6.08,0.89c1.94,0.39,3.88,0.88,5.82,1.48c1.88,0.58,3.74,1.26,5.58,2.04l0.19,0.07l0,0l0.06,0.02 c1.85,0.8,3.65,1.67,5.38,2.61c1.71,0.93,3.4,1.95,5.07,3.07c1.63,1.1,3.21,2.27,4.73,3.52c1.52,1.25,2.97,2.56,4.34,3.95 c1.38,1.38,2.7,2.83,3.95,4.34c1.25,1.52,2.42,3.09,3.52,4.73c1.09,1.63,2.11,3.32,3.06,5.06l0,0l0.01,0 c0.94,1.74,1.82,3.54,2.61,5.39c0.02,0.05,0.04,0.1,0.06,0.15c0.78,1.83,1.46,3.7,2.05,5.6c0.61,1.96,1.11,3.92,1.5,5.89 c0.39,1.96,0.69,3.99,0.89,6.08c0.2,2.09,0.3,4.17,0.3,6.24c0,2.07-0.1,4.15-0.31,6.24c-0.2,2.09-0.5,4.12-0.89,6.08 c-0.39,1.94-0.88,3.88-1.48,5.82c-0.58,1.89-1.27,3.76-2.05,5.62l-0.04,0.09l0,0l-0.05,0.11c-0.8,1.85-1.67,3.65-2.61,5.38 c-0.93,1.71-1.95,3.4-3.07,5.07c-1.1,1.63-2.27,3.21-3.52,4.73c-1.25,1.52-2.56,2.96-3.95,4.34c-1.38,1.38-2.83,2.7-4.35,3.95 c-1.52,1.25-3.09,2.42-4.72,3.51c-1.63,1.09-3.32,2.11-5.06,3.06c-1.78,0.96-3.57,1.84-5.39,2.62c-0.05,0.02-0.1,0.04-0.16,0.06 c-1.83,0.78-3.7,1.46-5.6,2.05c-1.96,0.61-3.92,1.11-5.88,1.5c-1.96,0.39-3.99,0.69-6.08,0.89c-2.09,0.2-4.17,0.3-6.24,0.3 s-4.15-0.1-6.24-0.3c-2.09-0.2-4.12-0.5-6.08-0.89c-1.94-0.39-3.88-0.88-5.82-1.48c-1.89-0.58-3.76-1.27-5.61-2.05l-0.2-0.08l0,0 c-1.85-0.8-3.65-1.67-5.38-2.61c-1.71-0.93-3.4-1.95-5.07-3.07c-1.63-1.09-3.21-2.27-4.72-3.51c-1.52-1.25-2.97-2.57-4.35-3.95 c-1.38-1.38-2.7-2.83-3.95-4.34c-1.25-1.52-2.42-3.1-3.52-4.73c-1.09-1.63-2.11-3.32-3.06-5.06c-0.97-1.78-1.84-3.58-2.62-5.4 c-0.02-0.05-0.04-0.1-0.06-0.15c-0.78-1.83-1.46-3.7-2.05-5.6c-0.61-1.96-1.11-3.93-1.5-5.89c-0.39-1.96-0.69-3.99-0.89-6.08 C0.1,65.59,0,63.51,0,61.44c0-2.07,0.1-4.15,0.31-6.24c0.2-2.09,0.5-4.12,0.89-6.08c0.39-1.94,0.88-3.88,1.48-5.82 c0.58-1.88,1.26-3.74,2.04-5.59l0.09-0.23l0,0c0.8-1.85,1.67-3.65,2.61-5.38c0.93-1.71,1.95-3.4,3.07-5.07 c1.1-1.63,2.27-3.21,3.52-4.73c1.25-1.52,2.56-2.96,3.95-4.34c1.38-1.38,2.83-2.7,4.34-3.95c1.52-1.25,3.09-2.42,4.73-3.52 c1.67-1.12,3.36-2.14,5.07-3.07l0.13-0.06c1.73-0.94,3.48-1.78,5.26-2.55c0.05-0.02,0.1-0.04,0.15-0.06 c1.83-0.78,3.7-1.46,5.6-2.05C45.19,2.09,47.15,1.59,49.12,1.2L49.12,1.2z" />
			</g>
		</svg>
	)
}

export default TodoList
