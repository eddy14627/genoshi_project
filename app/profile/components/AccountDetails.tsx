import Input from '../../../components/Input';

const AccountDetails = () => {
  const profile = {
    name: 'Adarsh Mishra',
    email: 'adjee2020@gmail.com',
    bio: 'Aspiring to be a world-known engineer. Being a computer science student, I want to contribute to the projects that will shape upcoming generations.',
    img: 'https://st3.depositphotos.com/15648834/17930/v/380/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
    csp: 'Basic Plan',
    status: 'Activated'
  };

  return (
    <div className="w-full rounded-md   gap-4 m-auto border-[0px] p-0 my-10">
      {/* <div className="mx-auto my-2"> */}
      <h2 className="text-3xl font-extrabold mb-6 text-blue-600">
        User Status
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-lg shadow-md p-6 bg-gray-800 text-white overflow-hidden">
          <p className="text-xl mb-4 overflow-ellipsis whitespace-nowrap md:text-lg">
            <span className="text-green-500 font-bold">
              Current Subscription Plan:
            </span>
            <span className="ml-2 text-white">{profile.csp}</span>
          </p>
        </div>

        <div className="rounded-lg shadow-md p-6 bg-gray-800 text-white overflow-hidden">
          <p className="text-xl mb-4 overflow-ellipsis whitespace-nowrap md:text-lg">
            <span className="text-green-500 font-bold">Status:</span>
            <span className="ml-2 text-white">{profile.status}</span>
          </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
