<template>
  <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="160"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    ></vue-particles>
  <div class="box">
    <!-- 登录框 -->
    <div class="container">
      <div class="form">
        <h2>登录</h2>
        <form>
          <div class="inputBox">
            <input type="text" placeholder="姓名" />
          </div>
          <div class="inputBox">
            <input type="password" placeholder="密码" />
          </div>
          <div class="inputBox">
            <input type="submit" value="登录" />
          </div>
          <p class="forget">
            忘记密码?
            <a href="#">点击这里</a>
          </p>
          <p class="forget">
            没有账户?
            <a href="#">注册</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.lizi{
  background-image: url('~@/assets/img/loginbg.webp');
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  .container {
    z-index: 2;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    min-height: 400px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    .form {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 50px;
      h2 {
        position: relative;
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 5px;
        margin-bottom: 30px;
        cursor: pointer;
        text-align: center;
        &::before {
          content: "";
          position: absolute;
          left: 40%;
          bottom: -10px;
          width: 0px;
          height: 3px;
          background: #fff;
          transition: 0.5s;
        }
        &:hover&::before {
          width: 53px;
        }
      }
      .inputBox {
        width: 100%;
        margin-top: 20px;
        text-align: center;
        input {
          box-sizing: border-box;
          width: 100%;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.2);
          outline: none;
          border: none;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 16px;
          letter-spacing: 1px;
          color: #fff;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          &::placeholder {
            color: #fff;
          }
        }
        input[type="submit"] {
          background: #fff;
          color: #666;
          max-width: 100px;
          margin-bottom: 20px;
          font-weight: 600;
          cursor: pointer;
        }
      }
      .forget {
        margin-top: 6px;
        color: #fff;
        letter-spacing: 1px;
        a {
          color: #fff;
          font-weight: 600;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
