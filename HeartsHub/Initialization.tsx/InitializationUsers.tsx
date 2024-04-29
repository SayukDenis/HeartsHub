import { User } from "../Models/User";
import {
  alcoholStatus,
  childrenStatus,
  languages,
  searchStatus,
  sexualOrientations,
  smokeStatus,
} from "../SemiComponents/Constants/Data";

const user1 = JohnyDepp();
const user2 = HenryCavill();
const user3 = TimothéeChalamet();
const user4 = CristianoRonaldo();
const user5 = ElonMusk();
const user6 = TomHanks();
const user7 = BradPitt();
const user8 = LeonardoDiCaprio();
export let users = [user1, user2, user3, user4, user5, user6, user7, user8];

function JohnyDepp(): User {
  const user: User = new User();
  user.id = 1;
  user.email = "johnydepp@gmail.com";
  user.name = "Джонні";
  user.surname = "Депп";
  user.date = "1963-06-09";
  user.gender = "Чоловік";
  user.sexualOrientation = sexualOrientations[0];
  user.height = "178";
  user.childrenStatus = childrenStatus[1];
  user.alcoholStatus = alcoholStatus[1];
  user.smokeStatus = smokeStatus[1];
  user.languages = [0, 51];
  user.searchStatus = searchStatus[0];
  user.selfInformation = "Американський голівудський актор";
  user.linkToPhoto = [
    "https://static.wikia.nocookie.net/harrypotter/images/0/0b/Johnny_Depp.jpg/revision/latest?cb=20161113090539&path-prefix=ru",
    "https://static.wikia.nocookie.net/harrypotter/images/7/7c/Johnny-Depp-Gellert-Grindelwald-Casting.jpg/revision/latest?cb=20230215165446",
    "https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
    "https://people.com/thmb/Vti-aGMFCUz_DxZmrSwAAjRMYfM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(939x479:941x481)/johnny-depp-e33aeaccc3e54f6f9933f669b9c59b81.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/actor-johnny-depp-attends-the-jeanne-du-barry-photocall-at-news-photo-1686666220.jpg?crop=0.647xw:0.966xh;0.223xw,0.0337xh&resize=1200:*",
    "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/33623_v9_bd.jpg",
  ];
  return user;
}

function HenryCavill(): User {
  const user: User = new User();
  user.id = 2;
  user.name = "Генрі";
  user.surname = "Кевілл";
  user.date = "1983-05-05";
  user.gender = "Чоловік";
  user.gender = "Чоловік";
  user.sexualOrientation = sexualOrientations[0];
  user.height = "185";
  user.childrenStatus = childrenStatus[0];
  user.alcoholStatus = alcoholStatus[0];
  user.smokeStatus = smokeStatus[0];
  user.searchStatus = searchStatus[2];
  user.languages = [
    languages.indexOf("Англійська"),
    languages.indexOf("Французька"),
  ];
  user.searchStatus = searchStatus[2];
  user.selfInformation = 'Актор Генрі Кавілл ("Супермен", "Відьмак").';
  user.linkToPhoto = [
    "https://static.wikia.nocookie.net/dccu/images/d/d7/Henry_Cavill.jpg/revision/latest?cb=20180218093710",
    "https://media.zenfs.com/en/bang_showbiz_628/16c65a695132b0c2a0d5ee6f21bdf596",
    "https://variety.com/wp-content/uploads/2023/09/GettyImages-1503418942.jpg?w=1024",
    "https://pbs.twimg.com/media/GHMTBKUWEAAVzsg?format=jpg&name=4096x4096",
    "https://mim.p7s1.io/pis/ld/11a6zChLCVyZ-c1vEwXZAanB-DJ78rnq2V2gRWTHzVV6NywNWMSJCEGmZ4YSENP-WRL0b9lo2z78G9GAM4oYtd6n9A0zk9viJT-o-PH0AXq8LP3S1uevuSDNRSLHp0qAwzzqQTkeSio/profile:original?w=1200&rect=359%2C0%2C1250%2C1250",
    "https://media.vanityfair.com/photos/5b489f5e6c0055288786d9a9/master/w_2560%2Cc_limit/GettyImages-997244120.jpg",
  ];
  return user;
}
function TimothéeChalamet(): User {
  const user: User = new User();
  user.id = 3;
  user.name = "Тімоті";
  user.surname = "Шаламе";
  user.date = "1995-12-27";
  user.gender = "Чоловік";
  user.sexualOrientation = sexualOrientations[0]; // Не визначено
  user.height = "178";
  user.childrenStatus = childrenStatus[0]; // Немає дітей
  user.alcoholStatus = alcoholStatus[2]; // Не часто
  user.smokeStatus = smokeStatus[0]; // Не палю
  user.languages = [
    languages.indexOf("Англійська"),
    languages.indexOf("Французька"),
  ];
  user.searchStatus = searchStatus[1]; // Ще точно не знаю
  user.selfInformation =
    'Актор Тімоті Шаламе ("Дюна", "Назви мене своїм ім\'ям").';
  user.linkToPhoto = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Timoth%C3%A9e_Chalamet_2017_Berlinale.jpg/1200px-Timoth%C3%A9e_Chalamet_2017_Berlinale.jpg",
    "https://i.pinimg.com/736x/21/81/b9/2181b99fd84181cdf33d62986f5669bf.jpg",
    "https://www.rbc.ua/static/ckef2/img/1_2202.jpg",
    "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/535891_v9_bc.jpg",
    "https://www.zoemagazine.net/wp-content/uploads/2023/05/chanel_pa2023_22_0019_1_rgbtif_jpeg-haute-definition-LD-1150x1490.jpeg",
    "https://uznayvse.ru/images/catalog/2022/3/timothy-chalamet_86.jpg",
  ];
  return user;
}
function CristianoRonaldo(): User {
  const user: User = new User();
  user.id = 4;
  user.name = "Кріштіану";
  user.surname = "Роналду";
  user.date = "1985-02-05";
  user.gender = "Чоловік";
  user.sexualOrientation = sexualOrientations[0]; // Не визначено
  user.height = "187";
  user.childrenStatus = childrenStatus[1]; // Є діти
  user.alcoholStatus = alcoholStatus[4]; // В компаніях
  user.smokeStatus = smokeStatus[0]; // Не палю
  user.languages = [
    languages.indexOf("Португальська"),
    languages.indexOf("Англійська"),
  ];
  user.searchStatus = searchStatus[0]; // Ще точно не знаю
  user.selfInformation = 'Футболіст Кріштіану Роналду ("Манчестер Юнайтед").';
  user.linkToPhoto = [
    "https://i.guim.co.uk/img/media/3f183e3024872dc0280012487854dc5807048166/0_42_3600_2160/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=058c94b78fa84d2639fecbef790041f1",
    "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--46f84f92-3cda-444b-bb0e-605d50aa156f/_390575742906.app.png?preferwebp=true",
    "https://img.ilcdn.fi/zIkCGFyYRi4jJwRxaxiUzgGkCF0=/0x152:2340x1906/full-fit-in/920x0/img-s3.ilcdn.fi/db9a6567bce6517477cf23a97ff3d523a7e59faba6dcdbfa4ae79f261dc40de7.jpg",
    "https://s1.cdn.autoevolution.com/images/news/this-is-how-cristiano-ronaldo-flies-in-one-of-his-two-gulfstream-private-jets-179408_1.jpg",
    "https://talksport.com/wp-content/uploads/sites/5/2022/11/cristiano-ronaldo-manchester-united-premier-775682224-1.jpg?strip=all&quality=100&w=1920&h=1440&crop=1",
    "https://static01.nyt.com/images/2021/08/28/sports/27soccer-ronaldo-print/merlin_193744962_2b0da09d-1348-4650-ba69-0509e155ebec-superJumbo.jpg",
  ];
  return user;
}
function ElonMusk(): User {
  const user: User = new User();
  user.id = 5;
  user.name = "Ілон";
  user.surname = "Маск";
  user.date = "1971-06-28";
  user.gender = "Чоловік";
  user.sexualOrientation = sexualOrientations[0]; // Не визначено
  user.height = "178";
  user.childrenStatus = childrenStatus[2]; // Є, але не хочу говорити про це
  user.alcoholStatus = alcoholStatus[4]; // В компаніях
  user.smokeStatus = smokeStatus[0]; // Не палю
  user.languages = [languages.indexOf("Англійська")];
  user.searchStatus = searchStatus[0]; // Ще точно не знаю
  user.selfInformation = "Підприємець Ілон Маск (Tesla, SpaceX).";
  user.linkToPhoto = [
    "https://detector.media/doc/images/news/archive/2021/187388/ArticleImage_187388.jpg",
    "https://media.slovoidilo.ua/media/publications/18/178552/178552-1_large.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/800px-Elon_Musk_2015.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/800px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/1200px-Elon_Musk_Royal_Society.jpg",
    "https://images.wsj.net/im-680000/?width=1278&size=1",
  ];
  return user;
}
function TomHanks(): User {
  const user: User = new User();
  user.id = 6;
  user.name = "Том";
  user.surname = "Хенкс";
  user.date = "1956-07-09";
  user.gender = "Чоловік";
  user.sexualOrientation = sexualOrientations[0]; // Гетеросексуал
  user.height = "183";
  user.childrenStatus = childrenStatus[1]; // Є діти
  user.alcoholStatus = alcoholStatus[2]; // Не часто
  user.smokeStatus = smokeStatus[0]; // Не палю
  user.languages = [languages.indexOf("Англійська")];
  user.searchStatus = searchStatus[0]; // Ще точно не знаю
  user.selfInformation =
    'Актор Том Хенкс ("Форрест Гамп", "Врятувати рядового Райана").';
  user.linkToPhoto = [
    "https://file.liga.net/images/general/2018/04/05/20180405152907-7515.jpg?v=1522938744",
    "https://static.yakaboo.ua/media/entity/author/t/o/tom.jpg",
    "https://images.english.elpais.com/resizer/Zpcdgu5_1dZVGR9i1LKACPG_hRg=/1960x1470/filters:focal(1773x1456:1783x1466)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/AKSN7LR4ONDX7GB2YW2HWNVNCU.jpg",
    "https://variety.com/wp-content/uploads/2019/11/tom-hanks-16x9.jpg?w=1000",
    "https://cdn.theatlantic.com/thumbor/doPfvTghjUX1QpglS1l35uVxZYs=/0x0:4000x5000/648x810/media/img/2023/05/02/TomHanks_Atlantic_web/original.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_FMjpg_UX1000_.jpg",
  ];
  return user;
}

function BradPitt(): User {
  const user: User = new User();
  user.id = 7;
  user.name = "Бред";
  user.surname = "Пітт";
  user.date = "1963-12-18";
  user.gender = "Чоловік";
  user.sexualOrientation = sexualOrientations[3]; // Не визначено
  user.height = "180";
  user.childrenStatus = childrenStatus[1]; // Є діти
  user.alcoholStatus = alcoholStatus[4]; // В компаніях
  user.smokeStatus = smokeStatus[0]; // Не палю
  user.languages = [languages.indexOf("Англійська")];
  user.searchStatus = searchStatus[0]; // Ще точно не знаю
  user.selfInformation = 'Актор Бред Пітт ("Бійцівський клуб", "12 мавп").';
  user.linkToPhoto = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/1200px-Brad_Pitt_2019_by_Glenn_Francis.jpg",
    "https://people.com/thmb/h67yba4NaGbpnv9DZVZm894kSjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(979x292:981x294)/Brad-Pitt_1-2000-e8a294b80b034e659785ad813d3f02f2.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_FMjpg_UX1000_.jpg",
    "https://goldenglobes.com/wp-content/uploads/2023/10/brad-pitt_03_paramount-pictures.jpg",
    "https://i.pinimg.com/736x/be/9e/04/be9e04435de2a13eefffb1fba1037f5e.jpg",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/08/15/gettyimages-1197770895.jpg",
  ];
  return user;
}
function LeonardoDiCaprio(): User {
  const user: User = new User();
  user.id = 8;
  user.name = "Леонардо";
  user.surname = "Ді Капріо";
  user.date = "1974-11-11";
  user.gender = "Чоловік";
  user.sexualOrientation = sexualOrientations[3]; // Не визначено
  user.height = "183";
  user.childrenStatus = childrenStatus[0]; // Немає дітей
  user.alcoholStatus = alcoholStatus[4]; // В компаніях
  user.smokeStatus = smokeStatus[0]; // Не палю
  user.languages = [languages.indexOf("Англійська")];
  user.searchStatus = searchStatus[0]; // Ще точно не знаю
  user.selfInformation =
    'Актор Леонардо Ді Капріо ("Титанік", "Вовк з Уолл-стріт").';
  user.linkToPhoto = [
    "https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
    "https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg",
    "https://variety.com/wp-content/uploads/2023/05/GettyImages-1492284655.jpg?w=1024",
    "https://goldenglobes.com/wp-content/uploads/2023/10/leo-2023.jpg",
    "https://www.usmagazine.com/wp-content/uploads/2024/01/Stars-Who-Are-Continually-Snubbed-by-the-Oscars-Leonardo-DiCaprio-Margot-Robbie-and-More-4.jpg?w=800&h=1421&crop=1&quality=86&strip=all",
  ];
  return user;
}
