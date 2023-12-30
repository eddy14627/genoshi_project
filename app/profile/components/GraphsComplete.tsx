import MaxWidthWrapper from '../widgets/MaxWidthWrapper';
import MyCollections from '../widgets/MyCollections';
import UserGraphList from '../widgets/UserGraphList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../widgets/ui/tabs';
import { USER_GRAPHS } from '@/lib/config';

const Profile = () => {
  return (
    <MaxWidthWrapper className="flex md:flex-row gap-5 justify-between">
      <div className="flex-grow w-full text-center bg-gray-100 p-8 rounded-md">
        <h1 className="text-3xl font-bold text-black mb-5 my-10">
          Graph Analysis
        </h1>
        <Tabs defaultValue="my-graphs" className="w-full">
          <TabsList className="w-full flex h-26">
            <TabsTrigger
              className="w-full text-lg text-white"
              value="my-graphs"
              // Add dark grey highlight
              style={{ backgroundColor: '#333' }}
            >
              My Graphs
            </TabsTrigger>
            <TabsTrigger
              className="w-full text-lg text-white"
              value="paper-collections"
              // Add dark grey highlight
              style={{ backgroundColor: '#333' }}
            >
              Paper Collections
            </TabsTrigger>
          </TabsList>
          <TabsContent value="my-graphs" className="py-7 px-2">
            <UserGraphList />
          </TabsContent>
          <TabsContent value="paper-collections" className="py-7 px-2">
            <MyCollections />
          </TabsContent>
        </Tabs>
      </div>
    </MaxWidthWrapper>
  );
};

export default Profile;
