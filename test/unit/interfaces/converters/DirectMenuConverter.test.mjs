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

/*
import DirectMenuConverter from '../../../../lib/interfaces/converters/DirectMenuConverter';
import CafeteriaRepositoryMock from '../../../mocks/CafeteriaRepositoryMock';
import config from '../../../../config';
import CoopRepositoryImpl from '../../../../lib/interfaces/storage/CoopRepositoryImpl';
*/

describe('# COOP as a new source', () => {
  it('works', () => {});

  // Current data source allows max 7 day menus.
  /*
  it('should work', async () => {
    const converter = new DirectMenuConverter();
    const repo = new CafeteriaRepositoryMock();
    const coopRepo = new CoopRepositoryImpl();

    const rawHtml = await coopRepo.visit(config.menu.url, {sdt: '20200909'});

    const menus = converter.convert({
      cafeteria: await repo.getAllCafeteria(),
      corners: await repo.getAllCorners(),
      rawHtml: rawHtml,
    });

    console.log(menus);

    expect(menus.length).toBe(7 + 6); // Normal 7 + empty 6
  });
   */
});

