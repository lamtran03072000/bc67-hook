import React, { useRef, useState } from 'react';

// useRef lưu trữ lại giá trị ở trong ref , khi mỗi lần setState render lại giao diện sẽ không ảnh hưởng
// useRef đóng vai trò là 1 thẻ tham chiếu (DOM)
const UseRefDemo = () => {
  const refInfo = useRef({
    userName: 'abc',
    pass: 'ccc',
  });

  const divRef = useRef();
  let [like, setLike] = useState(1);

  const handleChangeInput = (e) => {
    let { name, value } = e.target;

    refInfo.current = {
      ...refInfo.current,

      [name]: value,
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log('refInfo.current: ', refInfo.current);
    divRef.current.style.background = 'red';
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <p>UserName</p>
          <input
            onChange={handleChangeInput}
            type=""
            name="userName"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>PassWord</p>
          <input
            onChange={handleChangeInput}
            type=""
            name="pass"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success">Đăng nhập</button>
        </div>
      </form>
      <h3>Like :{like}</h3>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Plus like
      </button>
      <div ref={divRef}>Hello bc 67</div>
    </div>
  );
};

export default UseRefDemo;
