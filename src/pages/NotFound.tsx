import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Helmet>
        <title>Page not found | Vanesa Sakota</title>
        <meta name="description" content="The page you requested could not be found. Return to Vanesa Sakota Psychotherapy to explore our services." />
        <link rel="canonical" href="https://www.vanesasakota.com.au/404" />
        <meta property="og:title" content="Page not found | Vanesa Sakota" />
        <meta property="og:description" content="The page you requested could not be found. Return to Vanesa Sakota Psychotherapy to explore our services." />
        <meta property="og:url" content="https://www.vanesasakota.com.au/404" />
        <meta name="robots" content="noindex" />
        <meta name="twitter:title" content="Page not found | Vanesa Sakota" />
        <meta name="twitter:description" content="The page you requested could not be found. Return to Vanesa Sakota Psychotherapy to explore our services." />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
