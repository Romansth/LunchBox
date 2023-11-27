# Social Networking API Endpoints

## 1. Follow a User
- **Endpoint**: `POST /api/follow`
- **Description**: Allows a user to follow another user.
- **Payload**: `follower_id` (ID of the user who is following), `followee_id` (ID of the user to be followed).
- **Functionality**: Inserts a new record in the `follows` table.

## 2. Unfollow a User
- **Endpoint**: `DELETE /api/unfollow`
- **Description**: Allows a user to unfollow another user they are currently following.
- **Payload**: `follower_id`, `followee_id`.
- **Functionality**: Deletes the relevant record from the `follows` table.

## 3. List of Followers
- **Endpoint**: `GET /api/users/:user_id/followers`
- **Description**: Retrieves a list of all users who follow the specified user.
- **Parameters**: `user_id` (ID of the user whose followers are to be listed).
- **Functionality**: Selects records from the `follows` table where `followee_id` matches the given `user_id`.

## 4. List of Followings
- **Endpoint**: `GET /api/users/:user_id/following`
- **Description**: Retrieves a list of all users that the specified user is following.
- **Parameters**: `user_id`.
- **Functionality**: Selects records where `follower_id` matches the given `user_id`.

## 5. List of Mutual Follows (Connections)
- **Endpoint**: `GET /api/users/:user_id/connections`
- **Description**: Gets a list of mutual follows (i.e., connections or friends) for the specified user.
- **Parameters**: `user_id`.
- **Functionality**: Performs a join on the `follows` table to find mutual follow relationships.

## 6. Check if User is Following Another User
- **Endpoint**: `GET /api/follow/check`
- **Description**: Checks if one user is following another.
- **Payload**: `follower_id`, `followee_id`.
- **Functionality**: Looks up the `follows` table for a record matching both IDs.

---

### Notes on Security and Functionality:

- **Authentication**: All these endpoints should require user authentication. Ensure that actions are performed by authenticated users and that users can only make changes related to their accounts (e.g., a user can only follow/unfollow from their account).
- **Validation**: Include necessary validation checks (e.g., a user should not be able to follow themselves; checks for existing follow records before inserting a new one).
- **Error Handling**: Implement proper error handling for scenarios like trying to follow a non-existing user, unfollowing a user not being followed, etc.
- **Pagination**: For endpoints that can return large datasets (like lists of followers/following), consider implementing pagination to limit the amount of data returned in a single request.

These endpoints provide the foundation for the social aspects of your application, enabling users to establish connections and interact with each other's content.
