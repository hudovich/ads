import './Home.css';
import { Routes, Route } from 'react-router-dom';
import HeaderBox from './Header/HeaderBox'
import CategoriesBox from './Categories/CategoryBox';
import PostBox from './Post/PostBox';
import FooterBox from './Footer/FooterBox'
import SingleBox from './Single/SingleBox'
import UserBox from './acaunt/UserBox'
import RegistBox from './registration/RegistBox'
import LoginBox from './Login/LoginBox'
import EditAcauntBox from './acaunt/editAcaunt/EditAcauntBox';
import PagesBox from './Pages/PagesBox'
import EditPostBox from './Post/Edit/EditPostBox'
import MesengeBox from './Massage/MassageBox'
import ChatBox from './Massage/Chat/ChatBox';

const Home = ({store}) => {
  return (
      <div className="body">
        <HeaderBox />
          <CategoriesBox />
          <Routes>
            <Route path="/:cat" element={<PostBox />} />
            <Route path="/" element={<PostBox />} />
            <Route path="/single/:singleId" element={<SingleBox />} />
            <Route path="/pages/:pagesID" element={<PagesBox />} />
            <Route path="/acaunt" element={<UserBox />} />
            <Route path="/registration" element={<RegistBox />} />
            <Route path="/login" element={<LoginBox />} />
            <Route path="/editAccaunt" element={<EditAcauntBox />} />
            <Route path="/addPost" element={<EditPostBox />} />
            <Route path="/editPost/:id" element={<EditPostBox />} />
            <Route path="/mesenge" element={<MesengeBox />} />
            <Route path="/chat/:ChatID" element={<ChatBox />} />
          </Routes>
        <FooterBox />
      </div>
  );
}

export default Home;
