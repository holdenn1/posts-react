import Footer from '../../сomponents/Footer/Footer';
import Header from '../../сomponents/Header/Header';
import Posts from '../../сomponents/Main/Posts';
import {useParams} from "react-router-dom";

export default function PostsPage() {
  const {id} = useParams();
  return (
    <>
      <Header title="Posts"/>
      {!!id && <Posts key={id} userId={id}/>}
      <Footer/>
    </>
  );
}
