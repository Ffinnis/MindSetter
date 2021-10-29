<template>
  <div class="home-wrapper">
    <h1 class="page__title">Что такое MindSetter?</h1>
    <p class="about">
      MindSetter - это прямой аналог mindMeister, <br />
      который вы можете развернуть локально
    </p>
    <div class="app-info">
      <div class="app-info__text">
        <p>
          Я использовал свой Stack-технологий под названием: <br />
          PEVN - Postgresql, Vue.js, Express.js, Node.js
        </p>
        <div class="list-wrapper">
          Чтобы запустить проект у себя локально, нужно:
          <ol class="stack-list">
            <li>Скачать Postgresql и создать базу данных</li>
            <li>Вписать все названия все .env файл в корне проекта</li>
            <li>Установить все зависимости с помощью npm install</li>
            <li>
              апустить проект и пользоваться с помощью команды npm run dev
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.home-wrapper {
  padding: 54px 0 0;
  .page__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
    text-align: center;
    color: #181717;
    margin: 0 0 37px;
  }
  .about {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #181717;
  }
  .app-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .app-info__text {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      text-align: left;
      margin: 73px 0 0;
      p {
        font-weight: 600;
        font-size: 24px;
        line-height: 31px;
        color: #181717;
      }
      .list-wrapper {
        font-weight: 600;
        font-size: 20px;
        line-height: 31px;
        color: #181717;
        li {
          line-height: 41px;
          &:first-child {
            margin: 10px 0 0;
          }
        }
      }
      .stack-list {
        font-weight: 600;
        margin: 10px 0 0;
      }
    }
  }
}
</style>
