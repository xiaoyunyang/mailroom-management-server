"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("users", [
      {
        id: "823714db-7f42-4618-b69f-2b168a9181a4",
        email: "superlandlord@example.com",
        phone_number: 1234567890,
        email_verified: false,
        phone_number_verified: false,
        created_at: new Date(),
        updated_at: new Date(),
        email_notif_opt_in: false,
        sms_notif_opt_in: false,
        password: null
      },
      {
        id: "934801cd-a8ab-4ea7-9bcb-0eef97ae6cb6",
        email: "yangx232@gmail.com",
        phone_number: 1234567890,
        email_verified: false,
        phone_number_verified: false,
        email_notif_opt_in: false,
        sms_notif_opt_in: false,
        password: null,
        created_at: "2021-01-18 01:08:23.187-05",
        updated_at: "2021-01-18 01:08:23.187-05",
      },
      {
        id: "a98084cb-4718-45e4-96cd-1d2666ecad49",
        email: "tegnazianpaul@gmail.com",
        phone_number: 1234567890,
        email_verified: false,
        phone_number_verified: false,
        email_notif_opt_in: false,
        sms_notif_opt_in: false,
        password: null,
        created_at: "2021-01-18 01:08:23.187-05",
        updated_at: "2021-01-18 01:08:23.187-05",
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
