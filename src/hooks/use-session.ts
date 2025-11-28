import { useSession as useNextAuthSession } from "next-auth/react";

export function useSession() {
  const { data: session, status, update } = useNextAuthSession();

  return {
    session: {
      ...session,
      user: {
        ...session?.user,
        id: session?.user?.id || "",
        email: session?.user?.email || "",
        name: session?.user?.name || null,
      },
    },
    status,
    update,
  };
}
