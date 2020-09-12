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

import CoopRepository from '../../domain/repositories/CoopRepository';
import newAxiosInstance from '../../common/utils/axios';
import getCupidCookie from '../../infrastructure/uicoop/script';
import config from '../../../config';

class CoopRepositoryImpl extends CoopRepository {
  constructor() {
    super();
    this.axios = newAxiosInstance();
  }

  async visit(url, searchParams) {
    // try
    const response = await this._get(url, searchParams);

    if (response.includes('자동등록방지를 위해 보안절차를 거치고 있습니다.')) {
      // if stuck, fix and try
      const {A, B, C} = this._extractVariables(response);
      const cookie = getCupidCookie(A, B, C);

      this.axios.defaults.jar.setCookie(cookie, config.uicoop.domain);
      await this._post(config.uicoop.verifyUrl);

      return await this.visit(url, searchParams);
    } else {
      return response;
    }
  }

  async _get(url, searchParams={}) {
    return (await this.axios.get(this._createUrl(url, searchParams))).data;
  }

  _createUrl(url, options) {
    return this._isEmpty(options) ? url : (url + (url.includes('?') ? '&' : '?') + this._serialize(options));
  }

  _isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  _serialize(obj) {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }

    return str.join('&');
  }

  async _post(url) {
    await this.axios.post(url);
  }

  _extractVariables(text) {
    const {A, B, C} = /a=toNumbers\("(?<A>.+)"\),b=toNumbers\("(?<B>.+)"\),c=toNumbers\("(?<C>.+)"\)/.exec(text).groups;

    return {A, B, C};
  }
}

export default CoopRepositoryImpl;