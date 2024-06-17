import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeTemplate from './templates/HomeTemplate';
import StateDemo from './pages/Hooks/StateDemo/StateDemo';
import ExState from './pages/Hooks/StateDemo/ExState';
import UseEffectDidMount from './pages/Hooks/UseEffectDemo/UseEffectDidMount';
import UseEffectDidUpdate from './pages/Hooks/UseEffectDemo/UseEffectDidUpdate';
import UseEffectUnMount from './pages/Hooks/UseEffectDemo/UseEffectUnMount';

// Cấu hình redux

import { Provider } from 'react-redux';
import { store } from './redux/store';
import NumberRedux from './pages/ExRedux/NumberRedux';
import FontSizeRedux from './pages/ExRedux/FontSizeRedux';
import ChangeCarRedux from './pages/ExRedux/ChangeCarRedux';
import ChatRedux from './pages/ExRedux/ChatRedux';
import BookTicket from './pages/ExRedux/BookTicket/BookTicket';
import PhoneShop from './pages/ExRedux/PhoneShop/PhoneShop';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* localhost:3000 */}

        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="state-demo" element={<StateDemo />} />
          <Route path="ex-state" element={<ExState />} />
          <Route path="effect-didmount" element={<UseEffectDidMount />} />
          <Route path="effect-did-update" element={<UseEffectDidUpdate />} />
          <Route path="effect-unmount" element={<UseEffectUnMount />} />
          <Route path="number-redux" element={<NumberRedux />} />
          <Route path="fontsize-redux" element={<FontSizeRedux />} />
          <Route path="change-car-redux" element={<ChangeCarRedux />} />
          <Route path="chat-redux" element={<ChatRedux />} />
          <Route path="book-ticket" element={<BookTicket />} />
          <Route path="phone-shop" element={<PhoneShop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
