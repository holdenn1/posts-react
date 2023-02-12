import React from 'react'
import Footer from '../../сomponents/Footer/Footer'
import Header from '../../сomponents/Header/Header'
import Comments from '../../сomponents/Main/Comments'
import {useParams} from "react-router-dom";

export default function CommentsPage() {
  const {id} = useParams()
  return (
    <>
      <Header title='Comments'/>
      {!!id && <Comments key={id} postId={id}/>}
      <Footer/>
    </>
  )
}
