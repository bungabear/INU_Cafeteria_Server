/**
 * This file is part of INU Cafeteria.
 *
 * Copyright (C) 2020 INU Global App Center <potados99@gmail.com>
 *
 * INU Cafeteria is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * INU Cafeteria is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * These are most latest in November 2020.
 */
export default {

  cafeteria: [
    {
      id: 1,
      name: '학생식당',
      display_name: '학생 식당',
      image_path: '',
      support_menu: true,
      support_discount: false,
      support_notification: false,
    },
    {
      id: 2,
      name: '27호관식당',
      display_name: '27호관 식당',
      image_path: '',
      support_menu: true,
      support_discount: false,
      support_notification: false,
    },
    {
      id: 3,
      name: '사범대식당',
      display_name: '사범대 식당',
      image_path: '',
      support_menu: true,
      support_discount: true,
      support_notification: false,
    },
    {
      id: 4,
      name: '제1기숙사식당',
      display_name: '제1기숙사 식당',
      image_path: '',
      support_menu: true,
      support_discount: true,
      support_notification: false,
    },
    {
      id: 5,
      name: '2호관식당',
      display_name: '2호관 식당',
      image_path: '',
      support_menu: true,
      support_discount: false,
      support_notification: false,
    },
  ],

  corners: [
    // 학생식당
    {id: 1, name: '1코너중식(앞쪽)', display_name: '1코너', available_at: 2, cafeteria_id: 1},
    {id: 2, name: '1-1코너중식(앞쪽)', display_name: '1-1코너', available_at: 4, cafeteria_id: 1},
    {id: 3, name: '2-1코너 중식(앞쪽)', display_name: '2-1코너', available_at: 2, cafeteria_id: 1},
    {id: 4, name: '2-1코너 석식(앞쪽)', display_name: '2-1코너', available_at: 4, cafeteria_id: 1},
    {id: 5, name: '2-2코너 중식(앞쪽)', display_name: '2-2코너', available_at: 2, cafeteria_id: 1},
    {id: 6, name: '3코너(앞쪽)', display_name: '3코너', available_at: 2|4, cafeteria_id: 1},
    {id: 7, name: '4코너(뒤쪽)', display_name: '3코너', available_at: 2|4, cafeteria_id: 1},
    {id: 8, name: '5코너(뒤쪽)', display_name: '3코너', available_at: 2|4, cafeteria_id: 1},

    // 27호관식당
    {id: 9, name: 'A코너 중식', display_name: 'A코너', available_at: 2, cafeteria_id: 2},
    {id: 10, name: 'A코너 석식', display_name: 'A코너', available_at: 4, cafeteria_id: 2},
    {id: 11, name: 'B코너 중식', display_name: 'B코너', available_at: 2, cafeteria_id: 2},

    // 사범대식당
    {id: 12, name: '중식', display_name: '중식', available_at: 2, cafeteria_id: 3},
    {id: 13, name: '석식', display_name: '석식', available_at: 4, cafeteria_id: 3},

    // 제1기숙사식당
    {id: 14, name: '조식', display_name: '조식', available_at: 1, cafeteria_id: 4},
    {id: 15, name: '중식', display_name: '중식', available_at: 2, cafeteria_id: 4},
    {id: 16, name: '석식', display_name: '석식', available_at: 4, cafeteria_id: 4},

    // 2호관식당
    {id: 17, name: '중식', display_name: '중식', available_at: 2, cafeteria_id: 5},
    {id: 18, name: '석식', display_name: '석식', available_at: 4, cafeteria_id: 5},
  ],

  validationParams: [
    {
      cafeteria_id: 3, /* 사범대 */
      token: '$2b$09$im4EsvdDUMEP00/MqJ0fOe2hgCufZbHjwPr51nyVTK3KfjWXse9HW', // bcrypt hashed
      available_meal_types: 2 | 4, /* launch and dinner only */
      time_range_breakfast: '08:30-11:00',
      time_range_lunch: '11:00-14:10',
      time_range_dinner: '16:30-23:40',
    },
    {
      cafeteria_id: 4, /* 제1기숙사식당 */
      token: '$2b$09$7gXIej4V7ZAu8fPSDiEVVOBOKiLEBKJkumHONkIECver4EW829pZ2', // bcrypt hashed
      available_meal_types: 1, /* breakfast only */
      time_range_breakfast: '08:30-13:10',
      time_range_lunch: '13:10-14:10',
      time_range_dinner: '16:30-23:40',
    },
  ],

  ruleStatuses: [
    {
      id: 1,
      name: 'requestShouldBeInMealTime',
      description: '요청 시각이 해당 식당이 할인을 지원하는 시간대에 속해야 합니다.',
      enabled: true,
    },
    {
      id: 2,
      name: 'cafeteriaShouldSupportDiscount',
      description: '해당 식당이 할인을 지원해야 합니다.',
      enabled: true,
    },
    {
      id: 3,
      name: 'userShouldExist',
      description: '할인받고자 하는 사용자가 존재해야 합니다.',
      enabled: true,
    },
    {
      id: 4,
      name: 'barcodeShouldBeActive',
      description: '사용자의 바코드가 활성화되어 있어야 합니다.',
      enabled: true,
    },
    {
      id: 5,
      name: 'discountShouldBeFirstToday',
      description: '같은 날짜에 할인받은 기록이 없어야 합니다.',
      enabled: true,
    },
    {
      id: 6,
      name: 'barcodeShouldNotBeUsedRecently',
      description: '바코드를 너무 빠르게 반복적으로 태그하지 않아야 합니다.',
      enabled: true,
    },
    {
      id: 7,
      name: 'tokenShouldBeValid',
      description: '식당의 고유 토큰이 유효해야 합니다.',
      enabled: true,
    },
  ],

  parseRegexes: [
    {
      id: 1,
      regex: '(?<PRICE>[0-9,]+)원/(?<CAL>[0-9,]+)[Kk]cal',
    },
    {
      id: 2,
      regex: '(?<PRICE>[0-9,]+)원[\n ](?<CAL>[0-9,]+)[Kk]cal',
    },
    {
      id: 3,
      regex: '(?<PRICE>[0-9,]+)원[\n ](?<CAL>[0-9,]+)[Kk]cal[\n ](?<CAL2>[0-9,]+)[Kk]cal',
    },
    {
      id: 4,
      regex: '(?<PRICE>[0-9,]+)원/(?<PRICE2>[0-9,]+)원[\n ](?<CAL>[0-9,]+)[Kk]cal/(?<CAL2>[0-9,]+)[Kk]cal',
    },
    {
      id: 5,
      regex: '(?<PRICE>[0-9,]+)원[\n ](?<CAL>[0-9,]+)[Kk]cal/(?<CAL2>[0-9,]+)[Kk]cal',
    },
    {
      id: 6,
      regex: '(?<PRICE>[0-9,]+)~(?<PRICE2>[0-9,]+)원[\n ].+[0-9,]+원',
    },
    {
      id: 7,
      regex: '(?<PRICE>[0-9,]+)원',
    },
  ],

  appVersionRules: [
    {
      id: 1,
      os: 'android',
      required_minimum_version: '4.0.0',
    },
  ],

  notices: [
    {
      id: 3,
      title: '카페테리아 4.0.0',
      body: '안녕하세요. 이것은 공지입니다. 다만 그냥 공지인 것이 아니고 아주 아주 긴 공지인 것인데, 그것의 목적은 모바일 화면에서 이것이 어떻게 보이는가를 테스트하기 위한 것으로, 쓸데없이 길기만 하게 작성되었습니다. 아마 스크롤이 가능한 길이까지 글자가 표시될 것인데, 내용이 글씨로 꽉꽉 차게 될 것이고 이렇게 줄\n바\n꿈\n도 표시될 겁니다',
      target_os: '*',
      target_version: '*',
    },
    {
      id: 4,
      title: '오이 자네, 로컬서버를 쓰고있는군!',
      body: '훌륭한 자세야',
      target_os: '*',
      target_version: '4.0.0-localserver',
    },
    {
      id: 5,
      title: '미래에서 왔소!',
      body: '내가 사는 곳에는 버전 5가 나왔소 ㅎㅎ',
      target_os: 'android',
      target_version: '< 5.0.0',
    },
    {
      id: 6,
      title: '안드로이드를 쓰는 자들에게 알린다!',
      body: '좋더냐, 엉!?',
      target_os: 'android',
      target_version: '*',
    },
    {
      id: 7,
      title: '버전이 낮은 자들에게 알린다!',
      body: '좋더냐, 엉!?',
      target_os: '*',
      target_version: '<= 4.0.0',
    },
  ],

  users: [
    {
      id: 202099999,
    },
  ],

  questions: [
    {
      id: 1,
      device_info: 'ios safari',
      version: '4.0.0',
      content: '처음 문의!',
      user_id: 202099999,
    },
    {
      id: 2,
      device_info: 'ios safari',
      version: '4.0.0',
      content: '또 문의!',
      user_id: 202099999,
    },
  ],

  answers: [
    {
      id: 1,
      title: '처음 답변!',
      body: '처음 답변입니다.',
      read: true,
      user_id: 202099999,
      question_id: 1,
    },
    {
      id: 2,
      title: '또 답변!',
      body: '또 답변입니다.',
      read: false,
      user_id: 202099999,
      question_id: 2,
    },
  ],
};
