import React from 'react'
import Footer from '../../сomponents/Footer/Footer'
import Header from '../../сomponents/Header/Header'
import Comments from '../../сomponents/Main/Comments'

export default function CommentsPage() {
	return (
		<>
			<Header title='Comments'/>
			<Comments/>
			<Footer/>
		</>
	)
}
