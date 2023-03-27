import yaml from 'js-yaml';
import fs from 'fs-extra';

const MOCK_SPEC_FILE = {
  "lastUpdate": "2023-03-27",
  "version": "1.2",
  "projectName": "Amazing Project",
  "projectDescription": "The Amazing Project is an innovative web application aimed at solving problem X by providing features A, B, and C.",
  "technologyStack": {
    "frontend": ["React", "Redux", "TypeScript"],
    "backend": ["Node.js", "Express", "MongoDB"],
    "ciCd": ["Jenkins", "Docker"]
  },
  "repositoryUrl": "https://github.com/user/amazing-project",
  "projectManagementTool": {
    "name": "Trello",
    "url": "https://trello.com/amazingproject"
  },
  "teamMembers": [
    {
      "name": "Jane Doe",
      "role": "Project Manager",
      "email": "jane@example.com"
    },
    {
      "name": "John Smith",
      "role": "Frontend Developer",
      "email": "john@example.com"
    },
    {
      "name": "Alice Johnson",
      "role": "Backend Developer",
      "email": "alice@example.com"
    },
    {
      "name": "Bob Brown",
      "role": "QA Engineer",
      "email": "bob@example.com"
    }
  ],
  "projectTimeline": {
    "startDate": "2023-01-01",
    "endDate": "2023-06-30",
    "milestones": [
      {
        "name": "Initial Prototype",
        "date": "2023-02-15",
        "description": "Complete first working version of the application."
      },
      {
        "name": "Feature A Implementation",
        "date": "2023-03-15",
        "description": "Implement and integrate feature A."
      },
      {
        "name": "Feature B Implementation",
        "date": "2023-04-15",
        "description": "Implement and integrate feature B."
      },
      {
        "name": "Feature C Implementation",
        "date": "2023-05-15",
        "description": "Implement and integrate feature C."
      },
      {
        "name": "Testing & Bug Fixes",
        "date": "2023-06-01",
        "description": "Complete testing and fix any identified issues."
      },
      {
        "name": "Launch",
        "date": "2023-06-30",
        "description": "Official release of the Amazing Project."
      }
    ]
  }
}


const createSpecFile = async (filePath: string, format: 'json' | 'yml' | 'yaml'): Promise<void> => {
  const spec = MOCK_SPEC_FILE;

  const yamlOptions = { indent: 2 };

  try {
    const fileContents = format === 'json' ? JSON.stringify(spec, null, 2) : yaml.dump(spec, yamlOptions);
    await fs.outputFile(filePath, fileContents, { flag: 'wx' });
    console.log(`Created AI spec file at ${filePath}`);
  } catch (error) {
    console.error(`Failed to create AI spec file at ${filePath}: ${(error as any)?.message}`);
    process.exit(1);
  }
};

export default createSpecFile;
