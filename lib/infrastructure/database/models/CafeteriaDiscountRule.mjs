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

'use strict';

export default (sequelize, DataTypes) => {
  const cafeteriaDiscountRuleModel = sequelize.define(
      'cafeteria_discount_rule',
      {
        /**
         * This field won't be used in domain.
         * It is only for to specify a row in a table.
         */
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },

        token: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        available_meal_types: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },

        /**
         * And a foreign key 'cafeteria_id'
         */

      }, {
        // options
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
      },
  );

  cafeteriaDiscountRuleModel.associate = (models) => {
    cafeteriaDiscountRuleModel.belongsTo(
        models.Cafeteria,
        {
          foreignKey: 'cafeteria_id',
        },
    );
  };

  return cafeteriaDiscountRuleModel;
};