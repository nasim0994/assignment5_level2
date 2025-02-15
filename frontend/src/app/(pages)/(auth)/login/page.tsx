import LoginForm from "@/components/modules/auth/LoginForm";

export default function LoginPage() {
  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="w-[90%] sm:w-[500px] border-2 border-gray-100 rounded-lg p-6">
        <div className="flex justify-center items-center gap-4 mb-6 border-b pb-4">
          <h2 className="text-red-500 text-4xl font-bold">eM</h2>
          <div>
            <h1 className="text-2xl font-semibold text-neutral">Sign In</h1>
            <p className="text-neutral-content text-sm">
              Enter your phone number to sign in.
            </p>
          </div>
        </div>

        <LoginForm />
      </div>
    </section>
  );
}
