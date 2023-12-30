import MaxWidthWrapper from '../widgets/MaxWidthWrapper';
import MyCollections from '../widgets/MyCollections';
import UserCard from '../widgets/UserCard';
import UserGraphList from '../widgets/UserGraphList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../widgets/ui/tabs';
import { USER_GRAPHS } from '@/lib/config';

const Profile = () => {
  return (
    <MaxWidthWrapper className="flex flex-col md:flex-row gap-5 justify-between">
      <div className="flex-grow w-full">
        <Tabs defaultValue="my-graphs" className="w-full">
          <TabsList className="w-full flex h-26">
            <TabsTrigger className="w-full text-lg" value="my-graphs">
              My Graphs
            </TabsTrigger>
            <TabsTrigger className="w-full text-lg" value="paper-collections">
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
