export type Answers = {
  field_name: string;
  value: string;
};

/**
 * ## Spec ideas
 * 
 * # V0.0.1
 * const spec = {
    name: '',
    description: '',
    author: '',
    version: '',
    ai: {
      framework: '',
      version: '',
    },
    languages: [],
    sources: [],
    models: [],
  };

  # V0.0.2
  interface ProjectSpec {
  lastUpdate: string;
  version: string;
  name: string;
  description: string;
  technologyStack: {
    frontend: string[];
    backend: string[];
    ciCd: string[];
  };
  repositoryUrl: string;
  projectManagementTool: string;
  teamMembers: {
    name: string;
    role: string;
    email: string;
  }[];
  timeline: {
    startDate: string;
    endDate: string;
    milestones: {
      name: string;
      date: string;
      description: string;
    }[];
  };
}
 */

export type ProjectSpec = {
  lastUpdate: string;
  version: string;
  name: string;
  description: string;
  technologyStack: {
    frontend: string[];
    backend: string[];
    ciCd: string[];
  };
  repositoryUrl: string;
  projectManagementTool: string;
  teamMembers: {
    name: string;
    role: string;
    email: string;
  }[];
  timeline: {
    startDate: string;
    endDate: string;
    milestones: {
      name: string;
      date: string;
      description: string;
    }[];
  };
}
