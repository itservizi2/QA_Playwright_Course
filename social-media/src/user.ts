export class User {
  constructor(public name: string, public friends: User[] = [], public blocked: User[] = []) {}

  sendFriendRequest(target: User): string {
    if (this.blocked.includes(target) || target.blocked.includes(this)) {
      return "Cannot send request, user is blocked.";
    }
    return `${this.name} sent a friend request to ${target.name}`;
  }

  acceptFriendRequest(target: User): void {
    this.friends.push(target);
    target.friends.push(this);
  }

  rejectFriendRequest(): string {
    return "Friend request rejected.";
  }

  blockUser(target: User): void {
    this.blocked.push(target);
  }
}