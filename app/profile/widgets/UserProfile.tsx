import { useEffect, useState } from 'react';

const useProfile = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    bio: '',
    work: ''
  });

  // Simulate fetching user profile data
  useEffect(() => {
    // Fetch user profile data from your API or other data source
    // For now, using hardcoded data
    const fakeData = {
      name: 'Adarsh Mishra',
      email: 'adjee2020@gmail.com',
      bio: 'Aspiring to be a world-known engineer. Being a computer science student, I want to contribute to the projects that will shape upcoming generations.',
      work: 'Software Engineer'
    };

    setData(fakeData);
  }, []);

  return { data };
};

export default useProfile;
