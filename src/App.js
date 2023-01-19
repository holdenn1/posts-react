import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostsPage from './pages/Posts/PostsPage';
import UsersPage from './pages/Users/UsersPage';
export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<UsersPage />} />
				<Route path="/posts/:id" element={<PostsPage />} />
			</Routes>
		</>
	);
}
