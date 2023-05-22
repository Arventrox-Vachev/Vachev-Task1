import { getServerAuthSession } from "./api/auth/[...nextauth]";

export const test = ({ user }) => {
  return (
    <div>
      test
      <pre>{user.name}</pre>
    </div>
  );
};
export default test;

export async function getServerSideProps(ctx) {
  const session = await getServerAuthSession(ctx.req, ctx.res);

  if (!session)
    return {
      redirect: { destination: "/", permanent: false }
    };

  return {
    props: {
      user: session.user
    }
  };
}
