import { notFound } from 'next/navigation';

// Define the types for our content items
type TextContent = {
  type: 'text';
  content: string;
};

type ImageContent = {
  type: 'image';
  alt: string;
  caption?: string;
};

type ContentItem = TextContent | ImageContent;

type Project = {
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  content: ContentItem[];
};

// This would typically come from a CMS or API
const projectsData: Record<string, Project> = {
  chiron: {
    title: 'Chiron',
    subtitle: 'Microsoft HoloLens',
    description: 'Designing mixed reality experiences for medical education.',
    fullDescription: 'A detailed case study about designing mixed reality experiences for medical education using Microsoft HoloLens.',
    content: [
      {
        type: 'text',
        content: 'Chiron is a mixed reality application for the Microsoft HoloLens that helps medical students learn anatomy in an interactive and immersive way.'
      },
      {
        type: 'image',
        alt: 'Chiron application interface',
        caption: 'The Chiron application interface showing a 3D model of human anatomy.'
      },
      {
        type: 'text',
        content: 'The project involved extensive research with medical students and professors to understand their needs and pain points in learning complex anatomical structures.'
      }
    ]
  },
  clio: {
    title: 'App Ecosystem',
    subtitle: 'Clio',
    description: 'Leading the end-to-end research, design implementation, and product vision of Clio\'s App Ecosystem.',
    fullDescription: 'A case study on leading the end-to-end research, design implementation, and product vision of Clio\'s App Ecosystem.',
    content: [
      {
        type: 'text',
        content: 'As the lead designer for Clio\'s App Ecosystem, I was responsible for creating a seamless experience for users to discover, install, and use third-party applications within the Clio platform.'
      },
      {
        type: 'image',
        alt: 'Clio App Directory',
        caption: 'The redesigned Clio App Directory making it easier for users to find relevant applications.'
      }
    ]
  },
  noom: {
    title: 'Behavior Change',
    subtitle: 'Noom',
    description: 'Designing features to help users build sustainable habits.',
    fullDescription: 'A case study on designing features to help Noom users build sustainable habits for long-term health outcomes.',
    content: [
      {
        type: 'text',
        content: 'At Noom, I worked on designing features that help users build sustainable habits for long-term health outcomes, using behavioral psychology principles.'
      },
      {
        type: 'image',
        alt: 'Noom habit tracking feature',
        caption: 'The habit tracking feature designed to help users maintain consistency.'
      }
    ]
  },
  roadmunk: {
    title: 'Idea Prioritization',
    subtitle: 'Roadmunk',
    description: 'Research and design of a Feature Prioritization product for PMs.',
    fullDescription: 'A case study on the research and design of a Feature Prioritization product for product managers at Roadmunk.',
    content: [
      {
        type: 'text',
        content: 'I led the research and design of a Feature Prioritization product for product managers at Roadmunk, helping them make data-driven decisions about which features to build next.'
      },
      {
        type: 'image',
        alt: 'Roadmunk prioritization matrix',
        caption: 'The prioritization matrix allowing PMs to visualize feature impact vs effort.'
      }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: any) {
  const { slug } = params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{project.subtitle}</p>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-700">{project.fullDescription}</p>
      </div>

      <div className="mb-12">
        <div className="h-96 w-full bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-xl font-medium">{project.title}</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        {project.content.map((item, index) => {
          if (item.type === 'text') {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === 'image') {
            return (
              <figure key={index} className="my-8">
                <div className="h-80 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">{item.alt}</span>
                </div>
                {item.caption && (
                  <figcaption className="text-center text-sm text-gray-500 mt-2">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
} 