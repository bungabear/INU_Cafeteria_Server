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

import resolve, {initWithOverrides} from '../../../../lib/common/di/resolve';
import modules from '../../../../lib/common/di/modules';

import Authenticator from '../../../../lib/domain/security/Authenticator';
import UserRepositoryMock from '../../../mocks/UserRepositoryMock';
import UserRepository from '../../../../lib/domain/repositories/UserRepository';

beforeEach(async () => {
  await initWithOverrides(modules, [
    {
      create: async (r) => new UserRepositoryMock(),
      as: UserRepository,
    },
  ], true);
});

describe('# authenticateJwt', () => {
  it('should say invalid to undefined id', async () => {
    expect(await resolve(Authenticator).authenticateJwt({})).toEqual({isValid: false});
  });

  it('should say invalid to non-existing id', async () => {
    expect(await resolve(Authenticator).authenticateJwt({id: 8935872235})).toEqual({isValid: false});
  });

  it('should say valid', async () => {
    expect(await resolve(Authenticator).authenticateJwt({id: 201701562})).toEqual({isValid: true});
  });
});
