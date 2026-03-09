import { User } from "../src/user";

describe("Social Media User Flow", () => {
  let alice: User;
  let bob: User;

  beforeEach(() => {
    alice = new User("Alice");
    bob = new User("Bob");
  });

  test("Alice sends friend request to Bob", () => {
    expect(alice.sendFriendRequest(bob)).toBe("Alice sent a friend request to Bob");
  });

  test("Bob accepts Alice's request", () => {
    alice.acceptFriendRequest(bob);
    expect(alice.friends).toContain(bob);
    expect(bob.friends).toContain(alice);
  });

  test("Bob rejects Alice's request", () => {
    expect(bob.rejectFriendRequest()).toBe("Friend request rejected.");
  });

  test("Alice blocks Bob", () => {
    alice.blockUser(bob);
    expect(alice.blocked).toContain(bob);
    expect(alice.sendFriendRequest(bob)).toBe("Cannot send request, user is blocked.");
  });
});