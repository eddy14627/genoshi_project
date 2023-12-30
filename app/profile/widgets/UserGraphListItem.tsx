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

      {/* Add the following styles for dark grey background */}
      <style jsx>{`
        .drawer-overlay {
          background-color: rgba(
            0,
            0,
            0,
            0.6
          ); // Dark grey with some transparency
        }

        .drawer-content {
          background-color: #333; // Dark grey
          color: white; // White text color
        }
      `}</style>
    </Drawer>
  );
};

export default UserGraphListItem;
