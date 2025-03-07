import Image from "next/image";
import Link from "next/link";

// Placeholder image as a data URL
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzIiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIj5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4=';

export default function Home() {
  // Project data is kept but not displayed
  const projects = [
    {
      id: 'chiron',
      title: 'Chiron',
      subtitle: 'Microsoft HoloLens',
      description: 'Designing mixed reality experiences for medical education.',
      link: '/projects/chiron'
    },
    {
      id: 'clio',
      title: 'App Ecosystem',
      subtitle: 'Clio',
      description: 'Leading the end-to-end research, design implementation, and product vision of Clio\'s App Ecosystem.',
      link: '/projects/clio'
    },
    {
      id: 'noom',
      title: 'Behavior Change',
      subtitle: 'Noom',
      description: 'Designing features to help users build sustainable habits.',
      link: '/projects/noom'
    },
    {
      id: 'roadmunk',
      title: 'Idea Prioritization',
      subtitle: 'Roadmunk',
      description: 'Research and design of a Feature Prioritization product for PMs.',
      link: '/projects/roadmunk'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
        <div className="md:w-1/3">
          <div className="relative w-full aspect-square max-w-[275px]">
            <div className="bg-gray-200 w-full h-full rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Profile Image</span>
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hey, I'm Javan! I work at Shopify as a Senior Product Designer.
          </h1>
          <p className="text-xl text-gray-700">
            Recently shipped the <a href="https://shopifypartnerblog.myshopify.com/blogs/blog/checkout-sheet-protocol-for-partners" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">
              Checkout Sheet Protocol
            </a>, which allows TikTok to offer the Shopify's world class checkout for brands and creators.
          </p>
        </div>
      </div>

      {/* Coming Soon Message */}
      <div className="mt-16 text-center p-8 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Projects Coming Soon</h2>
        <p className="text-gray-700">
          I'm currently updating my portfolio with new projects. Check back soon to see my work!
        </p>
      </div>

      {/* Projects Grid - Hidden for now */}
      {/* 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link href={project.link} key={project.id} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">{project.title}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 uppercase tracking-wider">{project.subtitle}</p>
                <h2 className="text-2xl font-bold mt-1 mb-2">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      */}
    </div>
  );
}
