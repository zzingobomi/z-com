export async function getFollowingPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts`,
    {
      next: {
        tags: ["posts", "followings"],
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post followings");
  }

  return res.json();
}
