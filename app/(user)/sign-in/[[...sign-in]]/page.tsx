import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" min-h-screen items-center justify-center flex flex-col m-auto  ">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        redirectUrl="/dashboard"
        appearance={{
          elements: {
            formButtonPrimary: `bg-[#0F172A]`,
          },
        }}
      />
    </div>
  );
}
