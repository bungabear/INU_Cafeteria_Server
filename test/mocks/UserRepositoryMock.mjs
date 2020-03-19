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

import UserRepository from '../../lib/domain/repositories/UserRepository';
import LoginResults from '../../lib/domain/entities/LoginResults';
import LogoutResults from '../../lib/domain/entities/LogoutResults';
import User from '../../lib/domain/entities/User';

import logger from '../../lib/common/utils/logger';

class UserRepositoryMock extends UserRepository {
  constructor() {
    super();
    this.user = null;
  }

  tryLoginWithIdAndToken(id, token) {
    this.user = new User({
      id: id,
      token: token,
    })
    return LoginResults.SUCCESS;
  }

  tryLoginWithIdAndPassword(id, password) {
    return LoginResults.SUCCESS;
  }

  tryLogout(id) {
    return LogoutResults.SUCCESS;
  }

  setBarcode(id, barcode) {
    logger.verbose(`set barcode of user ${id} to ${barcode}`);
    return true;
  }

  getUserById(id) {
    logger.verbose(`getting user of if ${id}`);

    return new User({
      id: id,
      token: 'my-remember-me-token',
      barcode: 'my-barcode',
    });
  }
}

export default UserRepositoryMock;
