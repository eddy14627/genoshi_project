'use client';

import Input from '../../../components/Input';
import EditIcon from '../../../components/icons/Edit';
import useProfile from '../useProfile';
import Link from 'next/link';

const ProfileDetails = () => {
  const { data } = useProfile();

  return (
    <div className="rounded-md flex md:flex-row gap-8 border-[1px] bg-dark-tremor-background-subtle bg-opacity-0 px-auto">
      <div className="flex flex-col gap-1 px-20">
        <Link href="/profile/edit" className="ml-auto mt-2">
          <EditIcon props="w-6 h-6 text-white" />
        </Link>
        <img
          width={128}
          height={128}
          className="rounded-md w-fit h-fit mx-auto my-auto"
          src={profile.img}
          alt="profile_img"
        />
        <Input
          value={data.name}
          label="Name"
          valueProps="text-xl font-[400] my-10"
        />
        <Input
          label="Email"
          value={profile.email}
          valueProps="text-xl font-[400]"
        />
        <Input label="Bio" value={data.bio} valueProps="text-md font-[400]" />
        <Input label="Work" value={data.work} valueProps="text-md font-[400]" />
      </div>
    </div>
  );
};

export default ProfileDetails;

const profile = {
  name: 'Adarsh Mishra',
  email: 'adjee2020@gmail.com',
  bio: 'Aspiring to be a world-known engineer. Being a computer science student, I want to contribute to the projects that will shape upcoming generations.',
  img: 'https://st3.depositphotos.com/15648834/17930/v/380/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
  csp: 'Basic Plan',
  status: 'Activated'
};
