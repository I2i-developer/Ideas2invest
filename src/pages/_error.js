import Error from "next/error";

export default function CustomErrorPage({ statusCode }) {
  return <Error statusCode={statusCode} />;
}

CustomErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};
