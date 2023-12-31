// Homepage.js
import Card from './home/components/Card';

export default function Homepage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-auto">
      <Card
        title="Profile"
        description="Explore your profile and customize your settings."
        link="/profile"
      />
      <Card
        title="Pricing"
        description="Discover our flexible pricing plans for your needs."
        link="/pricing"
      />
    </div>
  );
}
