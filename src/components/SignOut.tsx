import { signOut } from "@/auth";

type Props = {};
const SignOut = (props: Props) => {
  const action = async () => {
    "use server";
    await signOut();
  };

  return (
    <form action={action}>
      <button type="submit">SignOut</button>
    </form>
  );
};
export default SignOut;
