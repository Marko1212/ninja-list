import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => {
      // 👇️ clear timeout when component unmounts
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <div className="not-found">
        <h1>Oooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the <Link href="/">Homepage</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
