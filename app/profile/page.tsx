import GraphComplete from '../profile/components/GraphsComplete';
import AccountDetails from './components/AccountDetails';
import ActivityFeed from './components/ActivityFeed';
import ProfileDetails from './components/ProfileDetails';
import UsageMetrics from './components/UsageMetrics';

export default async function ProfilePage() {
  return (
    <div className="space-y-8 py-8 w-full flex flex-col items-center text-black pb-8 overflow-x-hidden">
      <h3 className="text-3xl font-bold text-white mb-8">Profile Dashboard</h3>
      <div className="w-full flex flex-col md:flex-row items-center md:items-start">
        <div className="w-1/3 md:w-1/2 px-4 mb-4 md:mb-0 mx-5">
          <ProfileDetails />
        </div>
        <div className="w-2/3 md:w-1/2 px-4">
          <UsageMetrics />
          <ActivityFeed />
          <AccountDetails />
        </div>
      </div>
      <div className="w-full flex md:flex-row items-center md:items-start">
        <div className="w-full px-4 mb-4 md:mb-0 mx-5">
          <GraphComplete />
        </div>
      </div>
    </div>
  );
}
