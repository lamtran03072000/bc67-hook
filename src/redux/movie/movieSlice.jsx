// rxslice

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listChairs: [
    { soGhe: '01', gia: 4839, isDaDat: true },
    { soGhe: '02', gia: 5321, isDaDat: false },
    { soGhe: '03', gia: 2998, isDaDat: false },
    { soGhe: '04', gia: 4141, isDaDat: true },
    { soGhe: '05', gia: 4631, isDaDat: false },
    { soGhe: '06', gia: 5301, isDaDat: false },
    { soGhe: '07', gia: 1363, isDaDat: true },
    { soGhe: '08', gia: 5295, isDaDat: false },
    { soGhe: '09', gia: 4718, isDaDat: false },
    { soGhe: '10', gia: 2271, isDaDat: true },
    { soGhe: '11', gia: 4350, isDaDat: false },
    { soGhe: '12', gia: 2954, isDaDat: true },
    { soGhe: '13', gia: 4310, isDaDat: false },
    { soGhe: '14', gia: 1429, isDaDat: true },
    { soGhe: '15', gia: 3295, isDaDat: false },
    { soGhe: '16', gia: 3031, isDaDat: true },
    { soGhe: '17', gia: 3321, isDaDat: false },
    { soGhe: '18', gia: 4964, isDaDat: false },
    { soGhe: '19', gia: 4020, isDaDat: true },
    { soGhe: '20', gia: 3157, isDaDat: false },
    { soGhe: '21', gia: 3236, isDaDat: true },
    { soGhe: '22', gia: 1041, isDaDat: false },
    { soGhe: '23', gia: 3484, isDaDat: true },
    { soGhe: '24', gia: 5282, isDaDat: false },
    { soGhe: '25', gia: 4937, isDaDat: true },
    { soGhe: '26', gia: 4976, isDaDat: false },
    { soGhe: '27', gia: 2125, isDaDat: false },
    { soGhe: '28', gia: 4927, isDaDat: true },
    { soGhe: '29', gia: 2034, isDaDat: false },
    { soGhe: '30', gia: 1758, isDaDat: true },
    { soGhe: '31', gia: 1134, isDaDat: false },
    { soGhe: '32', gia: 1780, isDaDat: true },
    { soGhe: '33', gia: 2769, isDaDat: false },
    { soGhe: '34', gia: 3792, isDaDat: true },
    { soGhe: '35', gia: 4226, isDaDat: false },
    { soGhe: '36', gia: 4573, isDaDat: true },
    { soGhe: '37', gia: 3670, isDaDat: false },
    { soGhe: '38', gia: 2013, isDaDat: true },
    { soGhe: '39', gia: 3225, isDaDat: false },
    { soGhe: '40', gia: 3789, isDaDat: true },
    { soGhe: '41', gia: 4560, isDaDat: false },
    { soGhe: '42', gia: 4319, isDaDat: true },
    { soGhe: '43', gia: 2763, isDaDat: false },
    { soGhe: '44', gia: 3925, isDaDat: true },
    { soGhe: '45', gia: 4156, isDaDat: false },
    { soGhe: '46', gia: 3396, isDaDat: true },
    { soGhe: '47', gia: 2925, isDaDat: false },
    { soGhe: '48', gia: 1536, isDaDat: true },
    { soGhe: '49', gia: 3058, isDaDat: false },
    { soGhe: '50', gia: 4324, isDaDat: true },
    { soGhe: '51', gia: 4678, isDaDat: false },
    { soGhe: '52', gia: 3375, isDaDat: true },
    { soGhe: '53', gia: 4579, isDaDat: false },
    { soGhe: '54', gia: 1559, isDaDat: true },
    { soGhe: '55', gia: 3321, isDaDat: false },
    { soGhe: '56', gia: 4941, isDaDat: true },
    { soGhe: '57', gia: 1427, isDaDat: false },
    { soGhe: '58', gia: 3583, isDaDat: true },
    { soGhe: '59', gia: 1792, isDaDat: false },
    { soGhe: '60', gia: 2054, isDaDat: true },
    { soGhe: '61', gia: 1472, isDaDat: false },
    { soGhe: '62', gia: 4387, isDaDat: true },
    { soGhe: '63', gia: 4953, isDaDat: false },
    { soGhe: '64', gia: 3474, isDaDat: true },
    { soGhe: '65', gia: 3846, isDaDat: false },
    { soGhe: '66', gia: 4112, isDaDat: true },
    { soGhe: '67', gia: 1259, isDaDat: false },
    { soGhe: '68', gia: 3815, isDaDat: true },
    { soGhe: '69', gia: 4664, isDaDat: false },
    { soGhe: '70', gia: 2229, isDaDat: true },
    { soGhe: '71', gia: 4829, isDaDat: false },
    { soGhe: '72', gia: 1129, isDaDat: true },
    { soGhe: '73', gia: 2756, isDaDat: false },
    { soGhe: '74', gia: 4370, isDaDat: true },
    { soGhe: '75', gia: 3470, isDaDat: false },
    { soGhe: '76', gia: 1785, isDaDat: true },
    { soGhe: '77', gia: 1203, isDaDat: false },
    { soGhe: '78', gia: 4624, isDaDat: true },
    { soGhe: '79', gia: 4087, isDaDat: false },
    { soGhe: '80', gia: 2731, isDaDat: true },
    { soGhe: '81', gia: 3547, isDaDat: false },
    { soGhe: '82', gia: 2157, isDaDat: true },
    { soGhe: '83', gia: 1294, isDaDat: false },
    { soGhe: '84', gia: 2869, isDaDat: true },
    { soGhe: '85', gia: 2837, isDaDat: false },
    { soGhe: '86', gia: 2975, isDaDat: true },
    { soGhe: '87', gia: 4836, isDaDat: false },
    { soGhe: '88', gia: 4086, isDaDat: true },
    { soGhe: '89', gia: 1063, isDaDat: false },
    { soGhe: '90', gia: 2814, isDaDat: true },
    { soGhe: '91', gia: 2854, isDaDat: false },
    { soGhe: '92', gia: 1475, isDaDat: true },
    { soGhe: '93', gia: 3102, isDaDat: false },
    { soGhe: '94', gia: 2120, isDaDat: true },
    { soGhe: '95', gia: 4765, isDaDat: false },
    { soGhe: '96', gia: 1629, isDaDat: true },
    { soGhe: '97', gia: 4316, isDaDat: false },
    { soGhe: '98', gia: 4037, isDaDat: true },
    { soGhe: '99', gia: 2924, isDaDat: false },
    { soGhe: '100', gia: 2345, isDaDat: true },
  ],

  chairDangDat: [
    { soGhe: '02', gia: 5321, isDaDat: false },
    { soGhe: '03', gia: 2998, isDaDat: false },
    { soGhe: '04', gia: 4141, isDaDat: true },
    { soGhe: '05', gia: 4631, isDaDat: false },
    { soGhe: '06', gia: 5301, isDaDat: false },
  ],
};

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    addChairAction: (state, { payload }) => {
      console.log('chair click redux', payload);
      let chairDangDatCurrent = state.chairDangDat;
      //   Nếu mà ghế click đã có trong chairDaDat remove ghế đó đi ,

      let index = chairDangDatCurrent.findIndex(
        (item) => item.soGhe === payload.soGhe,
      );
      //  nếu ghế chưa có trong chairDaDat thêm ghế đó vào
      if (index == -1) {
        chairDangDatCurrent.push(payload);
      } else {
        chairDangDatCurrent.splice(index, 1);
      }

      state.chairDangDat = chairDangDatCurrent;
    },
  },
});

export const { addChairAction } = movieSlice.actions;

export default movieSlice.reducer;
