import GraphDetails from './GraphDetails';
import { Button, buttonVariants } from './ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { UserGraph } from '@/lib/types';
import { cn } from '@/lib/utils';

const UserGraphListItem = ({ data }: { data: UserGraph }) => {
  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant="secondary" className="w-full h-48 mx-auto md:w-min-48">
          {data.title}
        </Button>
      </DrawerTrigger>
      <GraphDetails data={data} />
    </Drawer>
  );
};

export default UserGraphListItem;
