import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listPhone: [],
  cartPhone: [],
};

const phoneSlice = createSlice({
  name: 'phoneSlice',
  initialState,
  reducers: {
    postListPhoneAction: (state, action) => {
      console.log('danh sách điện thoại: ', action.payload);

      state.listPhone = action.payload;
    },
    addPhoneToCart: (state, action) => {
      console.log('phone click ', action.payload);
      let phoneClick = action.payload;

      let index = state.cartPhone.findIndex((item) => item.id == phoneClick.id);
      // nếu sản phẩm chưa có trong giỏ hàng =>> thêm 1 sản phẩm mới, còn nếu có rồi thì tăng hoặc giảm số lượng của sản phẩm đó
      if (index == -1) {
        state.cartPhone.push({ ...phoneClick, soLuong: 1 });
      } else {
        state.cartPhone[index].soLuong += 1;
      }
    },

    removePhoneCart: (state, action) => {
      // id = 1
      let phoneClick = action.payload;
      let currentCart = state.cartPhone;
      // Xoá sản phẩm có trong giỏ hàng
      state.cartPhone = currentCart.filter((item) => item.id != phoneClick.id);
    },
  },
});

export const { postListPhoneAction, addPhoneToCart, removePhoneCart } =
  phoneSlice.actions;

export default phoneSlice.reducer;
