
import { useState } from 'react';
import SearchFilters from '@/components/SearchFilters';
import UserProfile from '@/components/UserProfile';
import { useToast } from '@/components/ui/use-toast';

const mockUsers = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Node.js"],
    hackathons: ["ETHGlobal 2024", "HackFS"],
  },
  {
    id: 2,
    name: "Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    location: "Remote",
    skills: ["UI/UX Design", "Figma", "Frontend"],
    hackathons: ["Treehacks 2024"],
  },
  {
    id: 3,
    name: "Miguel Rodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel",
    location: "Madrid, Spain",
    skills: ["Solidity", "Smart Contracts", "Web3"],
    hackathons: ["ETHGlobal 2024", "DevPost Hack"],
  },
];

const Index = () => {
  const [users] = useState(mockUsers);
  const { toast } = useToast();

  const handleSearch = (searchTerm: string) => {
    console.log('Searching for:', searchTerm);
    // Implementation for search functionality will go here
  };

  const handleFilterChange = (filter: string, value: string) => {
    console.log('Filter changed:', filter, value);
    // Implementation for filter functionality will go here
  };

  const handleMessage = (userName: string) => {
    toast({
      title: "Message Sent!",
      description: `Your message request has been sent to ${userName}.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Perfect Hackathon Teammate
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with skilled developers, designers, and creators for your next hackathon project.
        </p>
      </header>

      <main className="container mx-auto px-4 pb-12">
        <SearchFilters onSearch={handleSearch} onFilterChange={handleFilterChange} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {users.map((user) => (
            <UserProfile
              key={user.id}
              name={user.name}
              avatar={user.avatar}
              location={user.location}
              skills={user.skills}
              hackathons={user.hackathons}
              onMessage={() => handleMessage(user.name)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
