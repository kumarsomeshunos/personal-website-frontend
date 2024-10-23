"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function ThemePage() {
  const router = useRouter();
  const { slug: themeName } = useParams();

  useEffect(() => {
    if (themeName) {
      document.cookie = `themeName=${themeName}; path=/; samesite=strict`;
      router.push("/");
    }
  }, [themeName]);

  return <div>Loading...</div>;
}
