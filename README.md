# React + TypeScript + Vite

-- How to run the app--
1. npm i
2. npm run dev

-- App Feature --

Every api that this app hit are from https://fakestoreapi.com

-- Login --
You just need to click Login button to go to the main feature.
- Note
    -- I already hardcode the needed payload data to login
    -- Test the validity if you want to change the payload
    -- Success and failed attempt will show toast

-- User --
    1. User Dashboard
      - Show 1-10 list user
      - Delete User
      - Sort Ascending and Descending
      - Handle Loading when fetched and delete
    2. User Detail
      - Show detail info about user
      - Edit User
      - Success and failed attempt will show toast
      - If you want to see the payload sent to fakeapi, please inspect network
      - Handle Loading when fetched

!!!---Every Page is responsive using Bootstrap---!!!

!!Important Note!!
- Pagination can only show 1-10 limit and sort
  Provided api did not support for pagination
- Add / Update/ Delete data did not change
  Provided api only provide to show successfully add/change/delete data, the actual data did not change.



