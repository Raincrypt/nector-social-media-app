import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

const Onboarding = async () => {
  const user: User | null = await currentUser();
  const userInfo = {
    name: "",
    _id: "",
    username: "",
    bio: "",
    image: "",
  };
  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="mx-auto flex flex-col justify-start px-10 py-20 max-w-3xl">
      <h1 className="head-text">Onboarding</h1>
      <p className="text-base-regular text-light-1 mt-3">
        Complete Your Profile now to use Nector
      </p>
      <section className="bg-dark-2 p-10 mt-9">
        {/* <AccountProfile user={userData} btnTitle="Continue" /> */}
      </section>
    </main>
  );
};

export default Onboarding;
