"use server";

import { redirect } from "next/navigation";

export default async (
  prevState: { message: string | null },
  formData: FormData
) => {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "POST",
        body: formData,
        credentials: "include",
      }
    );
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    shouldRedirect = true;
  } catch (e) {
    console.error(e);
    return { message: null };
  }

  if (shouldRedirect) {
    redirect("/home");
  }

  return { message: null };
};